import { storage } from '../firebase'
import {
  ref,
  uploadBytes,
  getBytes,
  deleteObject,
  getDownloadURL,
  listAll,
} from 'firebase/storage'

// Upload a file to Storage
export const uploadFile = async (path, file) => {
  try {
    const storageRef = ref(storage, path)
    const snapshot = await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(snapshot.ref)
    return {
      name: snapshot.metadata.name,
      size: snapshot.metadata.size,
      url: downloadURL,
    }
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

// Download file data
export const downloadFile = async (path) => {
  try {
    const fileRef = ref(storage, path)
    const bytes = await getBytes(fileRef)
    return bytes
  } catch (error) {
    console.error('Error downloading file:', error)
    throw error
  }
}

// Get download URL
export const getFileURL = async (path) => {
  try {
    const fileRef = ref(storage, path)
    const url = await getDownloadURL(fileRef)
    return url
  } catch (error) {
    console.error('Error getting download URL:', error)
    throw error
  }
}

// Delete a file
export const deleteFile = async (path) => {
  try {
    const fileRef = ref(storage, path)
    await deleteObject(fileRef)
    return { success: true }
  } catch (error) {
    console.error('Error deleting file:', error)
    throw error
  }
}

// List files in a directory
export const listFiles = async (path) => {
  try {
    const dirRef = ref(storage, path)
    const result = await listAll(dirRef)
    const files = []

    for (const fileRef of result.items) {
      const url = await getDownloadURL(fileRef)
      files.push({
        name: fileRef.name,
        path: fileRef.fullPath,
        url: url,
      })
    }

    return files
  } catch (error) {
    console.error('Error listing files:', error)
    throw error
  }
}

// Upload multiple files
export const uploadMultipleFiles = async (basePath, files) => {
  try {
    const uploadPromises = files.map((file) =>
      uploadFile(`${basePath}/${file.name}`, file)
    )
    const results = await Promise.all(uploadPromises)
    return results
  } catch (error) {
    console.error('Error uploading multiple files:', error)
    throw error
  }
}

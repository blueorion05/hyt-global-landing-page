import { db } from '../firebase'
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore'

// Add a document
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })
    return { id: docRef.id, ...data }
  } catch (error) {
    console.error('Error adding document:', error)
    throw error
  }
}

// Get all documents from a collection
export const getDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const documents = []
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    return documents
  } catch (error) {
    console.error('Error getting documents:', error)
    throw error
  }
}

// Get a single document
export const getDocument = async (collectionName, docId) => {
  try {
    const docSnap = await getDoc(doc(db, collectionName, docId))
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      console.log('Document not found')
      return null
    }
  } catch (error) {
    console.error('Error getting document:', error)
    throw error
  }
}

// Update a document
export const updateDocument = async (collectionName, docId, data) => {
  try {
    await updateDoc(doc(db, collectionName, docId), {
      ...data,
      updatedAt: Timestamp.now(),
    })
    return { id: docId, ...data }
  } catch (error) {
    console.error('Error updating document:', error)
    throw error
  }
}

// Delete a document
export const deleteDocument = async (collectionName, docId) => {
  try {
    await deleteDoc(doc(db, collectionName, docId))
    return { success: true }
  } catch (error) {
    console.error('Error deleting document:', error)
    throw error
  }
}

// Query documents with conditions
export const queryDocuments = async (collectionName, conditions) => {
  try {
    const constraints = conditions.map(([field, operator, value]) =>
      where(field, operator, value)
    )
    const q = query(collection(db, collectionName), ...constraints)
    const querySnapshot = await getDocs(q)
    const documents = []
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    return documents
  } catch (error) {
    console.error('Error querying documents:', error)
    throw error
  }
}

// Real-time listener for a collection
export const subscribeToCollection = (collectionName, callback) => {
  try {
    const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
      const documents = []
      snapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() })
      })
      callback(documents)
    })
    return unsubscribe
  } catch (error) {
    console.error('Error subscribing to collection:', error)
    throw error
  }
}

// Real-time listener for a single document
export const subscribeToDocument = (collectionName, docId, callback) => {
  try {
    const unsubscribe = onSnapshot(doc(db, collectionName, docId), (docSnap) => {
      if (docSnap.exists()) {
        callback({ id: docSnap.id, ...docSnap.data() })
      } else {
        callback(null)
      }
    })
    return unsubscribe
  } catch (error) {
    console.error('Error subscribing to document:', error)
    throw error
  }
}

import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'

// Custom hook for Firebase authentication
export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Set up persistence
  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch((err) => {
      console.error('Persistence error:', err)
    })
  }, [])

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (currentUser) => {
        setUser(currentUser)
        setLoading(false)
      },
      (err) => {
        setError(err)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  // Register user
  const register = async (email, password) => {
    try {
      setError(null)
      const result = await createUserWithEmailAndPassword(auth, email, password)
      return result.user
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  // Login user
  const login = async (email, password) => {
    try {
      setError(null)
      const result = await signInWithEmailAndPassword(auth, email, password)
      return result.user
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  // Logout user
  const logout = async () => {
    try {
      setError(null)
      await signOut(auth)
      setUser(null)
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
  }
}

# Firebase Integration Guide

Your project is now fully integrated with Firebase! Here's how to use it.

## 📦 Installed Firebase Services

- **Authentication** - User login, registration, sign-out
- **Firestore** - Real-time database
- **Storage** - File upload/download
- **Analytics** - Track user interactions

## 📁 Project Structure

```
src/
├── firebase.js              # Firebase configuration & initialization
├── context/
│   └── AuthContext.jsx      # Auth context provider
├── hooks/
│   └── useAuth.js          # useAuth hook for authentication
├── components/
│   └── LoginForm.jsx       # Example login component
└── App.jsx                 # Main app (wrapped with AuthProvider)
```

## 🔐 Authentication

### Using the useAuthContext Hook

The easiest way to access authentication state throughout your app:

```jsx
import { useAuthContext } from './context/AuthContext'

function MyComponent() {
  const { user, loading, login, logout, register, error } = useAuthContext()

  // Access current user
  if (loading) return <p>Loading...</p>
  if (!user) return <p>Not logged in</p>

  return <p>Welcome, {user.email}!</p>
}
```

### Authentication Methods

#### Register a new user
```jsx
const { register } = useAuthContext()

const handleRegister = async () => {
  try {
    await register('user@example.com', 'password123')
  } catch (error) {
    console.error('Registration failed:', error.message)
  }
}
```

#### Login user
```jsx
const { login } = useAuthContext()

const handleLogin = async () => {
  try {
    await login('user@example.com', 'password123')
  } catch (error) {
    console.error('Login failed:', error.message)
  }
}
```

#### Logout user
```jsx
const { logout } = useAuthContext()

const handleLogout = async () => {
  try {
    await logout()
  } catch (error) {
    console.error('Logout failed:', error.message)
  }
}
```

## 🗄️ Firestore Database

### Adding data
```jsx
import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'

const addDocument = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date()
    })
    console.log('Document created:', docRef.id)
  } catch (error) {
    console.error('Error adding document:', error)
  }
}
```

### Reading data
```jsx
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id}:`, doc.data())
    })
  } catch (error) {
    console.error('Error fetching documents:', error)
  }
}
```

### Real-time updates
```jsx
import { db } from './firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'

function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const userData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setUsers(userData)
    })

    return () => unsubscribe()
  }, [])

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

## 📂 Firebase Storage

### Upload a file
```jsx
import { storage } from './firebase'
import { ref, uploadBytes } from 'firebase/storage'

const uploadFile = async (file) => {
  try {
    const storageRef = ref(storage, `files/${file.name}`)
    await uploadBytes(storageRef, file)
    console.log('File uploaded!')
  } catch (error) {
    console.error('Upload failed:', error)
  }
}
```

### Download a file
```jsx
import { storage } from './firebase'
import { ref, getBytes } from 'firebase/storage'

const downloadFile = async (fileName) => {
  try {
    const fileRef = ref(storage, `files/${fileName}`)
    const bytes = await getBytes(fileRef)
    console.log('File downloaded!', bytes)
  } catch (error) {
    console.error('Download failed:', error)
  }
}
```

## 📊 Analytics

Analytics is automatically initialized. Track custom events:

```jsx
import { getAnalytics, logEvent } from 'firebase/analytics'
import { analytics } from './firebase'

// Track a custom event
logEvent(analytics, 'page_view', {
  page_title: 'Home',
  page_location: window.location.href
})
```

## ⚙️ Environment Variables

Store sensitive config in `.env.local` (create from `.env.example`):

```
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_domain
# etc...
```

Access in code:
```js
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
```

## 🚀 Common Patterns

### Protected Routes
```jsx
import { useAuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuthContext()

  if (loading) return <p>Loading...</p>
  if (!user) return <Navigate to="/login" />

  return children
}
```

### Error Handling
```jsx
const { error } = useAuthContext()

if (error) {
  return <div className="alert alert-error">{error}</div>
}
```

### Loading States
```jsx
const { loading } = useAuthContext()

if (loading) {
  return <div className="loading loading-spinner"></div>
}
```

## 🔗 Useful Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase JavaScript SDK](https://firebase.google.com/docs/web/setup)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Authentication](https://firebase.google.com/docs/auth)

## ✅ Checklist

- [x] Firebase installed
- [x] Authentication set up
- [x] Firestore initialized
- [x] Storage configured
- [x] Analytics enabled
- [ ] Create Firestore collections in Firebase Console
- [ ] Set up Firebase Security Rules
- [ ] Test authentication flow
- [ ] Add your app-specific logic

# HYT Global Landing Page

A modern landing page built with React, Vite, Tailwind CSS, DaisyUI, and Firebase.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Firebase** - Backend services (Auth, Firestore, Storage, Analytics)

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/       # Reusable React components
│   ├── context/          # React context (Auth)
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions (Firestore, Storage)
│   ├── main.jsx          # Entry point
│   ├── App.jsx           # Main component
│   ├── App.css           # Component styles
│   ├── index.css         # Global styles
│   └── firebase.js       # Firebase configuration
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── FIREBASE.md           # Firebase integration guide
└── README.md             # This file
```

## Firebase Features

### ✨ Included Services

- **Authentication** - Email/password login, registration, sign-out
- **Firestore** - Real-time NoSQL database
- **Storage** - File upload/download
- **Analytics** - User interaction tracking

### 🔐 Authentication Usage

```jsx
import { useAuthContext } from './context/AuthContext'

function MyComponent() {
  const { user, login, logout } = useAuthContext()
  
  if (!user) return <p>Please login</p>
  
  return <p>Welcome, {user.email}!</p>
}
```

### 📚 Firestore Usage

```jsx
import { 
  addDocument, 
  getDocuments, 
  subscribeToCollection 
} from './utils/firestore'

// Add data
await addDocument('users', { name: 'John', email: 'john@example.com' })

// Get all documents
const users = await getDocuments('users')

// Real-time updates
subscribeToCollection('users', (users) => {
  console.log('Users updated:', users)
})
```

### 📂 Storage Usage

```jsx
import { uploadFile, getFileURL, deleteFile } from './utils/storage'

// Upload file
const { url } = await uploadFile('files/myfile.pdf', file)

// Get download URL
const fileUrl = await getFileURL('files/myfile.pdf')

// Delete file
await deleteFile('files/myfile.pdf')
```

## 🚀 Features

- Fast development with Vite's HMR
- Responsive design with Tailwind CSS
- Beautiful UI components from DaisyUI
- Dark/Light theme support
- Real-time database with Firestore
- User authentication with Firebase Auth
- File storage with Firebase Storage
- Analytics integration
- Type-safe with ESLint configuration
- Optimized production build

## 📖 Documentation

- [Firebase Integration Guide](./FIREBASE.md) - Complete Firebase usage guide
- [Firebase Docs](https://firebase.google.com/docs)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [DaisyUI Docs](https://daisyui.com)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```env
VITE_API_URL=http://localhost:3000
```

## 📝 Notes

- Firebase configuration is already set up in `src/firebase.js`
- Auth context provider wraps the entire app in `src/main.jsx`
- Use `useAuthContext()` hook to access auth state anywhere in the app
- Firestore and Storage utilities are available in `src/utils/`

## 🎯 Next Steps

1. Create Firestore collections in Firebase Console
2. Set up Firebase Security Rules
3. Customize the App component
4. Add more components and pages
5. Deploy to Firebase Hosting or Vercel

## 📄 License

MIT

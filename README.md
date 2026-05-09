# HYT Global Institute Landing Page

Marketing and inquiry landing page for HYT Global Institute, built with React and Vite. The site presents the institute, its programs, partner network, facilities, admissions flow, and contact form in a responsive single-page experience.

## Overview

This project is a public-facing landing page for HYT Global Institute. It is structured as a section-based site with smooth scrolling navigation, a floating scroll-to-top button, program cards with flip interactions, partner logos in a marquee, a facilities showcase, and a contact section powered by EmailJS.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- DaisyUI
- Firebase SDK for Auth, Firestore, Storage, and Analytics
- EmailJS for the contact form

## Features

- Sticky navbar with anchor navigation
- Hero, About, Why HYT, Courses, Partners, Facilities, Admissions, Contact, and Footer sections
- Responsive layouts for mobile, tablet, and desktop
- Flip-card course program display with detailed program information
- Partner logo marquee and institute spotlight card
- Embedded Google Maps location section
- Contact form with client-side validation, loading state, and success/error modal feedback
- Firebase initialization for auth, database, storage, and analytics
- Scroll-to-top action after scrolling down the page

## Project Structure

```
src/
├── assets/        # Images and branded assets used across sections
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── icons.jsx
│   ├── LoginForm.jsx
│   └── sections/
│       ├── About.jsx
│       ├── Admissions.jsx
│       ├── CampusGallery.jsx
│       ├── Contact.jsx
│       ├── CoursesSection.jsx
│       ├── Facilities.jsx
│       ├── Hero.jsx
│       ├── Mission.jsx
│       ├── Partners.jsx
│       ├── RecentNews.jsx
│       ├── StudentShowcase.jsx
│       └── WhyHYT.jsx
├── context/
│   └── AuthContext.jsx
├── hooks/
│   └── useAuth.js
├── utils/
│   ├── firestore.js
│   └── storage.js
├── App.jsx
├── App.css
├── firebase.js
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The app runs on `http://localhost:3000` by default and opens automatically when Vite starts.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Codebase

```bash
npm run lint
```

## Environment Variables

Create a `.env` file in the project root and define the following values:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=

VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID_ADMIN=
VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY=
VITE_EMAILJS_PUBLIC_KEY=
```

Firebase configuration is validated in [`src/firebase.js`](src/firebase.js), and the contact form reads EmailJS values directly from `import.meta.env` in [`src/components/sections/Contact.jsx`](src/components/sections/Contact.jsx).

## Firebase and EmailJS

Firebase is initialized for authentication, Firestore, Storage, and Analytics in [`src/firebase.js`](src/firebase.js). The project already includes helper modules and context wiring for authentication and database/storage access.

The contact form sends two EmailJS messages:

- an admin notification to HYT
- an auto-reply to the sender

If any EmailJS variable is missing, the form shows an error modal instead of attempting submission.

For detailed Firebase usage examples, see [`FIREBASE.md`](FIREBASE.md).

## Content and Assets

Most of the branded visuals live under the centralized asset folder inside `src/assets/HYT Global Institute Website Centralized Files-20260504T022615Z-3-001/HYT Global Institute Website Centralized Files/`.

Main asset groups include:

- Logo and partner company logos
- Program images
- Building and facilities images
- Photoshoot and recent news assets
- Updated TESDA leaflets

The course cards in [`src/components/sections/CoursesSection.jsx`](src/components/sections/CoursesSection.jsx) use local image assets, so keep filenames and folder structure intact when replacing visuals.

## Sections

- Hero section with primary call-to-action buttons
- About section with institute overview
- Why HYT section with value propositions
- Courses section with eight program cards and flip details
- Partners section with partner logos and institute spotlight
- Facilities section with campus imagery
- Admissions section with step-based application flow
- Contact section with contact details, map, and form
- Footer section with supporting links and branding

## Deployment

The project is ready for static hosting through Firebase Hosting or any Vite-compatible deployment target.

For Firebase Hosting, typical steps are:

1. Install the Firebase CLI.
2. Run `firebase init hosting` in the project root.
3. Set the public directory to `dist`.
4. Build the app with `npm run build`.
5. Deploy with `firebase deploy`.

## Notes

- The app entry point is wrapped in `AuthProvider` from [`src/main.jsx`](src/main.jsx).
- The navbar, sections, and footer are composed in [`src/App.jsx`](src/App.jsx).
- Vite serves the project on port `3000` as configured in [`vite.config.js`](vite.config.js).
- If you swap or add images, verify the exact source folder first, because similarly named asset folders can be misleading.

## License

No license has been specified in this repository.

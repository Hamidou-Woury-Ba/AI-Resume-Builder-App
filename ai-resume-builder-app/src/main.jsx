import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import path from 'path'
import Home from './home/index.jsx'
import Dashbord from './Dashbord/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './resume/[resume]/edit/index.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/dashbord',
        element: <Dashbord />,
      },
      {
        path: '/dashbord/resume/:resumeId/edit', // Ajouter un paramètre dynamique pour l'ID du CV
        element: <EditResume />,
      }
    ]
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)

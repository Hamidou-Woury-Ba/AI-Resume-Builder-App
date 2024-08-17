import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

function App() {

  /* useUser() :   
    Cette fonction renvoie un objet contenant des informations sur l'utilisateur actuellement connecté. 
    - Si aucun utilisateur n'est connecté, 
      - isSignedIn sera false. 
    - Si un utilisateur est connecté, 
      - isSignedIn sera true et user contiendra des informations sur l'utilisateur connecté. 
    - isLoaded sera true si Clerk a terminé de charger les informations de l'utilisateur  actuel. 
    - Si isLoaded est false, isSignedIn et user ne seront pas définis.
  */
  const {user, isLoaded, isSignedIn} = useUser()  
  
  if(!isSignedIn && isLoaded){ // Si l'utilisateur n'est pas connecté et que Clerk a terminé de charger les informations de l'utilisateur actuel
    return <Navigate to={'/auth/sign-in'} /> // Rediriger l'utilisateur vers la page de connexion
  }

  return (
    <>
      {/* C'est un espace réservé pour les composants de route enfants à rendre dans le composant de route parent. */}
      <Outlet /> 
    </>
  )
}

export default App

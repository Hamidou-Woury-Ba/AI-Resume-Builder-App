import { UserButton } from '@clerk/clerk-react'
import React from 'react'

function Home() {
  return (
    <div>
      <UserButton /> {/* Composant Clerk UserButton */}
    </div>
  )
}

export default Home

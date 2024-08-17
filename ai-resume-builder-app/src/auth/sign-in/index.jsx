import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
    return (
        <div className='flex justify-center items-center my-20'>
            {/* Composant Clerk SignIn */}
            <SignIn />
        </div>
    )
}

export default SignInPage

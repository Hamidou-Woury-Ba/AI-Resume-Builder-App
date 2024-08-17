import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import Dashbord from '@/Dashbord'

function Header() {

    const { user, isSignedIn } = useUser()

    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
            <Link to='/'>
                <img src="/logo.svg" width={100} height={100} alt="" />
            </Link>
            {
                isSignedIn ?
                    <div className="flex items-center gap-5">
                        <Link to='/dashbord'>
                            <Button variant="outline">Dashbord</Button>
                        </Link>
                        <UserButton />
                    </div> :
                    <Link to='/auth/sign-in'>
                        <Button>Get Started</Button>
                    </Link>
            }
        </div>
    )
}

export default Header

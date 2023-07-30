"use client"
import appwriteAuth from '@/appwrite/appwriteAuth'
import { Models } from 'appwrite'
import React, { useEffect, useState } from 'react'

function ProfileCard() {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)

    console.log(user);

    useEffect(() => {
        (async () => {
            const userData = await appwriteAuth.getCurrentUser()
            if (userData) {
                setUser(userData)
            }
        })()
    }, [])

  return (
    <div className='w-2/3 h-2/3 text-center'>
        {user ? <><p className='text-3xl text-gray-800'>Name: <span className='font-bold'>{user?.name}</span></p>
      <p className='text-3xl text-gray-800'>Email: <span className='font-bold'>{user?.email}</span></p></> : <p>Loading...</p>}
      
    </div>
  )
}

export default ProfileCard

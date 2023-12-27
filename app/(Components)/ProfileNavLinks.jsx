import Link from 'next/link'
import React from 'react'

const ProfileNavLinks = () => {
  return (
    <div className='grid md:grid-rows-4 gap-3'>
        <Link href='/Profile/MyProfile' className="hover:underline">My Profile</Link>
        <Link href='/Profile/MyHistory' className="hover:underline">My History</Link>
        <Link href='/Profile/MyAnalysis' className="hover:underline">My Analysis</Link>
        <Link href='/Profile/MyFriends' className="hover:underline">My Friends</Link>
    </div>
  )
}

export default ProfileNavLinks
import Link from 'next/link'
import React from 'react'

const ProfileNavLinks = () => {
  return (
    <div className='grid md:grid-rows-4 gap-3'>
        <Link href='/Profile/MyProfile'>My Profile</Link>
        <Link href='/Profile/MyHistory'>My History</Link>
        <Link href='/Profile/MyAnalysis'>My Analysis</Link>
        <Link href='/Profile/MyFriends'>My Friends</Link>
    </div>
  )
}

export default ProfileNavLinks
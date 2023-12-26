import React from 'react'
import { getServerSession } from "next-auth";
import { options } from '@/app/api/auth/[...nextauth]/options'
import Image from 'next/image';

const Profile = async () => {
  const session = await getServerSession(options);
  return (
    <div className='min-h-screen'>
      <h1>Profile Page</h1>
      <div>
        {session?.user?.name && <h1>Welcome <span className='text-blue-600 text-3xl'>{session?.user?.name}</span></h1>}
        {session?.user?.picture && <h1><img width="40" height="40" className="rounded-full m-3" src={session?.user?.picture} /></h1>}
      </div>
    </div>
  )
}

export default Profile
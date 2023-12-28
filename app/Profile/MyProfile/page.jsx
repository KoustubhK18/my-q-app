import React from 'react'
import { getServerSession } from "next-auth";
import { options } from '@/app/api/auth/[...nextauth]/options';

const MyProfile = async () => {
  const session = await getServerSession(options);
  return (
    <div className='min-h-screen'>
      <div>
        {session?.user && 
        <div className="grid grid-cols-10">
          <img width="60" height="60" className="rounded-full m-3 col-span-1" src={session?.user?.picture} />
          <span className='text-blue-600 text-3xl col-span-9 mt-6'>{session?.user?.name}
          </span>
        </div>}
      </div>
    </div>
  )
}

export default MyProfile
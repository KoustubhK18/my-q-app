import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from '@/app/api/auth/[...nextauth]/options'

const NavBar = async () => {
const session = await getServerSession(options);
console.log("Navbar session : ",session);
  return (<>
        <header className='bg-gray-600 text-gray-100'>
            <nav className="flex justify-between w-full bg-slate-600 px-10 py-2 mx-3">
                <div className='site-logo'>
                    <Link href='/'>Q App</Link>
                </div>
                <div className='flex gap-10 justify-end '>
                    <Link href='/Dashboard'>Dashboard</Link>
                    <Link href='/Member'>Member</Link>
                    <Link href='/Profile'>Profile</Link>
                    {
                    session ? (
                            <Link href="/api/auth/signout?callbackUrl=/" >Logout</Link>
                        ) : (
                            <Link href="/api/auth/signin" >Login</Link>
                        )
                    }
                </div>
                
            </nav>
        </header>
    </>
  )
}

export default NavBar
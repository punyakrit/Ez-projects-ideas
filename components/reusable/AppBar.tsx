import { Lightbulb, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import GoogleLoginButton from './GoogleLoginButton'
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import UserProfile from './UserProfile';

async function AppBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="z-20 mr-20 h-20 w-full mt-0 rounded-b-xl bg-black/10 backdrop-blur-3xl fixed">
      <div className=" text-white flex h-full md:px-6  px-5 p-1 gap-10 justify-between items-center mr-2 ">
        <Link href={"/"}>
          <div className=" cursor-pointer  text-yellow-500"><Lightbulb className='w-20 h-10'/></div>
        </Link>
        <div className="items-center space-x-10 md:flex md:flex-row hidden">
          <div className="transition duration-500 text-white/50 hover:cursor-pointer hover:text-white ">
            <Link href="/">Home</Link>
          </div>
          <div className="transition duration-500 text-white/50 hover:cursor-pointer hover:text-white ">
            <Link href="/about">About</Link>
          </div>
          <div className="transition duration-500 text-white/50 hover:cursor-pointer hover:text-white ">
            <Link href="/contact">Contact</Link>
          </div>
         
          

          {!session ? <GoogleLoginButton /> : <UserProfile />}
          
        </div>
        {/* <div className="md:hidden">
          <SidebarMobileView />
        </div> */}
      </div>
    </div>
  )
}

export default AppBar

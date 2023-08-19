import '@/app/globals.css'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React, { useEffect, useState } from 'react';
import Chat from '@/components/Chat/Chat';
import { User } from '@/app/types';
import Link from 'next/link';
import { parse } from 'cookie'
import { useRouter } from 'next/router';

// export async function getServerSideProps(context : any) {
//   const cookieHeader = context.req.headers.cookie
//   const myCookie = parse(cookieHeader || '')
//   const jwt = myCookie.jwt
//   return {
//     props: {
//       jwt: jwt ? jwt: null,
//     }
//   }
// }

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  // const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("http://localhost:3000/chat/user?userName=4DeR")
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
      } else {
        // router.push('/');
      }
    }
    fetchUser();
  }, [])

  return (
    <>{
      user &&
      <div className='flex flex-col w-screen h-screen overflow-hidden'>
        <Navbar user={user}/>
        <div className='flex'>
          <Sidebar location='Chat'/>
          <div className='flex justify-center w-full h-full mt-[5rem]'>
            <Chat user={user}/>
          </div>
        </div>
      </div>
    }
    </>
  )
}
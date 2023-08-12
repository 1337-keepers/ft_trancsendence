import '@/app/globals.css'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';
import Chat from '@/components/Chat/Chat';
import { useState } from 'react';
import { User } from '@/app/types';

export default function Home() {
  const username = "test"
  const [user, setUser] = useState<User | null>(null);
  return (
    <>
      <div className='flex flex-col w-screen h-screen overflow-hidden'>
        <Navbar username={username}/>
        <div className='flex'>
          <Sidebar location='Chat'/>
          <div className='flex justify-center w-full h-full mt-[5rem]'>
            <Chat user={user}/>
          </div>
        </div>
      </div>
    </>
  )
}
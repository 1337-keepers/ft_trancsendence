import React from 'react'
import '@/app/globals.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Buttons } from '@/app/types';

export default function settings() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <Navbar />
      <>
        <Sidebar data={Buttons.PARAM} />
      </>
    </div>
  )
}

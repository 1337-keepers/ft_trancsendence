import { Buttons } from '@/app/types';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react'
import '@/app/globals.css'

const game = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar msg={Buttons.GAME} />
        <div></div>
      </div>
    </div>
  )
}

export default game;

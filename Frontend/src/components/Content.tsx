import React from 'react'
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Firstdiv from './Firstdiv';
import Lastdiv from './Lastdiv';

const Content = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col grow items-center justify-start">
        <Firstdiv />
        <Lastdiv />
      </div>
    </div>
  )
}

export default Content;

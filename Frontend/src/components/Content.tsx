import React from 'react'
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Firstdiv from './Firstdiv';
import Lastdiv from './Lastdiv';
import { useState } from 'react';
import { Buttons } from '@/app/types';

const Content = () => {
  let data: string;
  return (
    <div className="flex grow">
      <Sidebar data={Buttons.PROFILE} />
      <div className="flex flex-col grow items-center justify-start">
        <Firstdiv />
        <Lastdiv />
      </div>
    </div>
  )
}

export default Content;
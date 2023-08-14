import TFA from '@/components/TFA';
import React from 'react'
import '@/app/globals.css'

const auth = () => {
  return (
    <div className="border-black w-screen h-screen grid grid-rows-3 bg-[#000355]">
        <div className="border rounded-br-full w-[250px] h-[250px] bg-[#8D8DDA] blur-[150px]"></div>
        <div className="flex justify-center"><TFA /></div>
        <div className="flex justify-end items-end">  
          <div className="border rounded-tl-full w-[250px] h-[250px] bg-[#ABD9D9] blur-[150px]">
          </div>
        </div>
    </div>
  )
}

export default auth;

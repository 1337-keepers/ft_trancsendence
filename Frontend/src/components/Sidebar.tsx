import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sm:block hidden">
      <div className="border-r border-black w-[75px] h-screen bg-[#000355] sm:bg-[#33437D] z-10 flex flex-col justify-between">
        <div className="sm:bg-[#33437D] sm:block hidden">
          <div className="flex justify-center mb-[50px] mt-[20px]">
            <Link href="/profile">
              <Image className="sm:block hidden" src={"/user_off.png"} alt="image" width={30} height={30}/>
            </Link>
          </div>
          <div className="flex justify-center mb-[50px] mt-[20px]">
            <Link href="/game">
              <Image className="sm:block hidden" src={"/game_off.png"} alt="image" width={37} height={37}/>
            </Link>
          </div>
          <div className="flex justify-center mb-[50px] mt-[20px]">
            <Link href="/friends">
              <Image className="sm:block hidden" src={"/fre_off.png"} alt="image" width={26} height={26}/>
            </Link>
          </div>
          <div className="flex justify-center mb-[50px] mt-[20px]">
            <Link href="/chat">
              <Image className="sm:block hidden" src={"/mes_off.png"} alt="image" width={29} height={29}/>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mb-[80px] bg-[#33437D]">
          <div className="sm:block hidden">
            <Link href="/settings">
              <Image src={"/param_off.png"} alt="image" width={32} height={32}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;

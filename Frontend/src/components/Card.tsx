import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="border border-black	rounded-[63px] bg-[#d9d9d933] w-[350px] h-[420px] sm:w-[541px] sm:h-[385px] flex flex-col items-center justify-center font-['outfit'] text-white">
      <div className="w-[65px] h-[84px] flex justify-center mb-[40px]">
        <Image src={"/logo.png"} alt="image" width={500} height={500}/>
      </div>
      <div className="text-[30px] mb-[20px] font-bold">Welcome to PongYo</div>
      <div className="text-[15px] ml-[50px] mr-[50px] mb-[20px]">Step into the world of competitive ping pong and experience the excitement of real-time multiplayer matches right from the comfort of your own device</div>
      <div className="rounded-full w-[125px] h-[45px] flex items-center justify-center bg-gradient-to-r from-[#8d8dda80] to-[#ABD9D980]">
        <button className="mr-[5px]">Sign in with </button>
        <div className="mt-[3px] w-[21px] h-[21px] flex justify-center">
          <Image src={"/42.png"} alt="image" width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Card;

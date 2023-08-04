import React, { useState, useEffect } from 'react'
import '@/app/globals.css'
import { useRouter } from 'next/router';
import Image from 'next/image';

const Username = () => {
  const router = useRouter();
  const user = router.query;
  const [width, setWidth] = useState(1000);

  // const handleResize = () => {
  //   const windowWidth = window.innerWidth;
  //   console.log(windowWidth);
  //   if (windowWidth < 768) {
  //     setWidth(200);
  //   } else if (windowWidth < 1024) {
  //     setWidth(400);
  //   } else {
  //     setWidth(968);
  //   }
  // };

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      {/*Navbar*/}
      <div className="w-screen h-[75px] bg-[#33437D] flex justify-between z-20">
        <div className="border-black flex justify-start items-center ml-[20px]">
          <Image src={"/logo.png"} alt="image" width={40} height={40}/>
        </div>
        <div className="border border-black rounded-2xl sm:w-[400px] w-[300px] h-[50px] flex justify-start items-center mt-[12px] mb-[12px]">
          <div>
            <Image src={"/ser.png"} alt="image" width={40} height={40}/>
          </div>
          <input className="sm:w-[400px] w-[300px] h-[43px] bg-[#33437D] rounded-2xl text-white focus:border-none focus:outline-none" placeholder="search...">
            
          </input>
        </div>
        <div className="flex justify-start items-center mr-[12px]">
          <Image src={"/not_off.png"} alt="image" width={27} height={27}/>
        </div>
      </div>
      <div className="flex">
      {/*Sidebar*/}
        <div className="w-[75px] h-screen bg-[#000355] sm:bg-[#33437D] z-10 flex flex-col justify-between">
          <div className="sm:block hidden bg-[#33437D]">
            <div className="flex justify-center mb-[50px] mt-[20px]">
              <Image src={"/user_off.png"} alt="image" width={30} height={30}/>
            </div>
            <div className="flex justify-center mb-[50px] mt-[20px]">
              <Image src={"/game_off.png"} alt="image" width={37} height={37}/>
            </div>
            <div className="flex justify-center mb-[50px] mt-[20px]">
              <Image src={"/fre_off.png"} alt="image" width={26} height={26}/>
            </div>
            <div className="flex justify-center mb-[50px] mt-[20px]">
              <Image src={"/mes_off.png"} alt="image" width={29} height={29}/>
            </div>
          </div>
          <div className="flex justify-center mb-[100px] bg-[#33437D]">
            <div className="sm:block hidden">
              <Image src={"/param_off.png"} alt="image" width={32} height={32}/>
            </div>
          </div>
        </div>
        {/*Content*/}
        <div className="flex flex-col grow items-center justify-start">
          {/* First */}
          <div className="relative flex items-center justify-center flex-col mt-[36px] mb-[19px]">
            {/* Cover  */}
            <div className="border h-[100px] md:h-[150px] w-[400px] md:w-[600px] lg:h-[242px] lg:w-[968px] rounded-t-2xl">
              <Image className="rounded-t-2xl" src={"/cover.png"} alt="cover" layout="responsive" width={width} height={242}/>
            </div>
            <div className="border w-[400px] md:w-[600px] h-[78px] lg:w-[968px] rounded-b-2xl bg-[#33437D] ">

            </div>
            {/* Avatar */}
            <div className="absolute md:bottom-10 md:left-20 bottom-50 left-50">
              <Image className="rounded-t-2xl" src={"/avatar.png"} alt="image" width={98} height={98}/>
            </div>
          </div>
          {/* Last */}
          <div className="rounded-2xl flex flex-col w-[413px] md:w-[613px] lg:w-[968px] h-[419px] bg-[#33437D] mt-[36px]">
            <div className="border-b-[2px] w-[400px] md:w-[600px] lg:w-[955px] h-[60px] flex items-center justify-center ml-[6px] mr-[6px]">
              <div className="border-r-[2px] w-[322px] h-[51px] flex items-center justify-center">
                <Image src={"/ach_off.png"} alt="image" width={34} height={34}/>
              </div>
              <div className="border-r-[2px] w-[322px] h-[51px] flex items-center justify-center">
                <Image src={"/his_off.png"} alt="image" width={30} height={30}/>
              </div>
              <div className="w-[322px] h-[51px] flex items-center justify-center">
                <Image src={"/rank_off.png"} alt="image" width={36} height={36}/>
              </div>
            </div>
            <div className="flex">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Username;

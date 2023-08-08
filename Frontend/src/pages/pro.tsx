import React, { useState, useEffect } from 'react'
import '@/app/globals.css'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

type User = {
  id: string,
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  cover: string,
  towFactorAuth: boolean,
}

const Profile = () => {
  const { username, id } = useRouter().query;
  
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/profile?username=${username}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('No such user');
        }
      } catch (error) {
        console.error('Unable to fetch user');
      }
    };
    if (username)
      fetchUser();
  }, [username]);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      {/*Navbar*/}
      <div className="w-screen h-[50px] bg-[#33437D] flex justify-between z-20">
        <div className="border-r border-black flex justify-start items-center">
          <Link href="/profile">
            <Image src={"/profile_logo.png"} alt="image" width={74} height={50}/>
          </Link>
        </div>
        <div className="border border-black rounded-md sm:w-[400px] w-[300px] h-[30px] flex justify-start items-center mt-[12px] mb-[12px]">
          <div className="ml-[5px]">
            <Image src={"/ser.png"} alt="image" width={25} height={25}/>
          </div>
          <input className="sm:w-[400px] w-[300px] h-[25px] bg-[#33437D] rounded-2xl text-white focus:border-none focus:outline-none ml-[10px]" placeholder="search...">
            
          </input>
        </div>
        <div className="flex justify-start items-center mr-[12px]">
          <Image src={"/not_off.png"} alt="image" width={22} height={22}/>
        </div>
      </div>
      <div className="flex">
      {/*Sidebar*/}
        <div className="sm:block hidden">
          <div className="border-r border-black w-[75px] h-screen bg-[#000355] sm:bg-[#33437D] z-10 flex flex-col justify-between">
            <div className="sm:bg-[#33437D] sm:block hidden">
              <div className="flex justify-center mb-[50px] mt-[20px]">
                <Image className="sm:block hidden" src={"/user_off.png"} alt="image" width={30} height={30}/>
              </div>
              <div className="flex justify-center mb-[50px] mt-[20px]">
                <Image className="sm:block hidden" src={"/game_off.png"} alt="image" width={37} height={37}/>
              </div>
              <div className="flex justify-center mb-[50px] mt-[20px]">
                <Image className="sm:block hidden" src={"/fre_off.png"} alt="image" width={26} height={26}/>
              </div>
              <div className="flex justify-center mb-[50px] mt-[20px]">
                <Image className="sm:block hidden" src={"/mes_off.png"} alt="image" width={29} height={29}/>
              </div>
            </div>
            <div className="flex justify-center mb-[80px] bg-[#33437D]">
              <div className="sm:block hidden">
                <Image src={"/param_off.png"} alt="image" width={32} height={32}/>
              </div>
            </div>
          </div>
        </div>
        {/*Content*/}
        <div className="flex flex-col grow items-center justify-start">
          {/* First */}
          <div className="relative flex items-center justify-center flex-col mt-[36px] mb-[19px]">
            {/* Cover  */}
            <div className="h-[100px] md:h-[150px] w-[400px] md:w-[600px] lg:h-[242px] lg:w-[968px] rounded-t-2xl">
              <Image className="rounded-t-2xl" src={"/cover.png"} alt="cover" width={968} height={242}/>
            </div>
            <div className="w-[400px] md:w-[600px] h-[78px] lg:w-[968px] rounded-b-2xl bg-[#33437D] flex items-center">
              {user ? (
              <div className="ml-[180px] text-green-500 font-bold tet-">
                <p>Username: {user.username}</p>
              </div>
              ) : (
                <p>Loading user data...</p>
              )}
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

export default Profile;
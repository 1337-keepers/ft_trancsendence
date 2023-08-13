import React from 'react'
import Image from 'next/image';

const Firstdiv = () => {
  return (
    <div className="relative flex items-center justify-center flex-col mt-[36px] mb-[19px]">
      {/* Cover  */}
      <div className="h-[100px] md:h-[150px] w-[400px] md:w-[600px] lg:h-[242px] lg:w-[968px] rounded-t-2xl">
        <Image className="rounded-t-2xl" src={"/cover.png"} alt="cover" width={968} height={242}/>
      </div>
      <div className="w-[400px] md:w-[600px] h-[78px] lg:w-[968px] rounded-b-2xl bg-[#33437D] flex items-center">
        {/* {user ? (
        <div className="ml-[180px] text-green-500 font-bold tet-">
          <p>Username: {user.username}</p>
        </div>
        ) : (
          <p>Loading user data...</p>
        )} */}
      </div>
      {/* Avatar */}
      <div className="absolute md:bottom-10 md:left-20 bottom-50 left-50">
        <Image className="rounded-t-2xl" src={"/avatar.png"} alt="image" width={98} height={98}/>
      </div>
    </div>
  )
}

export default Firstdiv;

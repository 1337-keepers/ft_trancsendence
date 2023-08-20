import TFA from '@/components/TFA';
import React from 'react'
import { useRouter } from 'next/router';
import '@/app/globals.css'
import { parse } from 'cookie';

export async function getServerSideProps(context : any) {
  const cookieHeader = context.req.headers.cookie;
  const myCookie = parse(cookieHeader || '');
  const jwt = myCookie.jwt;
  // console.log('jwt : ', jwt);
  return {
    props: {
      jwt: jwt ? jwt : null,
    },
  };
}

const auth = (myCookie: string) => {
  const router =  useRouter();
  const ins = Object.values(myCookie)[0];
  return (
    <div className="border-black w-screen h-screen grid grid-rows-3 bg-[#000355]">
        <div className="border rounded-br-full w-[250px] h-[250px] bg-[#8D8DDA] blur-[150px]"></div>
        <div className="flex justify-center"><TFA ins={ins}/></div>
        <div className="flex justify-end items-end">  
          <div className="border rounded-tl-full w-[250px] h-[250px] bg-[#ABD9D9] blur-[150px]">
          </div>
        </div>
    </div>
  )
}

export default auth;

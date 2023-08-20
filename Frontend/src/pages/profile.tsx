import React, { useState, useEffect } from 'react'
import '@/app/globals.css'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { parse } from 'cookie';
import { User } from '../app/types';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';

export async function getServerSideProps(context : any) {
  const cookieHeader = context.req.headers.cookie;
  const myCookie = parse(cookieHeader || '');
  const jwt = myCookie.jwt;
  return {
    props: {
      jwt: jwt ? jwt : null,
    },
  };
}

const Profile = (myCookie: string) => {
  
  const [Loading, setLoading] = useState<boolean>(true);
  const ins = Object.values(myCookie)[0];
  const [user, setUser] = useState<User | null>(null);
  const [cookie, setCookie] = useState<string | null>(ins);
  const router = useRouter();

  useEffect(() => {

    if (cookie == null) {
      router.push('/');
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/profile?token=${cookie}`);
        if (response.ok) {
          setLoading(false);
          const userData: User = await response.json();
          setUser(userData);
        } else {
          console.error('No such user');
          router.push('/');
        }
      } catch (error) {
        console.error('Unable to fetch user');
        // 505
      }
    };
    if (cookie)
      fetchUser();
  }, [cookie]);

  if (Loading) {
    return (
      <></>
    )
  }

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto">
      <Navbar />
      {user && <Content user={user}/>}
    </div>
  )
}

export default Profile;
'use client'

import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Button = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('http://localhost:3000');
    };
    
    return (
    <>
        <button className="mr-[5px]" onClick={handleClick}>
            Sign in with
            <Link href="http://localhost:3000" />
        </button>
    </>
  )
}

export default Button;

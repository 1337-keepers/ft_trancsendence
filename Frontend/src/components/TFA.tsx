'use client';

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import { User } from '../app/types';

let currentOTPIndex: number = 0;
const TFA = (props: any) => {
  const router = useRouter();
  const [cookie, setCookie] = useState<string | null>(props.ins);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [code, setCode] = useState<string | null>(null);
  const [correct, setCorrect] = useState(true);
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<User | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      const newOTP: string[] = [...otp];
      newOTP[currentOTPIndex] = value.substring(value.length - 1);
      if (!value)
        setActiveOTPIndex(currentOTPIndex - 1);
      else
        setActiveOTPIndex(currentOTPIndex + 1);
      setOtp(newOTP);
    }
  useEffect(() => {   

    if (cookie == null) {
      console.log('Cookie is null');
      setLoading(true);
      router.push('/');
      return;
    }

    const fetchCode = async () => {
      // console.error('I am In3');
      try {
        // console.error('I am In4');
        const response = await fetch(`http://localhost:3000/2fa/verify?secret=${code}&cookie=${props.cookie}`);
        if (response.ok) {
          const valid = await response.json();
          if (valid.valid === true)
          {
            setCorrect(true);
            router.push('/profile');
          }
          else
            setCorrect(false);
        }
        else
          console.error('No such data');
      }
      catch (error)
      {
        console.error('Unable to fetch data');
      }
    };
    if (code)
      fetchCode();
  }, [code]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>): void => {
    if (otp.some(value => value === "")) {
      setCode(null);
      return;
    }
    setCode(otp.join(""));
}

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number): void => {
    currentOTPIndex = index;
    if (e.key === 'Backspace') {
        setActiveOTPIndex(currentOTPIndex - 1);
      }
  }

  useEffect(() => {
    inputRef?.current?.focus();
  }, [activeOTPIndex]);

  if (Loading) {
    return (
      <></>
    )
  }

  return (
    <div className="border border-black	rounded-[63px] bg-[#d9d9d933] w-[350px] h-[420px] sm:w-[541px] sm:h-[385px] flex flex-col items-center justify-center font-['outfit'] text-white">
      <div className="w-[65px] h-[84px] flex justify-center mb-[20px]">
        <Image src={"/logo.png"} alt="image" width={500} height={500}/>
      </div>
      <div className="text-[30px] mb-[10px] font-bold">2FA</div>
      <div className="text-[15px] ml-[50px] mr-[50px] mb-[20px]">get a verification code from your phone</div>
      <div className="sm:w-[400px] h-[45px] flex space-x-[26px] mb-[20px] items-center">
        {otp.map((data, index) => {
          return (
            <input
              key={index}
              ref={index === activeOTPIndex ? inputRef : null}
              className="w-[20px] h-[20px] sm:w-[45px] sm:h-[45px] text-black text-[16px] sm:text-[35px] transition spin-button-none outline-none text-center font-semibold rounded-sm"
              type="number"
              value={otp[index]}
              onChange={(e) => handleOnChange(e)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
          );
        })}
        {/* <input className="w-[45px] h-[45px] text-black text-[35px] transition spin-button-none outline-none text-center font-semibold" type="number" placeholder=""/>
        <input className="w-[45px] h-[45px] text-black text-[35px] transition spin-button-none outline-none text-center font-semibold" type="number" placeholder=""/>
        <input className="w-[45px] h-[45px] text-black text-[35px] transition spin-button-none outline-none text-center font-semibold" type="number" placeholder=""/>
        <input className="w-[45px] h-[45px] text-black text-[35px] transition spin-button-none outline-none text-center font-semibold" type="number" placeholder=""/>
        <input className="w-[45px] h-[45px] text-black text-[35px] transition spin-button-none outline-none text-center font-semibold" type="number" placeholder=""/>
        <input className="w-[45px] h-[45px] text-black text-[35px] transition spin-button-none outline-none text-center font-semibold" type="number" placeholder=""/> */}
      </div>
      <div>
        {
          !correct && <div className="text-[15px] ml-[50px] mr-[50px] mb-[20px] text-">Incorrect Code</div>
        }
      </div>
      <div className="rounded-full w-[125px] h-[45px] flex items-center justify-center bg-gradient-to-r from-[#8d8dda80] to-[#ABD9D980]">
          <button className="text-[20px] font-bold" onClick={(e) => handleSubmit(e)}>verify</button>
      </div>
    </div>
  )
}

export default TFA;

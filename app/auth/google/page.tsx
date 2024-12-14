'use client'; // Ensure it's a Client Component

import config from '@/config';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
//@ts-ignore
import Cookie from "js-cookie"

export default function AuthGooglePage() {
  const searchParams = useSearchParams();

  async function log(){
    const code = searchParams?.get('code') ?? '';
    const res = await axios.get(`${config.baseUrl}/google/callback?code=${code}`);
    console.log(res)
    if(res.data.status === "PASS"){
        const ress = await Cookie.set("access-token", res.data.token)
        console.log(ress)
        window.location.href = "/"
    }else {
        alert("something went wrong");
    }
  }
  useEffect(()=>{
    log();
  },[])

  return (
    <div>
      Wait while fetching
    </div>
  );
}

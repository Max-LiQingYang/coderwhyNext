"use client"

import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    console.warn('home')
  })


  return (
    <div>home
      <Link href={'/cart/login'}><button>login</button></Link>
      <iframe src="./cart" id='iframe'></iframe>
    </div>
  );
}

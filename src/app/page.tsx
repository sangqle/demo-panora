"use client";

import Image from "next/image";
import Script from "next/script";
import './pannellum.css'
import './custom.css'
export default function Home() {
  // Hot spot creation function

  return (
    <div className="">
      <Script type="text/javascript" src="/vendor/pannellum.js" />

      <Script type="text/javascript" src="demo.js" />
      <div className='flex justify-center items-center'>
        <div className='w-screen h-[800px]'>
          <div id="panorama" ></div>
        </div>
      </div>
    </div>
  );
}

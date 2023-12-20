"use client";

import Image from "next/image";
import Script from "next/script";
import './pannellum.css'
export default function Home() {
  // Hot spot creation function

  return (
    <div className="">
      <Script type="text/javascript" src="/vendor/pannellum.js" />

      <Script type="text/javascript" src="demo.js" />
      <style jsx>
        {`
          #panorama {
            width: 600px;
            height: 400px;
          }
          .custom-hotspot {
            height: 50px;
            width: 50px;
            background: #f00;
          }
          div.custom-tooltip span {
            visibility: hidden;
            position: absolute;
            border-radius: 3px;
            background-color: #fff;
            color: #000;
            text-align: center;
            max-width: 200px;
            padding: 5px 10px;
            margin-left: -220px;
            cursor: default;
          }
          div.custom-tooltip:hover span {
            visibility: visible;
          }
          div.custom-tooltip:hover span:after {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-width: 10px;
            border-style: solid;
            border-color: #fff transparent transparent transparent;
            bottom: -20px;
            left: -10px;
            margin: 0 50%;
          }
          `}
      </style>
      <div className='flex justify-center items-center'>
        <div id="panorama"></div>
      </div>
    </div>
  );
}

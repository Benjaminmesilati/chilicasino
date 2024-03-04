// src/components/sections/Dashboard/WelcomeBanner.tsx
import React from "react";
import {FaDiscord, FaHandsHelping} from 'react-icons/fa';
import {BiLogoTwitter} from 'react-icons/bi';

export function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-gradient-to-br from-orange-300 via-pink-500 to-[#EC8760]">
      <div className="lg:col-span-2 text-center lg:text-left">
        <div className="flex items-center justify-center md:justify-start">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
            Welcome to Chili Casino
          </h1>
          <img src="/wave.gif" className="h-14" alt="Gamba Logo" />
        </div>
        <p className="mt-4 text-white drop-shadow">
          A fair, simple, and decentralized casino on Solana.
        </p>
      </div>
      <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
        
        <button
          onClick={() =>
            window.open("https://twitter.com/ChiliOnSol")
          }
          className="flex items-center justify-center rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          <BiLogoTwitter className="mr-1" />Twitter
        </button>
        <button
          onClick={() => window.open("https://discord.gg/FNF7bBQwbJ")}
          className="flex items-center justify-center rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
          <FaDiscord className="mr-1" /> Discord
        </button>
        {/* <button
          onClick={() => window.open("#")}
          className="flex items-center justify-center rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
        >
         <FaHandsHelping className="mr-1" /> How to Play
        </button> */}
      </div>
    </div>
  );
}

import React from "react";
import macImg from "../assets/Macbook-Pro.png";

const Hero = () => {
  return (
    <div className=" h-screen w-screen px-4 py-8 text-[#E6E6E6] bg-[#50f]">
      <div className="max-w-5xl h-full mx-auto ">
        <div className="flex h-fit justify-between w-full px-2">
          <h1 className="text-2xl font-medium tracking-wide">COINVESTMENT</h1>
          <div className="flex font-extralight items-center text-[1rem] space-x-8">
            <a className="opacity-60 hover:opacity-100" href="/">
              <p>Available Bundle</p>
            </a>
            <a className="opacity-60 hover:opacity-100" href="/">
              <p>Why Coinvestment</p>
            </a>
            <a className="opacity-60 hover:opacity-100" href="/">
              <p>FAQ</p>
            </a>
            <a className="opacity-60 hover:opacity-100" href="/">
              <p>Resources</p>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center h-[60%]">
          <img className="w-[30rem] h-min" src={macImg} alt="img" />
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold">Invest in Bundles,</h1>
          <h1 className="text-4xl font-extrabold">not discrete cryptos.</h1>
          <p className="text-lg font-extralight">
            One click. Dozens of cryptos. Zero service fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

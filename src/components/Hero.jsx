import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import macImg from "../assets/Macbook-Pro.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen w-screen px-4 py-8 text-primaryLight bg-[#50f]">
      <div className="max-w-5xl h-full mx-auto ">
        <div className="flex h-fit justify-between w-full px-2">
          <div className="flex flex-row align-middle justify-center gap-4">
            <img
              src={Logo}
              alt="coinvestment logo"
              width="42px"
              // className="border-primaryPurple border-2 border-opacity-60 rounded-lg"
            />
            <h1 className="text-2xl font-medium tracking-wide my-auto">
              COINVESTMENT
            </h1>
          </div>
          <div className="flex font-extralight items-center text-[1rem] space-x-8">
            <a className="opacity-80 hover:opacity-100" href="/">
              <p>Available Bundle</p>
            </a>
            <a className="opacity-80 hover:opacity-100" href="/">
              <p>Why Coinvestment</p>
            </a>
            <a className="opacity-80 hover:opacity-100" href="/">
              <p>FAQ</p>
            </a>
            <a className="opacity-80 hover:opacity-100" href="/">
              <p>Resources</p>
            </a>
            <button
              className="border border-white px-3 rounded-md hover:bg-white hover:bg-opacity-10 shadow-xl hover:shadow-none py-1"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
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

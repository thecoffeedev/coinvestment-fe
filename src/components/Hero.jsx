import React from "react";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll, Link } from 'react-scroll';
import Logo from "../assets/logo.svg";
import macImg from "../assets/Macbook-Pro.png";

const Hero = (props) => {
  const navigate = useNavigate();
  return (
    <div data-testid="hero" className=" h-screen w-screen px-4 py-8 text-primaryLight bg-[#50f]">
      <div className="max-w-5xl h-full mx-auto ">
        <div className="flex h-fit justify-between w-full px-2">
          <div className="flex flex-row align-middle justify-center gap-4">
            <img
              src={Logo}
              alt="coinvestment logo"
              width="42px"
            // className="border-primaryPurple border-2 border-opacity-60 rounded-lg"
            />
            <h1 data-testid="brandLogo" className="text-2xl font-medium tracking-wide my-auto">
              COINVESTMENT
            </h1>
          </div>
          <div className="flex font-extralight items-center text-[1rem] space-x-8">
            <button className="opacity-80 hover:opacity-100" href="/">
              <Link data-testid="availableBundles" to="bundles" smooth={true} offset={-100} duration={1000}>Available Bundle</Link>
            </button>
            <button className="opacity-80 hover:opacity-100" href="/">
              <Link data-testid="whyCoinvestment" to="info" smooth={true} offset={0} duration={1000}>Why Coinvestment</Link>
            </button>
            <button className="opacity-80 hover:opacity-100" href="/">
              <Link data-testid="faq" to="faq" smooth={true} offset={0} duration={1000}>FAQ</Link>
            </button>
            {props.isLoggedIn && localStorage.getItem("$AUTH_TOKEN") ?
              <button
                className="border border-white px-3 rounded-md hover:bg-white hover:text-primaryPurple font-semibold   shadow-xl hover:shadow-none py-1"
                onClick={() => navigate("/db/crypto")}
              >
                Dashboard
              </button>
              :

              <button
                className="border border-white px-3 rounded-md hover:bg-white hover:text-primaryPurple font-semibold shadow-xl hover:shadow-none py-1"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            }
          </div>
        </div>
        <div className="flex justify-center items-center h-[60%]">
          <img data-testid="heroImage" className="w-[34rem] h-min" src={macImg} alt="macImg" />
        </div>
        <div className="text-center space-y-3">
          <h1 data-testid="tagline1" className="text-4xl font-extrabold">Invest in Bundles,</h1>
          <h1 data-testid="tagline2" className="text-4xl font-extrabold">not discrete cryptos.</h1>
          <p data-testid="para1" className="text-lg font-extralight">
            One click. Dozens of cryptos. Zero service fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useContext, useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Bundles from "../../components/Bundles";
import Buy from "../../components/Buy.jsx";
import Faq from "../../components/Faq.jsx";
import Footer from "../../components/Footer.jsx";
import Hero from "../../components/Hero";
import Info from "../../components/Info.jsx";
import Points from "../../components/Points.jsx";
import SupportCoins from "../../components/SupportCoins.jsx";
import { UserContext } from "../../utils/UserContext";

function Landing() {
  const userContext = useContext(UserContext);
  const [contextUser, _] = userContext;
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (contextUser.authToken){
      setIsLoggedIn(true)
    }
    setTimeout(() => {
      setIsLoading(false);
      console.log("false is Loading");
    }, 1600);
  }, []);

  if (isLoading) {
    return (
      <div className="grid place-items-center h-[100vh] w-[100vw]">
        <HashLoader color="#5050ff" size={74} />
      </div>
    );
  }

  return (
    <div>
      <Hero isLoggedIn={isLoggedIn} />
      <Bundles />
      <Info />
      <Points />
      <Buy />
      <SupportCoins />
      <Faq />
      <Footer />
    </div>
  );
}

export default Landing;

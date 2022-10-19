import React from "react";
import Bundles from "../../components/Bundles";
import Buy from "../../components/Buy.jsx";
import Faq from "../../components/Faq.jsx";
import Footer from "../../components/Footer.jsx";
import Hero from "../../components/Hero";
import Info from "../../components/Info.jsx";
import Points from "../../components/Points.jsx";
import SupportCoins from "../../components/SupportCoins.jsx";

function Landing() {
  return (
    <div>
      <Hero />
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

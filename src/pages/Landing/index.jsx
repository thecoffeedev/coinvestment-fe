import React from "react";
import Bundle from "../../components/Bundle.jsx";
import Bundles from "../../components/Bundles";
import Buy from "../../components/Buy.jsx";
import Hero from "../../components/Hero";
import Info from "../../components/Info.jsx";
import Points from "../../components/Points.jsx";

function Landing() {
  return (
    <div>
      <Hero />
      <Bundles />
      <Info />
      <Points />
      <Buy />
    </div>
  );
}

export default Landing;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alpha from "../assets/icons8-alpha-32.png";
import Beta from "../assets/icons8-beta-32.png";
import Mu from "../assets/icons8-mu-32.png";
import dynamicBundleImages from "../helpers/dynamicBundleImages";

function BundleCard({ bundleObject }) {
  const navigate = useNavigate();

  return (
    <div
      className="card border border-purple-300 shadow-lg shadow-violet-200 bg-violet-50 rounded-lg mx-auto w-[96%] py-2 px-4 hover:cursor-pointer"
      onClick={() =>
        navigate(`/db/account/bundle/${bundleObject.bundleAddress}`)
      }
    >
      <div className="flex flex-row justify-start align-middle gap-4">
        {/* <img
          src={
            bundleObject.bundleName === "Alpha"
              ? Alpha
              : bundleObject.bundleName === "Beta"
              ? Beta
              : Mu
          }
          alt=""
          className="invert"
          width={"48px"}
        /> */}
             <img src={dynamicBundleImages(bundleObject.bundleName)} alt="coin" className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple" />
        <h1 className="text-2xl my-auto">{bundleObject.bundleName}</h1>
      </div>
      <div className="flex flex-col mt-2">
        {/* <p>
          <span className="font-bold">Bundle Name:</span>&nbsp;&nbsp;
          {bundleObject.bundleName}
        </p> */}
        <p>
          <span className="font-bold">Holding Period:</span>&nbsp;&nbsp;
          {bundleObject.holdingPeriod} Months
        </p>
        <p>
          <span className="font-bold">Amount Invested:</span>&nbsp;&nbsp;
          {bundleObject.amount}
        </p>
        <p>
          <span className="font-bold">Purchase Date:</span>&nbsp;&nbsp;
          {bundleObject.purchaseDatetime.split(" ")[0]}
        </p>
      </div>
    </div>
  );
}

export default BundleCard;

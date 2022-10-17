import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alpha from "../assets/icons8-alpha-32.png";
import Beta from "../assets/icons8-beta-32.png";
import Mu from "../assets/icons8-mu-32.png";

function BundleCard({ bundleObject }) {
  const navigate = useNavigate();
  const [bundleCoin, setBundleCoin] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${bundleObject.cryptocurrencyCode}`
      )
      .then((res) => setBundleCoin(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("wallet-coin", bundleCoin);
    console.log("wallet data internal", bundleObject);
  }, [bundleCoin]);

  return (
    <div
      className="card border bg-blue-50 rounded-lg mx-auto w-[96%] py-2 px-4 hover:cursor-pointer"
      onClick={() =>
        navigate(`/db/account/bundle/${bundleObject.bundleAddress}`)
      }
    >
      <div className="flex flex-row justify-start align-middle gap-4">
        <img
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
        />
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

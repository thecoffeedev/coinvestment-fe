import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";


function WalletCard({ walletObject }) {
  const navigate = useNavigate();
  const [walletCoin, setWalletCoin] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${walletObject.cryptocurrencyCode}`
      )
      .then((res) => setWalletCoin(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("wallet-coin", walletCoin);
    console.log("wallet data internal", walletObject);
  }, [walletCoin]);

  if (!walletCoin.name) {
    return (
      <div className="card border border-violet-300 bg-violet-50 shadow-lg shadow-violet-200 rounded-lg mx-auto w-[96%] py-2 px-4 hover:cursor-pointer">
        <div className="grid place-items-center h-full w-full">
          <HashLoader color="#5050ff" size={46} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="card border border-violet-300 bg-violet-50 shadow-lg shadow-violet-200 rounded-lg mx-auto w-[96%] py-2 px-4 hover:cursor-pointer"
      onClick={() =>
        navigate(`/db/account/wallet/${walletObject.walletAddress}`)
      }
    >
      <div className="flex flex-row justify-start align-middle gap-4">
        <img src={walletCoin.image?.small} alt="" width={"34px"} />
        <h1 className="text-2xl my-auto ml-2">{walletCoin.name}</h1>
      </div>
      <div className="flex flex-col mt-2">
        <p>
          <span className="font-bold">Wallet Address:</span>&nbsp;&nbsp;
          {walletObject.walletAddress}
        </p>
        <p>
          <span className="font-bold">Holding Period:</span>&nbsp;&nbsp;
          {walletObject.holdingPeriod} Months
        </p>
        <p>
          <span className="font-bold">Initial Balance:</span>&nbsp;&nbsp;
          {walletObject.initialBalance}
        </p>
        <p>
          <span className="font-bold">Current Balance:</span>&nbsp;&nbsp;
          {walletObject.currentBalance}
        </p>
      </div>
    </div>
  );
}

export default WalletCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div
      className="card border bg-blue-50 rounded-lg mx-auto w-[96%] py-2 px-4 hover:cursor-pointer"
      onClick={() =>
        navigate(`/db/account/wallet/${walletObject.walletAddress}`)
      }
    >
      <div className="flex flex-row justify-start align-middle gap-4">
        <img src={walletCoin.image?.small} alt="" />
        <h1 className="text-2xl my-auto">{walletCoin.name}</h1>
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

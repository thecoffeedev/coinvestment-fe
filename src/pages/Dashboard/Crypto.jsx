import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from ".";
import CoinItem from "../../components/CoinItem";
import Coin from "./Coin";

const Coins = (props) => {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Dashboard>
      <div className="w-full px-4 py-32 text-sm sm:text-lg ">
        <div className="max-w-5xl px-4 mx-auto text-gray-900 border border-blue-200 shadow-2xl rounded-xl shadow-blue-300">
          <div className="flex justify-around sm:justify-between font-bold  sm:pl-8 sm:pr-[4.5rem] pt-4 pb-2 ">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p>24h</p>
            <p className="hidden md:flex">Volume</p>
            <p className="hidden md:flex">Market Capital</p>
          </div>

          {coins.map((coins) => {
            return (
              <Link
                to={`/db/crypto/${coins.id}`}
                element={<Coin />}
                key={coins.id}
              >
                <CoinItem coins={coins} />
              </Link>
            );
          })}
        </div>
      </div>
    </Dashboard>
  );
};

export default Coins;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Dashboard from ".";
import CoinItem from "../../components/CoinItem";
import Coin from "./Coin";

const Coins = (props) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .then((res) => setIsLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Dashboard>
      <div data-testid="cryptoContainer" className="w-full px-2 py-4 text-sm sm:text-lg ">
        <h1 data-testid="cryptoHeading" className="text-4xl font-bold text-center mb-4">
          Cryptocurrencies
        </h1>
        <div className="max-w-5xl px-4 mx-auto text-gray-900 border border-indigo-200 shadow-2xl rounded-xl shadow-indigo-300">
          <div className="w-full">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search coin"
              className="border border-indigo-200 shadow rounded-lg shadow-indigo-300 w-full py-1 px-4 my-4"
              type="text"
              data-testid="cryptoSearch"
            />
          </div>
          <div className="flex justify-around sm:justify-between font-bold  sm:pl-8 sm:pr-[4.5rem] pt-4 pb-2 ">
            <p data-testid="row">#</p>
            <p data-testid="row1">Coins</p>
            <p data-testid="row2">Price</p>
            <p data-testid="row3">24h</p>
            <p data-testid="row4" className="hidden md:flex">Volume</p>
            <p data-testid="row5" className="hidden md:flex">Market Capital</p>
          </div>
          {isLoading && (
            <div className="grid place-items-center h-[20vh] w-full col-span-3">
              <HashLoader color="#5050ff" size={64} />
            </div>
          )}
          {coins
            .filter((coins) => {
              return search.toLowerCase() === ""
                ? coins
                : coins.symbol.toLowerCase().includes(search) ||
                coins.id.toLowerCase().includes(search);
            })
            .map((coins) => {
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

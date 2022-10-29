import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from ".";
import { buyWallet } from "../../apis/wallet";
import Modal from "../../components/Modal/Modal";
import { Toastify } from "../../utils/Toast";

const Coin = (props) => {
  const params = useParams();
  const [coin, setCoin] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  const [buyObject, setBuyObject] = useState({
    units: 0,
    minHoldingPeriod: 18,
    cardNumber: "",
    expiry: "",
  });
  const [CoinModal, setCoinModal] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBuyCoin = () => {
    buyWallet({
      initialBalance: buyObject.units,
      cryptocurrencyCode: coin.id,
      holdingPeriod: buyObject.minHoldingPeriod,
      initialRate: coin.market_data.current_price.gbp,
      amount: coin.market_data.current_price.gbp * buyObject.units,
      cardNumber: buyObject.cardNumber,
      expiry: buyObject.expiry,
    }).then((res) => {
      if (
        res.data.status.statusCode === "FAILURE" &&
        res.data.status.statusMessage ===
          "Initial Balance must be greater than zero"
      ) {
        Toastify("error", "Please enter a valid Units for purchase.");
      } else if (res.data.status.statusCode === "FAILURE") {
        Toastify("error", res.data.status.statusMessage);
      } else {
        Toastify("success", `Purchase of ${coin.name} is Successful.`);
        setCoinModal(false)
        setBuyObject({
          units: 0,
          minHoldingPeriod: 18,
          cardNumber: "",
          expiry: "",
        })
      }
    });
  };

  return (
    <Dashboard>
      <div className="w-full max-w-3xl p-8 mx-auto text-center text-gray-700 border border-indigo-200 rounded-lg shadow-lg shadow-indigo-100">
        <div className="w-full px-4 py-8">
          <h1 className="text-4xl font-bold uppercase">{coin.name}</h1>
        </div>
        <div className="w-full max-w-3xl p-4 mx-auto mt-4 text-gray-700 border border-indigo-200 rounded-lg shadow-lg shadow-indigo-100">
          <div className="flex justify-center px-8 mb-4 sm:justify-between">
            <h1 className=" text-sm my-auto bg-blue-500 w-fit p-[2px] px-2 rounded-md text-white shadow-lg shadow-blue-500">
              Rank #{coin.market_cap_rank}
            </h1>
            <button
              onClick={() => {
                setCoinModal(true);
              }}
              className="border border-red-600 text-white rounded-md hover:shadow-md shadow-red-500 bg-red-600 shadow-lg hover:bg-red-700 p-[2px] px-2"
            >
              Buy
            </button>
          </div>
          <div className="grid w-full gap-8 p-2 px-8 text-center sm:grid-cols-2">
            <div className="flex justify-center sm:justify-start">
              {coin.image ? (
                <img src={coin.image.small} alt={coin.name} />
              ) : null}
              <p className="p-3 font-bold uppercase ">{coin.name}</p>
              <p className="py-3 uppercase">({coin.symbol}/GBP)</p>
            </div>
            <div className="flex justify-center sm:justify-end">
              {coin.market_data ? (
                <h1 className="text-5xl font-medium w-fit">
                  &pound;{coin.market_data.current_price.gbp.toLocaleString()}
                </h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl px-2 py-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg sm:p-6 shadow-blue-100">
          <table className="w-full text-sm md:text-lg">
            <thead className="">
              <tr className="justify-between bg-blue-100">
                <th>1h</th>
                <th className="border-white border-x-4">24h</th>
                <th>7d</th>
                <th className="border-white border-x-4">14d</th>
                <th>30d</th>
                <th className="border-l-4 border-white">1y</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center bg-blue-50">
                {coin.market_data ? (
                  <td>
                    {coin.market_data.price_change_percentage_1h_in_currency.gbp.toFixed(
                      2
                    )}
                    %
                  </td>
                ) : null}
                {coin.market_data ? (
                  <td className="border-white border-x-4">
                    {coin.market_data.price_change_percentage_24h_in_currency.gbp.toFixed(
                      2
                    )}
                    %
                  </td>
                ) : null}
                {coin.market_data ? (
                  <td>
                    {coin.market_data.price_change_percentage_7d_in_currency.gbp.toFixed(
                      2
                    )}
                    %
                  </td>
                ) : null}
                {coin.market_data ? (
                  <td className="border-white border-x-4">
                    {coin.market_data.price_change_percentage_14d_in_currency.gbp.toFixed(
                      2
                    )}
                    %
                  </td>
                ) : null}
                {coin.market_data ? (
                  <td>
                    {coin.market_data.price_change_percentage_30d_in_currency.gbp.toFixed(
                      2
                    )}
                    %
                  </td>
                ) : null}
                {coin.market_data ? (
                  <td className="border-l-4 border-white">
                    {coin.market_data.price_change_percentage_1y_in_currency.gbp.toFixed(
                      2
                    )}
                    %
                  </td>
                ) : null}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">24 Hour high</h1>
              {coin.market_data ? (
                <div>
                  &pound;{coin.market_data.high_24h.gbp.toLocaleString()}
                </div>
              ) : null}
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">24 Hour Low</h1>
              {coin.market_data ? (
                <div>&#163;{coin.market_data.low_24h.gbp.toLocaleString()}</div>
              ) : null}
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Market Capital</h1>
              {coin.market_data ? (
                <div>
                  &#163;{coin.market_data.market_cap.gbp.toLocaleString()}
                </div>
              ) : null}
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Circulating Supply</h1>
              {coin.market_data ? (
                <div>
                  {coin.market_data.circulating_supply.toLocaleString()}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div>
            <h1 className="pb-4 text-3xl font-bold">About</h1>
            <p
              className="w-full text-justify"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description)
                  ? coin.description.en
                  : null,
              }}
            ></p>
          </div>
        </div>
      </div>
      {/* Coin Modal */}
      <Modal
        title="Buy Cryptocurrency"
        onClose={() => setCoinModal(false)}
        show={CoinModal}
        actionBtn="Buy"
        submitAction={handleBuyCoin}
      >
        <div className=" flex bg-primaryPurple rounded-t-lg text-white py-4">
          <div className=" flex items-center mx-auto">
            {coin.image ? (
              <img
                className="w-8 mr-4 rounded-full"
                src={coin.image.small}
                alt={coin.name}
              />
            ) : null}
            <h1 className=" font-semibold text-xl">{coin.name}</h1>
          </div>
        </div>
        <div className="grid rounded-b-lg bg-primaryLight grid-cols-2 gap-4 p-8">
          <p>Market Price :</p>
          <p>&pound;{coin?.market_data?.current_price.gbp}</p>

          <p>Buy Units :</p>
          <input
            type="number"
            min={0}
            placeholder="Enter units"
            className="border-2 rounded-sm px-2 h-7"
            value={buyObject.units}
            onChange={(e) =>
              setBuyObject((prev) => {
                return { ...prev, units: e.target.value };
              })
            }
          />

          <p>Amount :</p>
          <p>
            {buyObject.units
              ? Math.round(
                  buyObject.units *
                    coin?.market_data?.current_price?.gbp *
                    10000
                ) / 10000
              : 0}
          </p>
          <p>Holding period (In Months) :</p>
          <div className="flex flex-row gap-2 align-middle">
            <div className="w-8">{buyObject.minHoldingPeriod}</div>
            <div className="w-full px-2">
              <input
                className="w-full"
                type="range"
                min="6"
                max="36"
                value={buyObject.minHoldingPeriod}
                onChange={(e) =>
                  setBuyObject({
                    ...buyObject,
                    minHoldingPeriod: e.target.value,
                  })
                }
              />
            </div>
          </div>
          {/* <p className="col-span-2 bg-green-300 border-2 rounded-md px-2 text-center text-sm">
              Maximum Sell Amount is :{" "}
              <strong>
                &pound;
                {coin?.market_data?.current_price?.gbp *
                  walletData.currentBalance}
              </strong>
            </p> */}
          <p className="col-span-2 border-2 bg-red-300 px-2 rounded-md text-sm text-center">
            <strong>Note : </strong>Current Transaction Rate changes every 30
            Seconds.
          </p>
          <hr className="col-span-2" />
          <h1 className="font-bold text-xl col-span-2">
            Credit / Debit card Details
          </h1>
          <p>Card Number :</p>
          <input
            type="number"
            min={0}
            placeholder="Enter card number"
            className="border-2 rounded-sm px-2 h-7"
            defaultValue={buyObject.cardNumber}
            onChange={(e) =>
              setBuyObject((prev) => {
                return { ...prev, cardNumber: e.target.value };
              })
            }
          />
          <p>Expiry :</p>
          <input
            type="text"
            placeholder="MM/YY"
            className="border-2 rounded-sm px-2 h-7"
            defaultValue={buyObject.expiry}
            onChange={(e) =>
              setBuyObject((prev) => {
                return { ...prev, expiry: e.target.value };
              })
            }
          />
        </div>
      </Modal>
    </Dashboard>
  );
};

export default Coin;

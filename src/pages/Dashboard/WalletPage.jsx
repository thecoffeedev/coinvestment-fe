import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from ".";
import { getSingleWallet } from "../../apis/account";

const WalletPage = () => {
  const params = useParams();

  const [walletData, setWalletData] = useState({});
  const [walletTransactions, setWalletTransactions] = useState([]);
  const [coin, setCoin] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins`;

  useEffect(() => {
    getSingleWallet(params.walletAddress).then((res) => {
      setWalletData(res.data.wallet);
      setWalletTransactions(res.data.walletTransactions);
      axios
        .get(`${url}/${res.data.wallet.cryptocurrencyCode}`)
        .then((response) => {
          setCoin(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return (
    <Dashboard>
      <div className="w-full max-w-3xl p-8 mx-auto text-center text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
        <div className="w-full px-4 py-4">
          <h1 className="text-4xl font-bold">Wallet Details</h1>
        </div>
        <div className="w-full max-w-3xl p-4 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="flex justify-center px-8 mb-4 sm:justify-start "></div>
          <div className="grid w-full gap-8 p-2 px-8 text-center sm:grid-cols-2">
            <div className="flex justify-center sm:justify-start">
              {coin.image ? (
                <img src={coin.image.small} alt={coin.name} />
              ) : null}
              <p className="p-3 font-bold uppercase ">{coin.name}</p>
              {/* <p className="py-3 uppercase">({coin.symbol}/GBP)</p> */}
            </div>
            <div className="relative flex justify-center sm:justify-end">
              <p className="absolute bottom-12 text-green-600 font-bold">
                Balance
              </p>
              <h1 className="text-5xl font-medium w-fit">
                &pound;{walletData.currentBalance}
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <button className=" bg-red-500 text-white font-semibold text-lg rounded-lg px-4 py-1 mr-8">
              Sell
            </button>
          </div>
        </div>
        <div className="w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Wallet Address</h1>
              {coin.market_data ? <div>{walletData.walletAddress}</div> : null}
            </div> */}
            {/* <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">24 Hour Low</h1>
              {coin.market_data ? (
                <div>&#163;{coin.market_data.low_24h.gbp.toLocaleString()}</div>
              ) : null}
            </div> */}
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Initial Balance</h1>
              <div>&#163;{walletData.initialBalance}</div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Holding Period</h1>

              <div>{walletData.holdingPeriod} Months</div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-4">Transactions</h1>
        <div className="w-full max-w-3xl px-2 py-6 mx-auto mt-2 text-gray-700 border border-blue-200 rounded-lg shadow-lg sm:p-6 shadow-blue-100">
          <table className="w-full text-sm md:text-lg">
            <thead className="">
              <tr className="justify-between bg-blue-100">
                <th>Date</th>
                <th className="border-white border-x-4">Units</th>
                <th>Spot Rate</th>
                <th className="border-white border-x-4">Amount</th>
                <th>Charges</th>
                <th className="border-l-4 border-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {walletTransactions.map((transaction, index) => (
                <tr key={index} className="text-center bg-blue-50">
                  <td>{transaction.transactionDatetime.split(" ")[0]}</td>
                  <td className="border-white border-x-4">
                    {transaction.action === "SELL"
                      ? transaction.unitsSold
                      : Number(
                          (
                            transaction.amount / transaction.initialRate
                          ).toFixed(4)
                        )}
                  </td>
                  <td>{transaction.initialRate}</td>

                  <td className="border-white border-x-4">
                    {transaction.amount}
                  </td>
                  <td>{transaction.chargeApplied}</td>
                  <td
                    className={`border-l-4 border-white text-white ${
                      transaction.action === "BUY"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } `}
                  >
                    {transaction.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
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
        </div> */}
      </div>
    </Dashboard>
  );
};

export default WalletPage;

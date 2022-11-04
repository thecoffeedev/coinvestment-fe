import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from ".";
import { getSingleWallet } from "../../apis/account";
import { sellWallet } from "../../apis/wallet";
import Modal from "../../components/Modal/Modal";
import { Toastify } from "../../utils/Toast";

const WalletPage = () => {
  const params = useParams();

  const [walletData, setWalletData] = useState({});
  const [walletTransactions, setWalletTransactions] = useState([]);
  const [coin, setCoin] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins`;
  const [sellWalletModal, setSellWalletModal] = useState(false);
  const [disableSellWalletBtn, setDisableSellWalletBtn] = useState(false);
  const [sellWalletObj, setSellWalletObj] = useState({
    units: 0,
    cardNumber: "",
    expiry: "",
  });

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

  const handleSellWallet = () => {
    // setDisableSellWalletBtn(true);
    sellWallet({
      walletAddress: walletData.walletAddress,
      initialRate: coin?.market_data?.current_price?.gbp,
      unitsSold: sellWalletObj.units,
      cardNumber: sellWalletObj.cardNumber,
      expiry: sellWalletObj.expiry,
      amount: sellWalletObj.units * coin?.market_data?.current_price?.gbp,
    }).then((res) => {
      if (res.data.status.statusCode === "FAILURE") {
        Toastify("error", res.data.status.statusMessage);
      } else {
        // setDisableSellWalletBtn(false);
        setSellWalletModal(false);
        Toastify("success", res.data.status.statusMessage);
        setSellWalletObj({
          units: 0,
          cardNumber: "",
          expiry: "",
        });
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
      }
    });
  };

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
            </div>
            <div className="relative flex justify-center sm:justify-end">
              <p className="absolute bottom-12 text-green-600 font-bold">
                Balance
              </p>
              <h1 className="text-5xl font-medium w-fit uppercase">
                {coin.symbol} {walletData.currentBalance}
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <button
              className=" bg-red-500 shadow-lg shadow-red-400 hover:shadow text-white font-semibold text-lg rounded-lg px-4 py-1 mr-8"
              onClick={() => setSellWalletModal(true)}
            >
              Sell
            </button>
          </div>
        </div>
        <div className="w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">
                Market Price{" "}
                <span className="font-normal">
                  (Per <span className="uppercase">{coin.symbol}</span>)
                </span>
              </h1>
              <div className="uppercase">
                &pound;{coin?.market_data?.current_price?.gbp}
              </div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">
                24h Price Change <span className="font-normal"></span>
              </h1>
              <div
                className={
                  coin?.market_data?.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {coin?.market_data?.price_change_percentage_24h}%
              </div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Initial Balance</h1>
              <div className="uppercase">
                {coin.symbol} {walletData.initialBalance}
              </div>
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
                    {Math.round(
                      (transaction.amount - transaction.chargeApplied) * 1000
                    ) / 1000}
                  </td>
                  <td>{Math.round(transaction.chargeApplied * 1000) / 1000}</td>
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
      </div>
      {/* Sell Wallet Coin Modal */}
      <Modal
        title={`Sell ${coin.name} from wallet`}
        onClose={() => setSellWalletModal(false)}
        show={sellWalletModal}
        actionBtn={`Sell ${coin.symbol}`}
        submitAction={handleSellWallet}
        primaryBtnDisable={disableSellWalletBtn}
      >
        <>
          <div className="flex flex-row justify-center w-full gap-4 align-middle py-2 bg-primaryPurple rounded-t-lg">
            <img
              src={coin.image?.small}
              alt="cryptocurrency image"
              width={"56px"}
              className=""
            />
            <h1 className="font-bold text-3xl my-auto">{coin.name}</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 p-8 rounded-b-lg bg-primaryLight">
            <p>Balance in {coin.symbol} :</p>
            <p>{walletData.currentBalance}</p>
            <p>Current Transaction Rate :</p>
            <p>&pound;{coin?.market_data?.current_price?.gbp}</p>

            <p>Sell Units (Max {walletData.currentBalance}) :</p>
            <input
              type="number"
              min={0}
              placeholder="Enter amount"
              className="border-2 rounded-sm px-2 h-7"
              value={sellWalletObj.units}
              onChange={(e) =>
                setSellWalletObj((prev) => {
                  if (
                    !e.target.value?.toString()?.split("").includes(".") ||
                    (e.target.value?.toString()?.split(".").length === 2 &&
                      e.target.value?.toString()?.split(".")[1]?.split("")
                        .length <= 4 &&
                      e.target.value <= +walletData.currentBalance)
                  ) {
                    return { ...prev, units: e.target.value };
                  } else {
                    return prev;
                  }
                })
              }
            />

            <p>Amount :</p>
            <p>
              {sellWalletObj.units
                ? sellWalletObj.units * coin?.market_data?.current_price?.gbp
                : 0}
            </p>
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
              defaultValue={sellWalletObj.cardNumber}
              onChange={(e) =>
                setSellWalletObj((prev) => {
                  return { ...prev, cardNumber: e.target.value };
                })
              }
            />
            <p>Expiry :</p>
            <input
              type="text"
              placeholder="MM/YY"
              className="border-2 rounded-sm px-2 h-7"
              defaultValue={sellWalletObj.expiry}
              onChange={(e) =>
                setSellWalletObj((prev) => {
                  return { ...prev, expiry: e.target.value };
                })
              }
            />
          </div>
        </>
      </Modal>
    </Dashboard>
  );
};

export default WalletPage;

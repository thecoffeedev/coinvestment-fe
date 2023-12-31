import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Dashboard from ".";
import { getBundles } from "../../apis/account";
import { getSingleBundle, sellBundle } from "../../apis/bundle";
import Alpha from "../../assets/icons8-alpha-32.png";
import Beta from "../../assets/icons8-beta-32.png";
import Mu from "../../assets/icons8-mu-32.png";
import Modal from "../../components/Modal/Modal";
import dynamicBundleImages from "../../helpers/dynamicBundleImages";
import { Toastify } from "../../utils/Toast";

function BundlePage() {
  const params = useParams();

  const [bundleData, setBundleData] = useState({});
  const [bundleDesc, setBundleDesc] = useState({});
  const [bundleTransactions, setBundleTransactions] = useState([]);
  const [purchaseCut, setPurchaseCut] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [marketRate, setMarketRate] = useState(0);
  const [coins, setCoins] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins`;
  const [sellBundleModal, setSellBundleModal] = useState(false);
  const [disableSellBundleBtn, setDisableSellBundleBtn] = useState(false);
  const [sellBundleObj, setSellBundleObj] = useState({
    amount: 0,
    cardNumber: "",
    expiry: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleBundle(params.bundleAddress)
      .then((res) => {
        setBundleData(res.data.bundle);
        setBundleTransactions(res.data.bundleTransaction);
        setPurchaseCut(
          (res.data.bundleTransaction.amount /
            res.data.bundleTransaction.initialRate) *
            100
        );
        getBundles().then((res) => {
          setBundleDesc(
            res.data.bundles.find(
              (bundle) => bundle.bundleAddress === params.bundleAddress
            )
          );
          res.data.bundles
            .find((bundle) => bundle.bundleAddress === params.bundleAddress)
            .bundleCryptocurrencies?.map((currency) => {
              axios
                .get(`${url}/${currency.cryptocurrencyCode}`)
                .then((response) => {
                  setCoins((prev) => {
                    if (prev.find((e) => response.data.id === e.id)) {
                      return prev;
                    }
                    return [...prev, response.data];
                  });
                })
                .catch((error) => {
                  console.log(error);
                });
            });
        });
      })
      .then((res) => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (bundleDesc.bundleCryptocurrencies?.length === coins?.length) {
      const newData = bundleDesc.bundleCryptocurrencies.map((cur) => {
        cur.currentPrice = coins.find(
          (el) => el.id === cur.cryptocurrencyCode
        ).market_data.current_price.gbp;
        return cur;
      });
      let totalPrice;
      totalPrice = newData.reduce(
        (currTotal, value) =>
          currTotal + +value.currentPrice.toString().split("e")[0],
        0
      );
      setMarketRate(totalPrice);
      if (bundleTransactions.find((el) => el.action === "SELL")) {
        totalPrice = 0;
      }
      setPurchasePrice(totalPrice);
    }
  }, [bundleDesc, coins]);

  const handleSellBundle = () => {
    sellBundle({
      bundleAddress: bundleData.bundleAddress,
      bundleID: bundleData.bundleID,
      initialRate: marketRate,
      amount:
        Math.round(
          ((bundleTransactions[bundleTransactions?.length - 1]?.amount *
            marketRate) /
            bundleTransactions[bundleTransactions?.length - 1]?.initialRate) *
            10000
        ) / 10000,
      cardNumber: sellBundleObj.cardNumber,
      expiry: sellBundleObj.expiry,
    }).then((res) => {
      if (res.data.status.statusCode === "FAILURE") {
        Toastify("error", res.data.status.statusMessage);
      } else {
        setSellBundleModal(false);
        Toastify("success", res.data.status.statusMessage);
        getSingleBundle(params.bundleAddress).then((res) => {
          setBundleData(res.data.bundle);
          setBundleTransactions(res.data.bundleTransaction);
          setPurchaseCut(
            (res.data.bundleTransaction.amount /
              res.data.bundleTransaction.initialRate) *
              100
          );
          getBundles().then((res) => {
            setBundleDesc(
              res.data.bundles.find(
                (bundle) => bundle.bundleAddress === params.bundleAddress
              )
            );
            res.data.bundles
              .find((bundle) => bundle.bundleAddress === params.bundleAddress)
              .bundleCryptocurrencies?.map((currency) => {
                axios
                  .get(`${url}/${currency.cryptocurrencyCode}`)
                  .then((response) => {
                    setCoins((prev) => {
                      if (prev.find((e) => response.data.id === e.id)) {
                        return prev;
                      }
                      return [...prev, response.data];
                    });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              });
          });
        });
      }
    });
  };

  if (isLoading || coins.length !== bundleDesc.bundleCryptocurrencies?.length) {
    return (
      <Dashboard>
        <div className="grid place-items-center h-[90vh] w-full">
          <HashLoader color="#5050ff" size={86} />
        </div>
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      <div className=" w-full max-w-3xl p-8 mx-auto text-center text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
        <div className="w-full px-4 py-4">
          <h1 className="text-4xl font-bold">Bundle Details</h1>
        </div>
        <div className="w-full max-w-3xl p-4 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="grid w-full gap-8 p-2 px-8 text-center sm:grid-cols-2">
            <div className="flex justify-center sm:justify-start  w-[48px] h-[48px]">
              {/* <img
                src={
                  bundleDesc.bundleName === "Alpha"
                    ? Alpha
                    : bundleDesc.bundleName === "Beta"
                    ? Beta
                    : Mu
                }
                alt={bundleDesc.bundleName}
                className="invert"
                width={"82px"}
              /> */}
              <img
                src={dynamicBundleImages(bundleDesc.bundleName)}
                alt="alpha"
                className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple"
              />
              <p className="p-3 my-auto font-bold uppercase ">
                {bundleDesc.bundleName}
              </p>
            </div>
            <div className="relative flex justify-center sm:justify-end">
              <p className="absolute bottom-11 text-green-600 font-bold">
                Balance
              </p>
              <h1 className="text-5xl my-auto font-medium w-fit">
                &pound;
                {purchasePrice &&
                  Math.round(
                    ((bundleTransactions[bundleTransactions?.length - 1]
                      ?.amount *
                      marketRate) /
                      bundleTransactions[bundleTransactions?.length - 1]
                        ?.initialRate) *
                      10000
                  ) / 10000}
              </h1>
            </div>
          </div>
          {purchasePrice !== 0 && (
            <div className="flex flex-row justify-end">
              <button
                className=" bg-red-500 shadow-lg shadow-red-400 hover:shadow text-white font-semibold text-lg rounded-lg px-4 py-1 mr-8"
                onClick={() => setSellBundleModal(true)}
              >
                Sell
              </button>
            </div>
          )}
        </div>
        <div className="w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Market Rate</h1>
              <div>&pound;{Math.round(marketRate * 10000) / 10000}</div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Initial Rate</h1>
              <div>
                &pound;
                {
                  bundleTransactions[bundleTransactions?.length - 1]
                    ?.initialRate
                }
              </div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Holding Period</h1>

              <div>{bundleData?.holdingPeriod} Months</div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Min holding period</h1>
              <div>{bundleDesc.minimumHoldingPeriod} Months</div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Risk Level</h1>
              <div>{bundleDesc.riskLevel}</div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50">
              <h1 className="font-bold">Term</h1>
              <div>{bundleDesc.term}</div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-4">Coin Weightage</h1>
        <div className="w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {coins.map((coin, index) => (
              <div
                key={index}
                className="flex justify-between p-2 px-4 m-2 border border-blue-200 rounded-md bg-blue-50 "
              >
                <div className="flex flex-col gap-1">
                  <img
                    src={coin.image.small}
                    alt="crypto coin image"
                    // width={"32px"}
                    className="mx-auto rounded-full"
                  />
                  <h1 className="inline-block">{coin.name}</h1>
                </div>
                <div className="my-auto">
                  {
                    bundleDesc.bundleCryptocurrencies.find(
                      (el) => el.cryptocurrencyCode === coin.id
                    ).percentage
                  }
                  %
                </div>
              </div>
            ))}
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
              {bundleTransactions?.map((transaction, index) => (
                <tr key={index} className="text-center bg-blue-50">
                  <td>{transaction.transactionDatetime.split(" ")[0]}</td>
                  <td className="border-white border-x-4">{1}</td>
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

        {/* Sell Bundle Coin Modal */}
        <Modal
          title={`Sell Bundle`}
          onClose={() => setSellBundleModal(false)}
          show={sellBundleModal}
          actionBtn={`Sell ${bundleDesc.bundleName}`}
          submitAction={handleSellBundle}
          primaryBtnDisable={disableSellBundleBtn}
        >
          <>
            <div className="flex flex-row justify-center text-white bg-primaryPurple rounded-t-lg w-full gap-4 align-middle">
              <img
                src={Alpha}
                alt="cryptocurrency image"
                width={"56px"}
                className=" "
              />
              <h1 className="font-bold text-3xl my-auto">
                {bundleDesc.bundleName}
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 4 p-8 bg-primaryLight rounded-b-lg ">
              <p>Amount you get :</p>
              <p>
                &pound;
                {Math.round(
                  ((bundleTransactions[bundleTransactions?.length - 1]?.amount *
                    marketRate) /
                    bundleTransactions[bundleTransactions?.length - 1]
                      ?.initialRate) *
                    10000
                ) / 10000}
              </p>
              <p>Bundle Rate :</p>
              <p>&pound;{Math.round(marketRate * 10000) / 10000}</p>

              {/* <p>Sell Amount (&pound;) :</p>
              <input
              type="number"
              min={0}
              placeholder="Enter amount"
              className="border-2 rounded-sm px-2 h-7"
              defaultValue={sellBundleObj.amount}
              onChange={(e) =>
                setSellBundleObj((prev) => {
                  return { ...prev, amount: e.target.value };
                })
              }
              /> */}

              {/* <p>Sell Units :</p>
              <p>{1}</p> */}
              <h1 className="font-bold text-xl col-span-2">
                Credit / Debit card Details
              </h1>
              <p>Card Number :</p>
              <input
                type="number"
                min={0}
                placeholder="Enter card number"
                className="border-2 rounded-sm px-2 h-7"
                defaultValue={sellBundleObj.cardNumber}
                onChange={(e) =>
                  setSellBundleObj((prev) => {
                    return { ...prev, cardNumber: e.target.value };
                  })
                }
              />
              <p>Expiry :</p>
              <input
                type="text"
                placeholder="MM/YY"
                className="border-2 rounded-sm px-2 h-7"
                defaultValue={sellBundleObj.expiry}
                onChange={(e) =>
                  setSellBundleObj((prev) => {
                    return { ...prev, expiry: e.target.value };
                  })
                }
              />
              <p className="col-span-2 bg-green-300 border-2 rounded-md px-2 text-center text-sm">
                Balance will change according to the market data every 30 sec.
              </p>
              <p className="col-span-2 border-2 bg-red-300 px-2 rounded-md text-sm text-center">
                <strong>Note : </strong>If you sold before the minimum holding
                period, 10% of the amount will be charged.
              </p>
              <hr className="col-span-2" />
            </div>
          </>
        </Modal>
      </div>
    </Dashboard>
  );
}

export default BundlePage;

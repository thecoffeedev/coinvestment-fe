import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from ".";
import { getBundles } from "../../apis/account";
import { getAllBundles, getSingleBundle, sellBundle } from "../../apis/bundle";
import Alpha from "../../assets/icons8-alpha-32.png";
import Beta from "../../assets/icons8-beta-32.png";
import Mu from "../../assets/icons8-mu-32.png";
import Modal from "../../components/Modal/Modal";
import dynamicBundleImages from "../../helpers/dynamicBundleImages";

function BundleBuyPage() {
  const params = useParams();

  const [bundleData, setBundleData] = useState({});
  const [bundleDesc, setBundleDesc] = useState({});
  const [bundleTransactions, setBundleTransactions] = useState([]);
  const [purchaseCut, setPurchaseCut] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0)
  const [coins, setCoins] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins`;
  const [sellBundleModal, setSellBundleModal] = useState(false);
  const [disableSellBundleBtn, setDisableSellBundleBtn] = useState(false);
  const [sellBundleObj, setSellBundleObj] = useState({
    amount: 0,
    cardNumber: "",
    expiry: "",
  });

  useEffect(() => {
    getAllBundles().then((res) => {
      setBundleDesc(
        res.data.availableBundles.find(
          (bundle) => bundle.bundleName === params.bundleName
        )
      );
      res.data.availableBundles
        .find((bundle) => bundle.bundleName === params.bundleName)
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
  }, []);

  useEffect(() => {
    if (bundleDesc.bundleCryptocurrencies?.length === coins?.length) {
      console.log('coins::', coins)
      const newData = bundleDesc.bundleCryptocurrencies.map((cur) => {
        cur.currentPrice = coins.find(
          (el) => el.id === cur.cryptocurrencyCode
        ).market_data.current_price.gbp;
        return cur;
      });
      let totalPrice, totalPercentage;
      totalPrice = newData.reduce(
        (currTotal, value) =>
          currTotal + (value.percentage / 100) * value.currentPrice,
        0
      );
      totalPercentage = newData.reduce(
        (currTotal, value) =>
          currTotal + (value.percentage / 100) * coins.find(el => el.id === value.cryptocurrencyCode).market_data?.price_change_percentage_24h,
        0
      );
      // totalPercentage = coins.reduce(
      //   (currTotal, value) =>
      //     currTotal + (value.market_data?.price_change_percentage_24h / 100) * value.market_data?.price_change_percentage_24h,
      //   0
      // );
      setPurchasePrice(totalPrice);
      setPriceChange(totalPercentage)
    }
  }, [bundleDesc, coins]);

  const handleSellBundle = () => {
    sellBundle({
      bundleAddress: bundleData.bundleAddress,
      bundleID: bundleData.bundleID,
      initialRate: purchasePrice,
      amount: purchasePrice,
      cardNumber: sellBundleObj.cardNumber,
      expiry: sellBundleObj.expiry,
    }).then((res) => {
      console.log(res);
      setSellBundleModal(false);
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
    });
  };

  return (
    <Dashboard>
      <div className="w-full max-w-3xl p-8 mx-auto text-center text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
        <div className="w-full px-4 py-4">
          <h1 className="text-4xl font-bold">Bundle Details</h1>
        </div>
        <div className="w-full max-w-3xl p-4 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="grid w-full gap-8 p-2 px-8 text-center sm:grid-cols-2">
            <div className="flex justify-center sm:justify-start">
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
              <p className="absolute bottom-11 text-orange-400 font-bold">
                Market Price
              </p>
              <h1 className="text-5xl my-auto font-medium w-fit">
                &pound;{Math.round(purchasePrice * 1000000) / 1000000}
              </h1>
            </div>
          </div>
          {purchasePrice !== 0 && (
            <div className="flex flex-row justify-end">
              <button
                className=" bg-green-500 text-white font-semibold text-lg rounded-lg px-4 py-1 mr-8"
                onClick={() => setSellBundleModal(true)}
              >
                Buy
              </button>
            </div>
          )}
        </div>
        <div className="w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">24h Price Change</h1>
              <div className={priceChange > 0 ? "text-green-500" : "text-red-500"}>
              {Math.round(priceChange * 100000) / 100000}%
              </div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Min Holding Period</h1>

              <div>{bundleDesc?.minimumHoldingPeriod} Months</div>
            </div>
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Min holding period</h1>
              <div>36 Months</div>
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
                    className="mx-auto"
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
            <div className="flex flex-row justify-center w-full gap-4 align-middle">
              <img
                src={Alpha}
                alt="cryptocurrency image"
                width={"64px"}
                className="invert"
              />
              <h1 className="font-bold text-3xl my-auto">
                {bundleDesc.bundleName}
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 my-4 px-8 mx-6">
              <p>Amount you get :</p>
              <p>{purchasePrice}</p>

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

              <p>Sell Units :</p>
              <p>{1}</p>
              <p className="col-span-2 bg-green-300 border-2 rounded-md px-2 text-center text-sm">
                Balance will change according to the market data every 30 sec.
              </p>
              <p className="col-span-2 border-2 bg-red-300 px-2 rounded-md text-sm text-center">
                <strong>Note : </strong>If you sold before the minimum holding
                period, 10% of the amount will be charged.
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
            </div>
          </>
        </Modal>
      </div>
    </Dashboard>
  );
}

export default BundleBuyPage;

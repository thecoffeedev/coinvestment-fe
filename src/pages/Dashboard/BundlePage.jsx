import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from ".";
import { getBundles } from "../../apis/account";
import { getSingleBundle, sellBundle } from "../../apis/bundle";
import Alpha from "../../assets/icons8-alpha-32.png";
import Beta from "../../assets/icons8-beta-32.png";
import Mu from "../../assets/icons8-mu-32.png";

function BundlePage() {
  const params = useParams();

  const coin = {
    name: "name",
    image: { small: "d" },
  };

  const [bundleData, setBundleData] = useState({});
  const [bundleDesc, setBundleDesc] = useState({});
  const [bundleTransactions, setBundleTransactions] = useState([]);
  const [coins, setCoins] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins`;

  useEffect(() => {
    getSingleBundle(params.bundleAddress).then((res) => {
      setBundleData(res.data.bundle);
      setBundleTransactions(res.data.bundleTransaction);
      getBundles().then((res) => {
        setBundleDesc(
          res.data.bundles.find(
            (bundle) => bundle.bundleAddress === params.bundleAddress
          )
        );
      });
      // axios
      //   .get(`${url}/${res.data.wallet.cryptocurrencyCode}`)
      //   .then((response) => {
      //     setCoin(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    });
  }, []);

  useEffect(() => {
    console.log("bundledesc", bundleDesc);
  }, [bundleDesc]);

  const handleSellBundle = () => {
    sellBundle({ bundleAddress: bundleData.bundleAddress });
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
              {coin.image ? (
                <img
                  src={
                    bundleDesc.bundleName === "Alpha"
                      ? Alpha
                      : bundleDesc.bundleName === "Beta"
                      ? Beta
                      : Mu
                  }
                  alt={coin.name}
                  className="invert"
                  width={"82px"}
                />
              ) : null}
              <p className="p-3 my-auto font-bold uppercase ">
                {bundleDesc.bundleName}
              </p>
            </div>
            <div className="relative flex justify-center sm:justify-end">
              <p className="absolute bottom-16 text-green-600 font-bold">
                Balance
              </p>
              <h1 className="text-5xl my-auto font-medium w-fit">
                {Number(
                  (
                    bundleTransactions[bundleTransactions.length - 1]?.amount /
                    bundleTransactions[bundleTransactions.length - 1]
                      ?.initialRate
                  ).toFixed(4)
                ) || 0}
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
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 ">
              <h1 className="font-bold">Initial Balance (Units)</h1>
              <div>
                {Number(
                  (
                    bundleTransactions[0]?.amount /
                    bundleTransactions[0]?.initialRate
                  ).toFixed(4)
                )}
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
            <div className="flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 col-span-2">
              <h1 className="font-bold">Term</h1>
              <div>{bundleDesc.term}</div>
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
              {bundleTransactions?.map((transaction, index) => (
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
}

export default BundlePage;

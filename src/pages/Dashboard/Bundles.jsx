import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Dashboard from ".";
import { getAllBundles } from "../../apis/bundle";
import Modal from "../../components/Modal/Modal";
import dynamicBundleImages from "../../helpers/dynamicBundleImages";
import dynamicCoinImages from "../../helpers/dynamicCoinImages";

function Bundles() {
  const navigate = useNavigate();

  const [bundleModal, setBundleModal] = useState(false);
  const [transactionModal, setTransactionModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [bundles, setBundles] = useState([]);

  const bundleData = {
    availableBundles: [
      {
        bundleCryptocurrencies: [
          {
            cryptocurrencyCode: "bitcoin",
            cryptocurrencyName: "Bitcoin",
            percentage: 50,
          },
          {
            cryptocurrencyCode: "ethereum",
            cryptocurrencyName: "Ethereum",
            percentage: 50,
          },
        ],
        bundleID: "1",
        bundleName: "Alpha",
        minimumHoldingPeriod: 6,
        riskLevel: "Medium risk",
        term: "Short term",
      },
      {
        bundleCryptocurrencies: [
          {
            cryptocurrencyCode: "bitcoin-cash",
            cryptocurrencyName: "Bitcoin Cash",
            percentage: 25,
          },
          {
            cryptocurrencyCode: "tether",
            cryptocurrencyName: "Tether",
            percentage: 15,
          },
          {
            cryptocurrencyCode: "ripple",
            cryptocurrencyName: "XRP",
            percentage: 15,
          },
          {
            cryptocurrencyCode: "litecoin",
            cryptocurrencyName: "Litecoin",
            percentage: 25,
          },
          {
            cryptocurrencyCode: "monero",
            cryptocurrencyName: "Monero",
            percentage: 20,
          },
        ],
        bundleID: "2",
        bundleName: "Beta",
        minimumHoldingPeriod: 6,
        riskLevel: "Medium risk",
        term: "Short term",
      },
      {
        bundleCryptocurrencies: [
          {
            cryptocurrencyCode: "dogecoin",
            cryptocurrencyName: "Dogecoin",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "shiba-inu",
            cryptocurrencyName: "Shiba Inu",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "ethereum-classic",
            cryptocurrencyName: "Ethereum Classic",
            percentage: 30,
          },
          {
            cryptocurrencyCode: "apecoin",
            cryptocurrencyName: "ApeCoin",
            percentage: 30,
          },
        ],
        bundleID: "3",
        bundleName: "Mu",
        minimumHoldingPeriod: 12,
        riskLevel: "Medium risk",
        term: "Medium term",
      },
      {
        bundleCryptocurrencies: [
          {
            cryptocurrencyCode: "chainlink",
            cryptocurrencyName: "Chainlink",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "decentraland",
            cryptocurrencyName: "Decentraland",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "quant-network",
            cryptocurrencyName: "Quant",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "wrapped-bitcoin",
            cryptocurrencyName: "Wrapped Bitcoin",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "usd-coin",
            cryptocurrencyName: "USD Coin",
            percentage: 20,
          },
        ],
        bundleID: "4",
        bundleName: "Omega",
        minimumHoldingPeriod: 12,
        riskLevel: "Medium risk",
        term: "Medium term",
      },
      {
        bundleCryptocurrencies: [
          {
            cryptocurrencyCode: "dai",
            cryptocurrencyName: "Dai",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "binancecoin",
            cryptocurrencyName: "BNB",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "solana",
            cryptocurrencyName: "Solana",
            percentage: 20,
          },
        ],
        bundleID: "5",
        bundleName: "Pi",
        minimumHoldingPeriod: 18,
        riskLevel: "Medium risk",
        term: "Long term",
      },
      {
        bundleCryptocurrencies: [
          {
            cryptocurrencyCode: "algorand",
            cryptocurrencyName: "Algorand",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "binance-usd",
            cryptocurrencyName: "Binance USD",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "flow",
            cryptocurrencyName: "Flow",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "filecoin",
            cryptocurrencyName: "Filecoin",
            percentage: 20,
          },
          {
            cryptocurrencyCode: "polkadot",
            cryptocurrencyName: "Polkadot",
            percentage: 20,
          },
        ],
        bundleID: "6",
        bundleName: "Sigma",
        minimumHoldingPeriod: 18,
        riskLevel: "High risk",
        term: "Long term",
      },
    ],
    status: {
      statusCode: "SUCCESS",
      statusMessage: "All available bundles",
    },
  };

  useEffect(() => {
    setBundles(bundleData.availableBundles)
    setIsLoading(false)
    // getAllBundles()
    //   .then((res) => setBundles(res.data.availableBundles))
    //   .then((res) => setIsLoading(false))
    //   .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return (
      <Dashboard>
        <div className="w-full h-full px-4 py-4 my-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            Cryptocurrency Bundles
          </h1>

          <div className="grid gap-4 grid-cols-3 p-4 max-w-5xl mx-auto border border-blue-200 shadow-2xl rounded-xl shadow-indigo-300">
            <div className="grid place-items-center h-[20vh] w-full col-span-3">
              <HashLoader color="#5050ff" size={64} />
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      <div className="w-full h-full px-4 py-4 my-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Cryptocurrency Bundles
        </h1>

        <div className="grid gap-4 grid-cols-3 p-4 max-w-5xl mx-auto border border-blue-200 shadow-2xl rounded-xl shadow-indigo-300">
          {bundles.length > 0 &&
            bundles.map((bundle, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`/db/bundles/${bundle.bundleName}`);
                }}
                className="p-4 border cursor-pointer hover:from-indigo-300 border-indigo-200 rounded-xl bg-gradient-to-br from-indigo-200 to-white text-primaryPurple
          w-full"
              >
                <div className=" flex items-center">
                  <img
                    src={dynamicBundleImages(bundle.bundleName)}
                    alt="alpha"
                    className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple"
                  />
                  <h1 className=" font-semibold text-xl uppercase">
                    {bundle.bundleName}
                  </h1>
                </div>
                <div className="py-4 flex -space-x-2">
                  {bundle.bundleCryptocurrencies?.map((coin, index) => (
                    <img
                      key={index}
                      src={dynamicCoinImages(coin.cryptocurrencyCode)}
                      alt=""
                      className="w-8 bg-white rounded-full shadow-lg"
                    />
                  ))}
                </div>
                <h1 className="text-center underline">Learn more</h1>
              </div>
            ))}

          {/* <hr className="col-span-3" /> */}

          {/* Alpha Pack */}
          {/* <div onClick={() => { setBundleModal(true) }} className="p-4 border cursor-pointer hover:from-indigo-300 border-indigo-200 rounded-xl bg-gradient-to-br from-indigo-200 to-white text-primaryPurple
         w-full">
          <div className=" flex items-center">
            <img src={alpha} alt="alpha" className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple" />
            <h1 className=" font-semibold text-xl">ALPHA PACK</h1>
          </div>
          <div className="py-4 flex -space-x-2">
            <img src={bitcoin} alt="" className="w-8 rounded-full" />
            <img src={ethereum} alt="" className="w-8 bg-white rounded-full shadow-lg" />
          </div>
          <h1 className="text-center underline">Learn more</h1>
        </div> */}

          {/* Beta Pack */}
          {/* <div className="p-4 border cursor-pointer hover:from-indigo-300 border-blue-200 rounded-xl bg-gradient-to-br from-indigo-200 to-white text-primaryPurple
         w-full">
          <div className=" flex items-center">
            <img src={beta} alt="beta" className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple" />
            <h1 className=" font-semibold text-xl">BETA PACK</h1>
          </div>
          <div className="py-4 flex -space-x-2">
            <img src={bitcoin_cash} alt="" className="w-8  rounded-full" />
            <img src={tether} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={ripple} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={litecoin} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={monero} alt="" className="w-8 bg-white rounded-full shadow-xl" />
          </div>
          <h1 className="text-center underline">Learn more</h1>
        </div> */}

          {/* Sigma Pack */}
          {/* <div className="p-4 border cursor-pointer hover:from-indigo-300 border-blue-200 rounded-xl bg-gradient-to-br from-indigo-200 to-white text-primaryPurple
         w-full">
          <div className=" flex items-center">
            <img src={sigma} alt="sigma" className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple" />
            <h1 className=" font-semibold text-xl">SIGMA PACK</h1>
          </div>
          <div className="py-4 flex -space-x-2">
            <img src={dogecoin} alt="" className="w-8  rounded-full" />
            <img src={shiba_inu} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={ethereum_classic} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={apecoin} alt="" className="w-8 bg-white rounded-full shadow-xl" />
          </div>
          <h1 className="text-center underline">Learn more</h1>
        </div> */}

          {/* Mu Pack */}
          {/* <div className="p-4 border cursor-pointer hover:from-indigo-300 border-blue-200 rounded-xl bg-gradient-to-br from-indigo-200 to-white text-primaryPurple
         w-full">
          <div className=" flex items-center">
            <img src={mu} alt="mu" className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple" />
            <h1 className=" font-semibold text-xl">MU PACK</h1>
          </div>
          <div className="py-4 flex -space-x-2">
            <img src={chainlink} alt="" className="w-8  rounded-full" />
            <img src={decentraland} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={quant_network} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={wrapped_bitcoin} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={usd_coin} alt="" className="w-8 bg-white rounded-full shadow-xl" />
          </div>
          <h1 className="text-center underline">Learn more</h1>
        </div> */}

          {/* Omega Pack */}
          {/* <div className="p-4 border cursor-pointer hover:from-indigo-300 border-blue-200 rounded-xl bg-gradient-to-br from-indigo-200 to-white text-primaryPurple
         w-full">
          <div className=" flex items-center">
            <img src={omega} alt="omega" className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple" />
            <h1 className=" font-semibold text-xl">OMEGA PACK</h1>
          </div>
          <div className="py-4 flex -space-x-2">
            <img src={dai} alt="" className="w-8  rounded-full" />
            <img src={binancecoin} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={solana} alt="" className="w-8 bg-white rounded-full shadow-xl" />
          </div>
          <h1 className="text-center underline">Learn more</h1>
        </div> */}

          {/* Pi Pack */}
          {/* <div className="p-4 border cursor-pointer hover:from-indigo-300 border-blue-200 rounded-xl bg-gradient-to-br from-indigo-200 to-white text-primaryPurple
         w-full">
          <div className=" flex items-center">
            <img src={pi} alt="pi" className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple" />
            <h1 className=" font-semibold text-xl">PI PACK</h1>
          </div>
          <div className="py-4 flex -space-x-2">
            <img src={algorand} alt="" className="w-8  rounded-full bg-white" />
            <img src={binance_usd} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={flow} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={filecoin} alt="" className="w-8 bg-white rounded-full shadow-xl" />
            <img src={polkadot} alt="" className="w-8 bg-white rounded-full shadow-xl" />
          </div>
          <h1 className="text-center underline">Learn more</h1>
        </div> */}
        </div>
      </div>
      {/* Bundles Modal */}
      <Modal
        // title="Bundle Name"
        onClose={() => setBundleModal(false)}
        show={bundleModal}
        actionBtn="Buy"
        submitAction={() => {
          setTransactionModal(true);
          setBundleModal(false);
        }}
      >
        <div className=" flex bg-primaryPurple rounded-t-lg text-white py-4">
          <div className=" flex items-center mx-auto">
            <img
              src={alpha}
              alt="alpha"
              className="mr-4 rounded bg-primaryPurple shadow-lg "
            />
            <h1 className=" font-semibold text-xl">ALPHA PACK</h1>
          </div>
        </div>
        <div className="w-full flex text-primaryDark bg-indigo-100 rounded-b-lg">
          <div className="w-2/4 p-8">
            <h1 className=" font-bold text-xl my-2">About</h1>
            <div className="space-y-4 text-gray-600 text-justify">
              <p>
                This bundle is for those that want to dip their toes into
                crypto-currency investment with the lowest of risks. The bundle
                contains an equal split in terms of value, of Bitcoin and
                Ethereum.
              </p>
              <p>
                This bundle is for those that want to dip their toes into
                crypto-currency investment with the lowest of risks. The bundle
                contains an equal split in terms of value, of Bitcoin and
                Ethereum.
              </p>
              <p>
                This bundle is for those that want to dip their toes into
                crypto-currency investment with the lowest of risks. The bundle
                contains an equal split in terms of value, of Bitcoin and
                Ethereum.
              </p>
            </div>
          </div>
          <div className="w-2/4 p-8 bg-indigo-200 rounded-br-lg">
            <h1 className=" font-bold text-xl my-2">Bundle Composition</h1>
            <div className="flex my-8 text-gray-600">
              <div className="text-center p-2 w-20">
                <img
                  src={bitcoin}
                  alt=""
                  className="w-8 rounded-full shadow-lg mx-auto mb-2"
                />
                <div className="text-sm">
                  <p>Bitcoin</p>
                  <p>50%</p>
                </div>
              </div>
              <div className="text-center p-2 w-20">
                <img
                  src={ethereum}
                  alt=""
                  className="w-8 rounded-full shadow-lg bg-white mx-auto mb-2"
                />
                <div className="text-sm">
                  <p>Ethereum</p>
                  <p>50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        title="Transaction Details"
        onClose={() => setTransactionModal(false)}
        show={transactionModal}
        actionBtn="Buy"
      ></Modal>
    </Dashboard>
  );
}

export default Bundles;

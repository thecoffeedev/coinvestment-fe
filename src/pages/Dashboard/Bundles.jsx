import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from ".";
import { getAllBundles } from "../../apis/bundle";
import algorand from "../../assets/algorand.png";
import apecoin from "../../assets/apecoin.png";
import binance_usd from "../../assets/binance-usd.png";
import binancecoin from "../../assets/binancecoin.png";
import bitcoin_cash from "../../assets/bitcoin-cash.png";
import bitcoin from "../../assets/bitcoin.png";
import chainlink from "../../assets/chainlink.png";
import dai from "../../assets/dai.png";
import decentraland from "../../assets/decentraland.png";
import dogecoin from "../../assets/dogecoin.png";
import ethereum_classic from "../../assets/ethereum-classic.png";
import ethereum from "../../assets/ethereum.png";
import filecoin from "../../assets/filecoin.png";
import flow from "../../assets/flow.png";
import alpha from "../../assets/icons8-alpha-32.png";
import beta from "../../assets/icons8-beta-32.png";
import mu from "../../assets/icons8-mu-32.png";
import omega from "../../assets/icons8-omega-32.png";
import pi from "../../assets/icons8-pi-32.png";
import sigma from "../../assets/icons8-sigma-32.png";
import litecoin from "../../assets/litecoin.png";
import monero from "../../assets/monero.png";
import polkadot from "../../assets/polkadot.png";
import quant_network from "../../assets/quant-network.png";
import ripple from "../../assets/ripple.png";
import shiba_inu from "../../assets/shiba-inu.png";
import solana from "../../assets/solana.png";
import tether from "../../assets/tether.png";
import usd_coin from "../../assets/usd-coin.png";
import wrapped_bitcoin from "../../assets/wrapped-bitcoin.png";
import Modal from "../../components/Modal/Modal";
import dynamicBundleImages from "../../helpers/dynamicBundleImages";


function Bundles() {
  const navigate = useNavigate()

  const [bundleModal, setBundleModal] = useState(false)
  const [transactionModal, setTransactionModal] = useState(false);

  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    getAllBundles()
      .then((res) => setBundles(res.data.availableBundles))
      .catch((error) => console.error(error));
  }, []);


  return <Dashboard>
    <div className="w-full h-full px-4 py-20 my-auto">
      <div className="grid gap-4 grid-cols-3 p-4 max-w-5xl mx-auto border border-blue-200 shadow-2xl rounded-xl shadow-indigo-300">

        {bundles.length > 0 && bundles.map((bundle, index) => (
          <div key={index} onClick={() => { navigate(`/db/bundles/${bundle.bundleName}`) }} className="p-4 border cursor-pointer hover:from-indigo-300 border-indigo-200 rounded-xl bg-gradient-to-br from-indigo-200 to-white text-primaryPurple
          w-full">
            <div className=" flex items-center">
              <img src={dynamicBundleImages(bundle.bundleName)} alt="alpha" className="mr-4 rounded bg-primaryPurple shadow shadow-primaryPurple" />
              <h1 className=" font-semibold text-xl uppercase">{bundle.bundleName}</h1>
            </div>
            <div className="py-4 flex -space-x-2">
              <img src={bitcoin} alt="" className="w-8 rounded-full" />
              <img src={ethereum} alt="" className="w-8 bg-white rounded-full shadow-lg" />
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
      submitAction={() => { setTransactionModal(true); setBundleModal(false) }}
    >
      <div className=" flex bg-primaryPurple rounded-t-lg text-white py-4">
        <div className=" flex items-center mx-auto">
          <img src={alpha} alt="alpha" className="mr-4 rounded bg-primaryPurple shadow-lg " />
          <h1 className=" font-semibold text-xl">ALPHA PACK</h1>
        </div>
      </div>
      <div className="w-full flex text-primaryDark bg-indigo-100 rounded-b-lg">
        <div className="w-2/4 p-8">
          <h1 className=" font-bold text-xl my-2">About</h1>
          <div className="space-y-4 text-gray-600 text-justify">
            <p>This bundle is for those that want to dip their toes into crypto-currency investment with the lowest of risks. The bundle contains an equal split in terms of value, of Bitcoin and Ethereum.</p>
            <p>This bundle is for those that want to dip their toes into crypto-currency investment with the lowest of risks. The bundle contains an equal split in terms of value, of Bitcoin and Ethereum.</p>
            <p>This bundle is for those that want to dip their toes into crypto-currency investment with the lowest of risks. The bundle contains an equal split in terms of value, of Bitcoin and Ethereum.</p>
          </div>
        </div>
        <div className="w-2/4 p-8 bg-indigo-200 rounded-br-lg">
          <h1 className=" font-bold text-xl my-2">Bundle Composition</h1>
          <div className="flex my-8 text-gray-600">
            <div className="text-center p-2 w-20">
              <img src={bitcoin} alt="" className="w-8 rounded-full shadow-lg mx-auto mb-2" />
              <div className="text-sm">
                <p>Bitcoin</p>
                <p>50%</p>
              </div>
            </div>
            <div className="text-center p-2 w-20">
              <img src={ethereum} alt="" className="w-8 rounded-full shadow-lg bg-white mx-auto mb-2" />
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
    >


    </Modal>
  </Dashboard>;
}

export default Bundles;

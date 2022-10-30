import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Dashboard from ".";
import { getBundles, getWallets } from "../../apis/account";
import BundleCard from "../../components/BundleCard";
import WalletCard from "../../components/WalletCard";
import Axios from "../../utils/Axios";
import { UserContext } from "../../utils/UserContext";

function Account() {
  const [contextUser, _] = useContext(UserContext);

  const [walletsData, setWalletsData] = useState([]);
  const [bundlesData, setBundlesData] = useState([]);
  const [isLoadingWallets, setIsLoadingWallets] = useState(true);
  const [isLoadingBundles, setIsLoadingBundles] = useState(true);

  const walletsRequest = () => {
    console.log("authToken:::", contextUser.authToken);
    getWallets().then((res) => {
      setWalletsData(res.data.wallet);
      setIsLoadingWallets(false);
    });
    getBundles().then((res) => {
      setBundlesData(res.data.bundles);
      setIsLoadingBundles(false);
    });
  };

  useEffect(() => {
    walletsRequest();
  }, []);

  return (
    <Dashboard>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col py-2 px-4  w-1/2 border-violet-300  shadow-2xl shadow-violet-200 border-2 rounded-xl">
          <h1 className="text-3xl font-bold">Wallets</h1>
          <p className="text-sm mb-2">Your active wallets are listed here.</p>
          <hr className="bg-violet-300" />
          {isLoadingWallets === true ? (
            <div className="grid place-items-center h-full w-full">
              <HashLoader color="#5050ff" size={86} />
            </div>
          ) : isLoadingWallets === false && walletsData?.length === 0 ? (
            <div className="grid place-items-center h-full w-full">
              <h1 className="text-xl text-center">
                You have bought no Wallets. Please continue{" "}
                <Link to="/db/crypto" className="text-primaryPurple">
                  here
                </Link>{" "}
                to buy Cryptocurrencies.
              </h1>
            </div>
          ) : (
            <div className="cardsContainer flex flex-col mt-3 gap-4 h-[76vh] overflow-auto">
              {walletsData?.length > 0 &&
                walletsData.map((wallet, index) => (
                  <WalletCard key={index} walletObject={wallet} />
                ))}
            </div>
          )}
        </div>
        <div className="flex flex-col py-2 px-4 w-1/2  border-violet-300  shadow-2xl shadow-violet-200 border-2  rounded-xl">
          <h1 className="text-3xl font-bold">Bundles</h1>
          <p className="text-sm mb-2">Your active wallets are listed here.</p>
          <hr />
          {isLoadingBundles === true ? (
            <div className="grid place-items-center h-full w-full">
              <HashLoader color="#5050ff" size={86} />
            </div>
          ) : isLoadingBundles === false && bundlesData?.length === 0 ? (
            <div className="grid place-items-center h-full w-full">
              <h1 className="text-xl text-center">
                You have bought no Bundles. Please continue{" "}
                <Link to="/db/bundles" className="text-primaryPurple">
                  here
                </Link>{" "}
                to buy Bundles.
              </h1>
            </div>
          ) : (
            <div className="cardsContainer flex flex-col mt-4 gap-3">
              {bundlesData?.length > 0 &&
                bundlesData.map((bundle, index) => (
                  <BundleCard key={index} bundleObject={bundle} />
                ))}
            </div>
          )}
        </div>
      </div>
    </Dashboard>
  );
}

export default Account;

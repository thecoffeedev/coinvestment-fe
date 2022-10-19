import React, { useContext, useEffect, useState } from "react";
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

  const walletsRequest = () => {
    console.log("authToken:::", contextUser.authToken);
    getWallets().then((res) => setWalletsData(res.data.wallet));
    getBundles().then((res) => setBundlesData(res.data.bundles));
  };

  useEffect(() => {
    walletsRequest();
  }, []);

  return (
    <Dashboard>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col py-2 px-4  w-1/2 border-blue-200 border-2 rounded-xl">
          <h1 className="text-3xl text-bold">Wallets</h1>
          <p className="text-sm mb-2">Your active wallets are listed here.</p>
          <hr />
          <div className="cardsContainer flex flex-col mt-3 gap-3 h-[76vh] overflow-auto">
            {walletsData?.length > 0 &&
              walletsData.map((wallet, index) => (
                <WalletCard key={index} walletObject={wallet} />
              ))}
          </div>
        </div>
        <div className="flex flex-col py-2 px-4 w-1/2 border-blue-200 border-2  rounded-xl">
          <h1 className="text-3xl text-bold">Bundles</h1>
          <p className="text-sm mb-2">Your active wallets are listed here.</p>
          <hr />
          <div className="cardsContainer flex flex-col mt-3 gap-3">
            {bundlesData?.length > 0 &&
              bundlesData.map((bundle, index) => (
                <BundleCard key={index} bundleObject={bundle} />
              ))}
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default Account;

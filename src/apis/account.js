import Axios from "../utils/Axios";

export const getWallets = async () => {
  return await Axios.get("/account/wallets");
};

export const getSingleWallet = async (walletAddress) => {
  return await Axios.post(`/account/wallets/wallet-address`, { walletAddress });
};

export const getBundles = async () => {
  return await Axios.get("account/bundles");
};

import Axios from "../utils/Axios";

export const buyWallet = async (buyObject) => {
  return Axios.post('/account/purchase/wallet', buyObject)
}

export const sellWallet = async (walletObj) => {
  return await Axios.post("/account/sell/wallet", walletObj);
};

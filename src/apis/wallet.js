import Axios from "../utils/Axios";

export const sellWallet = async (walletObj) => {
  return await Axios.post("/account/sell/wallet", walletObj);
};

import Axios from "../utils/Axios";

export const getSingleBundle = async (bundleAddress) => {
  return await Axios.post(`/account/bundles/bundle-address`, { bundleAddress });
};

export const sellBundle = async (bundleObject) => {
  return await Axios.post("/account/sell/bundle", bundleObject);
};

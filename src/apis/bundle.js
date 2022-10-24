import Axios from "../utils/Axios";

export const getAllBundles =  () => {
  return Axios.get('/list/all/bundles')
}

export const getSingleBundle = async (bundleAddress) => {
  return  Axios.post(`/account/bundles/bundle-address`, { bundleAddress });
};

export const sellBundle = async (bundleObject) => {
  return  Axios.post("/account/sell/bundle", bundleObject);
};

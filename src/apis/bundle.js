import Axios from "../utils/Axios";

export const getAllBundles =  () => {
  return Axios.get('/list/all/bundles')
}

export const getSingleBundle = async (bundleAddress) => {
  return Axios.post(`/account/bundles/bundle-address`, { bundleAddress });
};

export const buyBundle =  async (bundleObject) => {
  return Axios.post('/account/purchase/bundle', bundleObject)
}

export const sellBundle = async (bundleObject) => {
  return  Axios.post("/account/sell/bundle", bundleObject);
};

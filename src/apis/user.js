import Axios from "../utils/Axios";

export const userSignUp = async (user) => {
  return await Axios.post("/sign-up", { ...user, emailAddress: user.email });
};

export const userSignIn = async (user) => {
  return await Axios.post("/sign-in", user);
};

export const userLogout = async () => {
  return await Axios.get("/sign-out");
};

export const getUserData = async () => {
  return await Axios.get("/profile/customer-details");
};

export const changeUserEmail = async (user) => {
  return await Axios.post("/profile/change-emailaddress", user);
};

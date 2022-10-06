import Axios from "../utils/Axios";

export const userSignUp = async (user) => {
  return await Axios.post("/sign-up", { ...user, emailAddress: user.email });
};

export const userSignIn = async (user) => {
  return await Axios.post("/sign-in", user);
};

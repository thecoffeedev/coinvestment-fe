import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../apis/user";
import PageCover from "../../assets/login-cover.png";
import Logo from "../../assets/logo.svg";
import Axios from "../../utils/Axios";
import { Toastify } from "../../utils/Toast";
import { UserContext } from "../../utils/UserContext";
import "./index.css";

function Login() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const [contextUser, setContextUser] = userContext;

  const [user, setUser] = useState({ emailAddress: "", password: "" });

  const handleSubmit = (user) => {
    userSignIn(user)
      .then((res) => {
        if (res.data.status.statusCode === "FAILURE") {
          Toastify("error", res.data.status.statusMessage);
        } else {
          Toastify("success", "Logged in Successfully");
          setContextUser({
            ...contextUser,
            authToken: res.data.token,
            username: res.data.name,
            email: res.data.emailAddress,
          });
          localStorage.setItem("$AUTH_TOKEN", res.data.token);
          localStorage.setItem("username", res.data.name);
          Axios.defaults.headers.common = {
            Authorization: `Bearer ${res.data.token}`,
          };
          navigate("/db/crypto");
        }
      })
      .catch((error) => {
        console.log(error);
        Toastify("error", error);
      });
  };

  return (
    <div className="ctm_container py-4 px-6 flex justify-center mx-auto">
      <div className="flex flex-row w-1/2 image_col">
        <img src={PageCover} alt="" />
      </div>
      <div className="flex flex-col w-1/2 login_col">
        <div className="flex flex-row justify-center align-middle gap-2 mb-6 mt-2">
          <img
            src={Logo}
            alt="coinvestment logo"
            width="56px"
            // className="border-primaryPurple border-2 border-opacity-60 rounded-lg"
          />
          <h1
            data-testid="companyTitle"
            className="title-coin font-bold my-auto text-primaryDark"
          >
            COINVESTMENT
          </h1>
        </div>
        <div className="flex flex-col mt-6 gap-3 login_cont mx-auto">
          <h1 className="text-4xl mx-auto font-bold mb-9">
            Login to your account
          </h1>
          <input
            data-testid="emailInput"
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, emailAddress: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white peer border-0 border-b-2  border-primaryDark rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primaryDark focus:ring-1 focus:ring-primaryDark
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
          <input
            data-testid="passwordInput"
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="mb-4  block w-full px-3 py-2 bg-white peer border-0 border-b-2  border-primaryDark rounded-md text-sm shadow-sm placeholder-slate-400  focus:outline-none focus:border-primaryDark focus:ring-1 focus:ring-primaryDark"
          />
          <button
            className="bg-primaryDark text-primaryLight rounded-full mt-2 h-12 w-full text-xl"
            onClick={() => handleSubmit(user)}
          >
            Login
          </button>
          <p>
            Don't have an account yet?{" "}
            <button onClick={() => navigate("/register")}>Register</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

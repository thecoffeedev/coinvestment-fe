import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userLogout } from "../../apis/user";
import ProfilePicture from "../../assets/defaultProfile.png";
import Logo from "../../assets/logo.svg";
import LogoutIcon from "../../assets/logout.png";
import Axios from "../../utils/Axios";
import { UserContext } from "../../utils/UserContext";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [contextUser, _] = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const page = location.pathname.split("/")[2];
    setCurrentPage(page);
    console.log(contextUser);
    Axios.defaults.headers.common = {
      Authorization: `Bearer ${contextUser.authToken}`,
    };
  }, []);

  const handleUserLogout = () => {
    userLogout().then((res) => {
      localStorage.clear();
      navigate("/");
    });
  };

  return (
    <div className="h-12 bg-[#3F0071] flex flex-row align-middle px-8 gap-12">
      <div className="flex flex-row align-middle gap-4">
        <img src={Logo} alt="coinvestment logo" width="34px" />
        <h1 className="font-bold my-auto text-[#FFF7E9] text-2xl hover:cursor-pointer" onClick={() => navigate('/')}>
          COINVESTMENT
        </h1>
      </div>
      <div className="flex flex-row align-middle gap-6">
        <button
          className={`text-white hover:underline ${
            currentPage === "crypto" ? "underline " : ""
          }`}
          onClick={() => navigate("/db/crypto")}
          title="Buy Cryptocurrencies"
        >
          Cryptocurrencies
        </button>
        <button
          className={` text-white hover:underline ${
            currentPage === "bundles" ? "underline " : ""
          }`}
          onClick={() => navigate("/db/bundles")}
          title="Buy Bundles"
        >
          Bundles
        </button>
        <button
          className={`text-white hover:underline ${
            currentPage === "account" ? "underline " : ""
          }`}
          onClick={() => navigate("/db/account")}
        >
          Account
        </button>
      </div>
      <div className="ml-auto flex flex-row justify-center align-middle gap-2">
        <p
          className="text-white my-auto hover:underline hover:cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          {contextUser.username}
        </p>
        <img
          src={ProfilePicture}
          alt="profile picture"
          width={"28px"}
          className="bg-white rounded-full p-0 my-auto hover:cursor-pointer"
          title="Profile"
          onClick={() => navigate("/profile")}
        />
        <img
          src={LogoutIcon}
          alt="logout"
          width={"20px"}
          className="ml-2 p-0 my-auto hover:cursor-pointer invert"
          title="Logout"
          onClick={handleUserLogout}
        />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./common.css";

function Tabs() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-red-300 h-12 flex flex-row align-middle gap-6 pl-4">
      <button
        className="rounded-full bg-primaryLight px-3 py-1 my-auto h-fit"
        onClick={() => navigate("/db/crypto")}
      >
        Crypto
      </button>
      <button
        className="rounded-full bg-primaryLight px-3 py-1 my-auto h-fit"
        onClick={() => navigate("/db/bundles")}
      >
        Bundles
      </button>
      <button
        className="rounded-full bg-primaryLight px-3 py-1 my-auto h-fit"
        onClick={() => navigate("/db/account")}
      >
        Account
      </button>
    </div>
  );
}

export default Tabs;

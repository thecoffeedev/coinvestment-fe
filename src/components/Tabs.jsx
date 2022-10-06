import React from "react";
import { useNavigate } from "react-router-dom";
import "./common.css";

function Tabs() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-12 bg-slate-600  mt-4 flex flex-row align-middle gap-6 pl-4">
      <button
        className="rounded-full bg-primaryLight px-2 py-1 my-auto h-fit"
        onClick={() => navigate("/db/crypto")}
      >
        Crypto
      </button>
      <button
        className="rounded-full bg-primaryLight px-2 py-1 my-auto h-fit"
        onClick={() => navigate("/db/bundles")}
      >
        Bundles
      </button>
      <button
        className="rounded-full bg-primaryLight px-2 py-1 my-auto h-fit"
        onClick={() => navigate("/db/account")}
      >
        Account
      </button>
    </div>
  );
}

export default Tabs;

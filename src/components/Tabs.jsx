import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./common.css";

function Tabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("crypto");

  useEffect(() => {
    const page = location.pathname.split("/")[2];
    setCurrentPage(page);
  }, []);

  return (
    <div className="w-full h-12 flex flex-row align-middle gap-6 pl-4">
      <button
        className={`rounded-full px-3 py-1 my-auto h-fit ${
          currentPage === "crypto"
            ? "bg-primaryPurple text-white"
            : "bg-primaryLight border border-primaryPurple"
        }`}
        onClick={() => navigate("/db/crypto")}
      >
        Crypto
      </button>
      <button
        className={`rounded-full px-3 py-1 my-auto h-fit ${
          currentPage === "bundles"
            ? "bg-primaryPurple text-white"
            : "bg-primaryLight border border-primaryPurple"
        }`}
        onClick={() => navigate("/db/bundles")}
      >
        Bundles
      </button>
      <button
        className={`rounded-full px-3 py-1 my-auto h-fit ${
          currentPage === "account"
            ? "bg-primaryPurple text-white"
            : "bg-primaryLight border border-primaryPurple"
        }`}
        onClick={() => navigate("/db/account")}
      >
        Account
      </button>
    </div>
  );
}

export default Tabs;

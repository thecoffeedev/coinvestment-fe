import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Account from "./pages/Dashboard/Account";
import Bundles from "./pages/Dashboard/Bundles";
import Coin from "./Pages/Dashboard/Coin";
import Crypto from "./pages/Dashboard/Crypto";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./utils/PrivateRoutes";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <div className="App flex justify-center">
      <UserProvider>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Crypto />} path="/db/crypto" />
              <Route element={<Coin />} path="/db/crypto/:coinId" />
              <Route element={<Bundles />} path="/db/bundles" />
              <Route element={<Account />} path="/db/account" />
            </Route>
            <Route element={<Landing />} path="/" exact />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </Router>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import Dashboard from "./pages/Dashboard";
=======
import { ToastContainer } from "react-toastify";
import Cryptos from "./pages/Dashboard/Cryptos";
>>>>>>> Stashed changes
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
              <Route element={<Cryptos />} path="/db/crypto" />
            </Route>
            <Route element={<Landing />} path="/" exact />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

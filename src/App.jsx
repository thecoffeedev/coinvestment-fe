import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            {/* <Route element={<PrivateRoutes />}> */}
            <Route element={< Landing />} path="/" exact />
            {/* <Route element={<Products />} path="/products" /> */}
            {/* </Route> */}
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

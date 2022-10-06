import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";

const PrivateRoutes = () => {
  const [contextUser, _] = useContext(UserContext);
  let auth = { token: contextUser.authToken };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

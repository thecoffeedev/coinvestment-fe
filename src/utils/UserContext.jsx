import { createContext, useEffect, useState } from "react";

const UserContext = createContext(undefined);

function UserProvider({ children }) {
  const defAuthToken = localStorage.getItem("$AUTH_TOKEN") || "";

  const [userDetails, setUserDetails] = useState({
    authToken: defAuthToken,
    username: "John Doe",
  });

  useEffect(() => {
    setUserDetails({
      ...userDetails,
      authToken: localStorage.getItem("$AUTH_TOKEN"),
    });
  }, [localStorage.getItem("$AUTH_TOKEN")]);

  return (
    <UserContext.Provider value={[userDetails, setUserDetails]}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

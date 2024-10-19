// SessionContext.js
import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({
    username: "JohnDoe",
    isLoggedIn: false,
    DegreeId: "",
    SemesterId: "",
    NumOfYears:"",
  });

  const updateSessionData = (newData) => {
    setSessionData((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  return (
    <SessionContext.Provider value={{ sessionData, updateSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

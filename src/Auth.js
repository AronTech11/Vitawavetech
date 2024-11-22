import React, { createContext, useState, useContext } from "react";

// Create AuthContext
const AuthContext = createContext();

// Provide Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider to wrap your app with context
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || null
  );

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

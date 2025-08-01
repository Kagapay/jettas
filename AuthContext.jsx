import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true); // Pretend logged in
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

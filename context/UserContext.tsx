"use client";

import React, {
  createContext,
  useContext,
  useState,
} from "react";

type User = {
  id: string;
  name: string;
  email: string;
  token:string
};

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);




  const logout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    window.location.href = "/login"; 
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
    
    {children}
    
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};

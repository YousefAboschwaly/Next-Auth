"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const token = localStorage.getItem("userToken");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
      return;
    }

    // 2️⃣ fallback if no user data in localStorage, fetch from API
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/auth/user-data`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error();

        const userData = await res.json();

        setUser(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
      } catch {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userData");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [ ]);



  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};

"use client";

import axios from "axios";
import React, { useContext, createContext, useState } from "react";
import { useEffect } from "react";

import * as tokenService from "@/app/utils/local-store";

const AuthContext = createContext();

export function AuthContxtProvider({ children }) {
  const [user, setUser] = useState(null);

  const fetchMe = async (token) => {
    try {
      const respon = await axios.post("/api/authenticate", token);
      setUser(respon.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = tokenService.getToken();
    console.log(token);
    if (token) {
      fetchMe({ token });
    }
  }, []);

  const userLogin = async (input) => {
    try {
      const response = await axios.post("/api/login", input);
      tokenService.storeToken(response.data.accessToken);
      setUser({ user: input.username });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user)

  const userLogout = () => {
    tokenService.clearToken();
    setUser(null);
  };

  console.log(user);
  return (
    <AuthContext.Provider value={{ userLogin, user, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}

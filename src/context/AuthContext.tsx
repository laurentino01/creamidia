"use client";

import { createContext, useState } from "react";

import { ISignInData, IUserData, authService } from "@/services/authService";

interface IAuthContextData {
  token: string | null;
  isAuth: boolean;
  handleAuthServiceSignIn: (data: ISignInData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  const isAuth = !!token;

  async function handleAuthServiceSignIn({ email, password }: ISignInData) {
    const token = await authService.signIn({ email, password });

    if (token) {
      setToken(token);
    }
  }

  return (
    <AuthContext.Provider value={{ token, isAuth, handleAuthServiceSignIn }}>
      {children}
    </AuthContext.Provider>
  );
}

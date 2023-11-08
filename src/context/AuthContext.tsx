"use client";

import { createContext, useState } from "react";

import { ISignInData, IUserData, authService } from "@/services/authService";

interface IAuthContextData {
  user: IUserData | null;
  isAuth: boolean;
  handleAuthServiceSignIn: (data: ISignInData) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUserData | null>(null);

  const isAuth = !!user;

  async function handleAuthServiceSignIn({ email, password }: ISignInData) {
    const user = await authService.signIn({ email, password });
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ user, isAuth, handleAuthServiceSignIn }}>
      {children}
    </AuthContext.Provider>
  );
}

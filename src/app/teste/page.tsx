"use client";

import { AuthContext } from "@/context/AuthContext";
import { userService } from "@/services/userService";
import { redirect, useRouter } from "next/navigation";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

interface IUserData {
  _id: string;
  email: string;
  name: string;
  role: string;
}

export default function Teste() {
  const [user, setUser] = useState<IUserData | null>(null);
  const router = useRouter();

  const authContext = useContext(AuthContext);

  useLayoutEffect(() => {
    authContext.handleAuthServiceVerifyUser();
    if (!authContext.isAuth) {
      redirect("/admin");
    }
  }, [authContext]);

  async function handleGetUserInfo(token: string) {
    const info = await userService.getUserInfo(token);
    setUser(info);
  }

  useEffect(() => {
    handleGetUserInfo(authContext.token as string);
  }, [authContext]);

  const handleLogout = useCallback(() => {
    authContext.handleAuthServiceLogout();
    router.push("/admin");
  }, [authContext, router]);

  return (
    <>
      <h1>{user?.name}</h1>
      <button onClick={() => handleLogout()}> logout </button>
    </>
  );
}

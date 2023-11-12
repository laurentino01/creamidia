"use client";

import { AuthContext } from "@/context/AuthContext";
import { userService } from "@/services/userService";
import { redirect } from "next/navigation";
import { useContext, useEffect, useLayoutEffect, useState } from "react";

interface IUserData {
  _id: string;
  email: string;
  name: string;
  role: string;
}

export default function Teste() {
  const [user, setUser] = useState<IUserData | null>(null);

  const sign = useContext(AuthContext);

  useLayoutEffect(() => {
    if (!sign.isAuth) {
      redirect("/");
    }
  }, [sign]);

  async function handleGetUserInfo(token: string) {
    const info = await userService.getUserInfo(token);
    setUser(info);
  }

  useEffect(() => {
    handleGetUserInfo(sign.token as string);
  }, [sign]);

  console.log(user);

  return (
    <>
      <h1>{user?.name}</h1>
    </>
  );
}

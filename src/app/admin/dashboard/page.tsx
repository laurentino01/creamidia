"use client";

import { AuthContext } from "@/context/AuthContext";
import { userService } from "@/services/userService";
import { useCallback, useContext, useLayoutEffect, useState } from "react";

interface User {
  name: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const auth = useContext(AuthContext);

  const handleUserInfo = useCallback(async () => {
    const infos = await userService.getUserInfo(auth.token as string);
    setUser(infos);
  }, [auth]);

  useLayoutEffect(() => {
    handleUserInfo();
  }, [auth, handleUserInfo]);

  return (
    <main>
      <h1>Olá - {user?.name}</h1>
    </main>
  );
}

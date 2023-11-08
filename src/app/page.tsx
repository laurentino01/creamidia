"use client";

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Home() {
  const sign = useContext(AuthContext);
  const router = useRouter();

  async function handleSignIn() {
    await sign.handleAuthServiceSignIn({
      email: "gabriel@gmail.com",
      password: "123",
    });
    router.push("/teste");
  }

  return (
    <main>
      <h1>lista </h1>
      <button onClick={() => handleSignIn()}>login</button>
    </main>
  );
}

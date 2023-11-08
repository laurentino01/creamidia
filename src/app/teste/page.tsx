"use client";

import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useContext, useLayoutEffect } from "react";

export default function Teste() {
  const sign = useContext(AuthContext);

  useLayoutEffect(() => {
    if (!sign.isAuth) {
      redirect("/");
    }
  }, [sign]);

  return (
    <>
      <h1>teste funfando</h1>
    </>
  );
}

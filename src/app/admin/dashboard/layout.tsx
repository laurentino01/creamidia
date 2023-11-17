"use client";

import { AuthContext } from "@/context/AuthContext";
import DashboardTemplate from "@/layout/dashboardlayout/DashboardTemplate";
import { redirect } from "next/navigation";
import { useContext, useLayoutEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useContext(AuthContext);

  useLayoutEffect(() => {
    if (!auth.isAuth) {
      redirect("/");
    }
  }, [auth]);

  return (
    <>
      <DashboardTemplate />
      {children}
    </>
  );
}

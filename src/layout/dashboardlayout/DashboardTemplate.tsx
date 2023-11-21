"use client";

import Link from "next/link";
import "./dashboard.style.css";
import Image from "next/image";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHidden, setIsHidden] = useState("hidden");
  const authContext = useContext(AuthContext);
  const router = useRouter();
  const handleLogout = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      await authContext.handleAuthServiceLogout();
      router.push("/");
    },
    [authContext, router]
  );

  const handleChangeIcon = useCallback(() => {
    setIsHidden(isHidden === "hidden" ? "show" : "hidden");
  }, [isHidden]);

  return (
    <section>
      <header id="dashboard_header">
        <div className="container">
          <div>
            <Image
              src={"/icons/menu.svg"}
              alt="ícone que abre o menu principal"
              width={44}
              height={44}
              className={` ${isHidden === "hidden" ? "show" : "hidden"} `}
              onClick={() => handleChangeIcon()}
            />
          </div>

          <div className="logo-area">
            <Image
              src={"/images/logoWhite.svg"}
              alt="Logo creamidia"
              width={144}
              height={67}
            />
          </div>
        </div>

        <nav className="menu-dashboard">
          <div
            id="mySidenav"
            className={`${
              isHidden === "hidden" ? "hiddenSideBar" : "showSideNav"
            } sidenav`}
          >
            <Link href="#">Administrar dumps</Link>
            <Link href={"/admin"} onClick={(e) => handleLogout(e)}>
              Sair
            </Link>
          </div>
        </nav>
      </header>
      <div
        className="container"
        style={{
          marginLeft: isHidden === "hidden" ? "20px" : "320px",
          transition: "0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

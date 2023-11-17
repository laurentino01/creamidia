"use client";

import Link from "next/link";
import "./dashboard.style.css";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function DashboardTemplate() {
  const [isHidden, setIsHidden] = useState("hidden");

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
            <Link href={"/"}>
              <Image
                src={"/images/logoWhite.svg"}
                alt="Logo creamidia"
                width={144}
                height={67}
              />
            </Link>
          </div>
        </div>

        <nav className="menu-dashboard">
          <div
            id="mySidenav"
            className={`${
              isHidden === "hidden" ? "hiddenSideBar" : "showSideNav"
            } sidenav`}
          >
            <Link href="#">
              Administrar <br />
              dumps
            </Link>
            <Link href="#">Sair</Link>
          </div>
        </nav>
      </header>
    </section>
  );
}

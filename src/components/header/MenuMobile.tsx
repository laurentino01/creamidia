"use client";

import Image from "next/image";
import Link from "next/link";
import "./header.style.css";
import { useCallback, useState } from "react";

export default function MenuMobile() {
  const [isHidden, setIsHidden] = useState("hidden");

  const handleChangeIcon = useCallback(() => {
    setIsHidden(isHidden === "hidden" ? "show" : "hidden");
  }, [isHidden]);

  return (
    <nav className="menu-mobile">
      <Image
        src={"/icons/menu.svg"}
        alt="ícone que abre o menu principal"
        width={44}
        height={44}
        className={` ${isHidden === "hidden" ? "show" : "hidden"} `}
        onClick={() => handleChangeIcon()}
      />
      <Image
        src={"/icons/close.svg"}
        alt="ícone que abre o menu principal"
        width={44}
        height={44}
        className={`${isHidden === "hidden" ? "hidden" : "show"}`}
        onClick={() => handleChangeIcon()}
      />

      <div
        id="mySidenav"
        className={`${
          isHidden === "hidden" ? "hiddenSideBar" : "showSideNav"
        } sidenav`}
      >
        <Link href="#">Inicio</Link>
        <Link href="#">Portfólio</Link>
        <Link href="#">Dumps</Link>
        <button className="btn btn-green">Faça um orçamento</button>
      </div>
    </nav>
  );
}

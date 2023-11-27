import Image from "next/image";
import Link from "next/link";
import MenuMobile from "./MenuMobile";
import "./header.style.css";

export default function Header() {
  return (
    <header id="header">
      <div className="container">
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

        {/*   <MenuMobile /> */}

        <nav className="menu-desktop">
          <ul>
            {/*    <li>
              <Link href={"#"}> Início </Link>
            </li>
            <li>
              <Link href={"#"}> Portfólio </Link>
            </li>
            <li>
              <Link href={"#"}> Dumps </Link>
            </li> */}
            <li>
              <button className="btn btn-green"> Faça um orçamento </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

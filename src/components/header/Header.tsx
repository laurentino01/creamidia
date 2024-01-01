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
              <Link
                className="btn btn-green"
                href={
                  "https://api.whatsapp.com/send?phone=5555519977012&text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20gr%C3%A1tis.%20"
                }
              >
                <button className="btn btn-green"> Faça um orçamento </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

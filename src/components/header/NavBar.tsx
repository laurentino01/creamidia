import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";

export default function NavBar() {
  return (
    <header className="navbar bg-primary">
      <div className="flex-1 ">
        <Link href={"/"}>
          <Image
            src={"/images/logoWhite.webp"}
            alt="logo creamidia"
            width={147}
            height={47}
            className="cursor-pointer"
          ></Image>
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Início</a>
          </li>
          <li>
            {" "}
            <a>Portfólio</a>
          </li>
          <li>
            {" "}
            <a>Dumps</a>
          </li>
        </ul>
        <ButtonPrimary />
      </nav>
    </header>
  );
}

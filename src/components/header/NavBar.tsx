import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";

export default function NavBar() {
  return (
    <header className="navbar bg-primary ">
      <div className="flex place-content-between w-full max-w-sm sm:max-w-6xl mx-auto sm:px-4">
        <div className="flex-1 ">
          <Link href={"/"}>
            <Image
              src={"/images/logoWhite.svg"}
              alt="logo creamidia"
              width={147}
              height={47}
              className="cursor-pointer"
            ></Image>
          </Link>
        </div>
        <nav>
          <label htmlFor="my-drawer-4" className="block sm:hidden">
            <Image
              src={"/icons/menu.svg"}
              alt="icone de menu"
              width={44}
              height={44}
              className="cursor-pointer drawer-button"
            ></Image>
          </label>
        </nav>
        <nav className="flex-none sm:block hidden">
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
      </div>
    </header>
  );
}

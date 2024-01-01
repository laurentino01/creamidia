import Image from "next/image";
import "./footer.style.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div>
          <Image
            src="/images/logoWhite.svg"
            alt="Logo creamidia"
            width={264}
            height={197}
          />

          <div className="links_container">
            <h3>Links</h3>
            <div>
              <Link
                href={"https://www.instagram.com/creamidiabr/"}
                target="_blank"
              >
                <Image
                  alt="instagram creamidia"
                  src={"/icons/instagram.svg"}
                  height={44}
                  width={44}
                />
              </Link>

              <Link href={"https://www.youtube.com/@Slape"} target="_blank">
                <Image
                  alt="youtube creamidia"
                  src={"/icons/youtube.svg"}
                  height={44}
                  width={44}
                />
              </Link>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <p>
            Creamídia © 2024 Todos os direitos reservados - CNPJ:
            53.107.008/0001-18
          </p>
        </div>
      </div>

      <p>
        Desenvolvido por: <strong> Gabriel Laurentino</strong>
      </p>
    </footer>
  );
}

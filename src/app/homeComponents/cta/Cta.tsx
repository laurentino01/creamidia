import Link from "next/link";
import "./cta.style.css";

export default function Cta() {
  return (
    <section id="cta">
      <div className="container">
        <div className="content-area">
          <div>
            <p className="paragraph-spaced">Contrate agora</p>
            <hr />
            <h2>
              <span>
                Eleve o<strong> nível</strong>
              </span>
              <br />
              <span>do seu conteúdo</span>
            </h2>

            <Link
              href={
                "https://api.whatsapp.com/send?phone=5555519977012&text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20gr%C3%A1tis.%20"
              }
            >
              <button className="btn btn-green">Faça um orçamento</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

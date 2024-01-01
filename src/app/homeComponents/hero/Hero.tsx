import { paytoone } from "@/app/layout";
import "./hero.style.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="content-area">
          <div>
            <p>roteiro, edição, design</p>
            <hr />
            <h1>
              <span className={`${paytoone.className}`}>
                Eleve o{" "}
                <strong className={`${paytoone.className}`}> nível</strong>
              </span>{" "}
              <br />
              <span className={`${paytoone.className}`}>do seu conteúdo</span>
            </h1>
          </div>
          <Link
            href={
              "https://api.whatsapp.com/send?phone=5555519977012&text=Ol%C3%A1,%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20gr%C3%A1tis.%20"
            }
          >
            <button className="btn btn-green">Faça um orçamento</button>
          </Link>
        </div>

        <div className="video-area">
          <iframe src="https://www.youtube.com/embed/9rxf81RfQtM?si=mXftiWSGt0BbsMqY?si=mXftiWSGt0BbsMqY&amp;controls=0&rel=0&showinfo=0"></iframe>
        </div>
      </div>
    </section>
  );
}

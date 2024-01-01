import { paytoone } from "@/app/layout";
import "./hero.style.css";

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
          <button className="btn btn-green">Faça um orçamento</button>
        </div>

        <div className="video-area">
          <iframe src="https://www.youtube.com/embed/9rxf81RfQtM?si=mXftiWSGt0BbsMqY?si=mXftiWSGt0BbsMqY&amp;controls=0&rel=0&showinfo=0"></iframe>
        </div>
      </div>
    </section>
  );
}

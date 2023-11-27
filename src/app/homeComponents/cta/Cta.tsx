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

            <button className="btn btn-green">Faça um orçamento</button>
          </div>
        </div>
      </div>
    </section>
  );
}

import "./hero.style.css";

export default function Hero() {
  return (
    <section className="">
      <div className="container">
        <div>
          <div>
            <p>roteiro, edição, design</p>
            <hr />
            <h1>
              <span>Eleve o nível</span>
              <span>do seu conteúdo</span>
            </h1>
          </div>
          <button className="btn btn-green">Faça um orçamento</button>
        </div>

        <div>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

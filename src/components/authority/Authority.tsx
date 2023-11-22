import "./authority.style.css";

export default function Authority() {
  return (
    <section id="authority">
      <div className="container">
        <div className="content-area">
          <div>
            <p>Porquê nos escolher</p>
            <hr />
            <h2>
              Nossa<span> reputação</span> <br />
              fala por nós
            </h2>
          </div>
        </div>

        <div className="card-area">
          <div className="card">
            <div
              className="card-image"
              style={{
                backgroundImage: `url('/images/authority/eagle.png')`,
              }}
            ></div>

            <p>
              Essa produtora é top! Os editores <span> são artistas</span>,
              transformaram meus vídeos em puro sucesso. A atenção aos detalhes
              e a criatividade foram incríveis.
            </p>

            <h6>Eagle Trindade - Youtuber e empresário</h6>
          </div>

          <div className="card">
            <div
              className="card-image"
              style={{
                backgroundImage: `url('/images/authority/johnny-klein.png')`,
              }}
            ></div>

            <p>
              Primeiro contato que tive com eles me senti muito bem acolhido,
              100% profissionais e com certeza surpreenderam minhas
              expectativas,<span> qualquer alteração </span> que eu pedi eles
              fizeram, gosto muito deles e me considero cliente fiel.
            </p>

            <h6>Johhny Klein - Ator e empresário</h6>
          </div>

          <div className="card">
            <div
              className="card-image"
              style={{
                backgroundImage: `url('/images/authority/ine.webp')`,
              }}
            ></div>

            <p>
              O trabalho da Crea Mídia sempre foi bom, eles sempre entregam os
              vídeos <span> no prazo</span>, Wesley é um excelente editor e mais
              ainda ele saber conduzir uma equipe.
            </p>

            <h6>INE - Youtuber e empresário</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

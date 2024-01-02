import "./authority.style.css";

export default function Authority() {
  const list = [
    {
      bgImg: "neagle.png",
      paragraph:
        "Essa produtora é top! Os editoresão artistas,transformaram meus vídeos em puro sucesso.",
      name: "Neagle Trindade",
    },
    {
      bgImg: "joao-caetano.webp",
      paragraph: "Editor incrível, recomendo seu trabalho!",
      name: "João Caetano",
    },
    {
      bgImg: "virus.webp",
      paragraph:
        "ele é diferente, sempre tem uma surpresa para nos mostrar e o trabalho deles é sempre de muita qualidade!",
      name: "Virus",
    },
    {
      bgImg: "lostnunbound.webp",
      paragraph:
        "Hard worker, always looking to improve. Great attitude and high potential.",
      name: "LostNUnbound",
    },
    {
      bgImg: "SuperHeroKids.webp",
      paragraph:
        "Wesley was very professional and did an excellent job editing in our specific channel style!",
      name: "SuperHeroKids",
    },
    {
      bgImg: "Sherman.webp",
      paragraph:
        "Amazing editor. Quick and easy, very understanding and professional.",
      name: "Sherman",
    },
  ];
  return (
    <section id="authority">
      <div className="container">
        <div className="content-area">
          <div>
            <p className="paragraph-spaced">Porquê nos escolher</p>
            <hr />
            <h2>
              Nossa<span> reputação</span> <br />
              fala por nós
            </h2>
          </div>
        </div>

        <div className="card-area">
          {list.map((cardItem) => (
            <div className="card" key={cardItem.bgImg}>
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(/images/authority/${cardItem.bgImg})`,
                }}
              ></div>
              <p> {cardItem.paragraph} </p>
              <h6> {cardItem.name}</h6>
            </div>
          ))}

          {/* <div className="card">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

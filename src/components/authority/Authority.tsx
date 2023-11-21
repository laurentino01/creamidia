import "./authority.style.css";

interface IListCardsData {
  img: string;
  paragraph: string;
  name: string;
}

export default function Authority() {
  const listCards: IListCardsData[] = [
    {
      img: "eagle.png",
      paragraph:
        "Essa produtora é top! Os editores são artistas, transformaram meus vídeos em puro sucesso. A atenção aos detalhes e a criatividade foram incríveis.",
      name: "Eagle Trindade - Youtuber e empresário",
    },
    {
      img: "johnny-klein.png",
      paragraph:
        "O trabalho da Crea Mídia sempre foi bom, eles sempre entregam os vídeos no prazo, Wesley é um excelente editor e mais ainda ele saber conduzir uma equipe.",
      name: "INE - Youtuber e empresário",
    },
    {
      img: "ine.webp",
      paragraph:
        "Primeiro contato que tive com eles me senti muito bem acolhido, 100% profissionais e com certeza surpreenderam minhas expectativas, qualquer alteração que eu pedi eles fizeram, gosto muito deles e me considero cliente fiel.",
      name: "Johhny Klein - Ator e empresário ",
    },
  ];

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
          {listCards.map((item) => (
            <div key={item.img} className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url('/images/authority/${item.img}')`,
                }}
              ></div>

              <p>{item.paragraph} </p>

              <h6>{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import "./authority.style.css";

export default function Authority() {
  const list = [
    {
      bgImg: "neagle.png",
      paragraph:
        "Essa produtora é top! Os editores são artistas, transformaram meus vídeos em puro sucesso.",
      name: "Neagle",
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
        </div>
      </div>
    </section>
  );
}

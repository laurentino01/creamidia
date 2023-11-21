import Image from "next/image";
import "./about.style.css";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div>
          <Image
            src="/images/about/logo-about.svg"
            alt="Logo Creamidia"
            width={350}
            height={350}
          />
        </div>

        <div className="content-area">
          <div>
            <p>Sobre nós</p>
            <hr />
            <h2>
              Sua visão, Nossa <span>experiência.</span>
            </h2>
          </div>

          <p>
            Eu, Wesley, fundador da Creamídia, descobri minha paixão pela edição
            de vídeos como um hobby divertido para o meu canal no YouTube.{" "}
            <br /> <br /> Com o tempo, essa paixão se transformou em uma
            profissão. Começamos <span> editando</span>
            vídeos para canais pequenos até chegarmos a trabalhar com grandes
            canais no Brasil.
            <br /> <br /> Hoje, expandimos nossos serviços para além do YouTube,
            <span> incluindo </span>anúncios, conteúdos institucionais e
            empresariais. Com mais de 9 anos de experiência no mercado, temos
            uma equipe de profissionais especializados em edição, produção e
            design gráfico. Estamos prontos para trazer todo o nosso
            conhecimento e expertise para agregar valor ao seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
}

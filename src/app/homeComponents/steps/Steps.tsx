import Image from "next/image";
import "./steps.style.css";

export default function Steps() {
  return (
    <section id="steps">
      <div className="container">
        <div className="content-area">
          <div>
            <p className="paragraph-spaced">Nosso processo</p>
            <hr />
            <h2>
              Seu conteúdo no <br /> ar <span> em três </span>passos
            </h2>
          </div>
        </div>

        <div className="steps-container">
          <div className="step">
            <div>
              <Image
                src="/images/steps/step1.svg"
                alt="Primeiro passo"
                width={57}
                height={57}
              />
            </div>

            <div>
              <h6>PLANEJAMENTO E ROTEIRO</h6>

              <p>
                {" "}
                O primeiro passo é realizar um planejamento detalhado,
                entendendo as metas e objetivos do cliente.
              </p>
            </div>
          </div>

          <div className="step">
            <div>
              <Image
                src="/images/steps/step2.svg"
                alt="Segundo passo"
                width={57}
                height={57}
              />
            </div>

            <div>
              <h6>PRODUÇÃO E EDIÇÃO</h6>

              <p>
                Nesta etapa, nós trabalhamos na criação das imagens e vídeos se
                necessários para a campanha.
              </p>
            </div>
          </div>

          <div className="step">
            <div>
              <Image
                src="/images/steps/step3.svg"
                alt="Primeiro passo"
                width={57}
                height={57}
              />
            </div>

            <div>
              <h6>DESIGN E ENTREGA</h6>

              <p>
                Depois de finalizado, entregamos seu vídeo pronto para ir ao ar,
                também criamos suas thumbs ou capas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

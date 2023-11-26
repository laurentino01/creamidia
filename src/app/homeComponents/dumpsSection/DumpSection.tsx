import "./dumpSection.style.css";
import CardDump from "./DumpCard";

export default function DumpSection() {
  const dumpList = [
    {
      mesAno: "Outubro 2023",
      color: "purple-secondary",
    },
    {
      mesAno: "Novembro 2023",
      color: "green",
    },
    {
      mesAno: "Dezembro 2023",
      color: "dark",
    },
  ];

  return (
    <section id="dumpSection">
      <div className="container">
        <div className="content-area">
          <div>
            <p className="paragraph-spaced">Dumps</p>
            <hr />
            <h2>
              <span> Melhores </span>edições <br /> de cada mês
            </h2>
          </div>
        </div>

        <div className="dumpCard-area">
          {dumpList.map((dump) => (
            <CardDump
              key={dump.mesAno}
              mesAno={dump.mesAno}
              color={dump.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

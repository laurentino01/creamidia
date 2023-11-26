import Image from "next/image";
import "./dumpCard.style.css";

interface ICardDumpProps {
  mesAno: string;
  color: string;
}

export default function CardDump({ mesAno, color }: ICardDumpProps) {
  return (
    <div className="dumpCard">
      <div
        style={{
          backgroundColor: `var(--${color})`,
        }}
      ></div>
      <div>
        <h6>{mesAno} </h6>

        <Image
          src={"/images/dumpsection/linked.svg"}
          alt="link externo"
          height={14}
          width={14}
        />
      </div>
    </div>
  );
}

import ButtonPrimary from "@/components/ButtonPrimary";
import { paytoone } from "./layout";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center gap-96 min-h-[100vh] bg-primary ">
        <div>
          <h1
            className={` font-bold text-center text-white ${paytoone.className}`}
          >
            <span className="text-6xl">
              {" "}
              Eleve o <b className="text-secondary"> nível </b>
            </span>{" "}
            <br /> <span className="text-5xl">do seu conteúdo </span>
          </h1>
        </div>

        <div>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

import ButtonPrimary from "@/components/ButtonPrimary";
import { paytoone } from "./layout";

export default function Home() {
  return (
    <main>
      <h1 className={`text-6xl font-bold text-center ${paytoone.className}`}>
        Eleve o nível <br /> do seu conteúdo
      </h1>
    </main>
  );
}

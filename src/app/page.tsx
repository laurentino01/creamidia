import About from "@/app/homeComponents/about/About";
import Authority from "@/app/homeComponents/authority/Authority";
import Header from "@/components/header/Header";
import Hero from "@/app/homeComponents/hero/Hero";
import Testimonials from "@/app/homeComponents/testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Testimonials />
      <About />
      <Authority />
    </main>
  );
}

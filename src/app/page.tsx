import About from "@/components/about/About";
import Authority from "@/components/authority/Authority";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/testimonials/Testimonials";

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

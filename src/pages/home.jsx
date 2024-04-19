import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { PreLoader } from "../components/Preloader";

export function HomePage() {
  return (
    <>
      <PreLoader />
      <Header />
      <main>
        <article>
          <Hero />
          <Services />
          <About />
        </article>
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ClientSections } from "@/components/client-sections";
import { Services } from "@/components/services";
import { Vision } from "@/components/vision";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ClientSections />
        <Services />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Mission } from "@/components/mission";
import { CompanyVision } from "@/components/company-vision";
import { Philosophy } from "@/components/philosophy";
import { WhyUs } from "@/components/why-us";
import { ClientSections } from "@/components/client-sections";
import { Services } from "@/components/services";
import { Platforms } from "@/components/platforms";
import { Ecosystem } from "@/components/ecosystem";
import { Approach } from "@/components/approach";
import { DigitalWorkflow } from "@/components/digital-workflow";
import { Technology } from "@/components/technology";
import { AiIntelligence } from "@/components/ai-intelligence";
import { Security } from "@/components/security";
import { Industries } from "@/components/industries";
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
        <Mission />
        <CompanyVision />
        <Philosophy />
        <WhyUs />
        <ClientSections />
        <Services />
        <Platforms />
        <Ecosystem />
        <Approach />
        <DigitalWorkflow />
        <Technology />
        <AiIntelligence />
        <Security />
        <Industries />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

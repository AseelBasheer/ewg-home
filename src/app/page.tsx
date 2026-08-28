import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { PlatformDashboard } from "@/components/platform-dashboard";
import { WorkflowVisualization } from "@/components/workflow-visualization";
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
        <PlatformDashboard />
        <WorkflowVisualization />
        <Services />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

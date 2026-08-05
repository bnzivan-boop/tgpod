import { Nav } from "@/components/layout/Nav";
import { IntroProvider } from "@/components/layout/Intro";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Inside } from "@/components/sections/Inside";
import { Spec } from "@/components/sections/Spec";
import { Demand } from "@/components/sections/Demand";
import { Install } from "@/components/sections/Install";
import { Business } from "@/components/sections/Business";
import { WhiteLabel } from "@/components/sections/WhiteLabel";
import { Economics } from "@/components/sections/Economics";
import { Audience } from "@/components/sections/Audience";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <IntroProvider>
      <ScrollProgress />
      <Nav />
      <div className="frame">
        <main>
          <Hero />
          <About />
          <Inside />
          <Spec />
          <Demand />
          <Install />
          <Business />
          <WhiteLabel />
          <Economics />
          <Audience />
          <CTA />
        </main>
        <Footer />
      </div>
    </IntroProvider>
  );
}

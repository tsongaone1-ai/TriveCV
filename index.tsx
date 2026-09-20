import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/nav";
import { CvDemo } from "@/components/landing/cv-preview";
import {
  Closing,
  Faq,
  Features,
  Footer,
  Hero,
  HowItWorks,
  PhotoBand,
  Pricing,
  Testimonials,
} from "@/components/landing/sections";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <Nav />
      <main>
        <Hero />
        <PhotoBand />
        <Features />
        <CvDemo />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

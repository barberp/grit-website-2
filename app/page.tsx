"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Coaches from "@/components/Coaches";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="scroll-snap">
      <Navigation />
      <section className="scroll-snap-section">
        <Hero />
      </section>
      <section className="scroll-snap-section">
        <About />
      </section>
      <section className="scroll-snap-section">
        <Coaches />
      </section>
      <section className="scroll-snap-section">
        <Schedule />
      </section>
      <section className="scroll-snap-section">
        <Pricing />
      </section>
      <section className="scroll-snap-section">
        <Contact />
      </section>
    </main>
  );
}


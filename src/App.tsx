/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Industries } from './components/sections/Industries';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { CaseStudy } from './components/sections/CaseStudy';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { TechStack } from './components/sections/TechStack';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/ui/Chatbot';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { NoiseOverlay } from './components/ui/NoiseOverlay';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen selection:text-black">
        <NoiseOverlay />
        <Navbar />
        <main>
          <Hero />
          <Industries />
          <Services />
          <Process />
          <CaseStudy />
          <WhyChooseUs />
          <TechStack />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </SmoothScroll>
  );
}

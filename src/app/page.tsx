import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Services } from '@/components/sections/Services';
import { Methodology } from '@/components/sections/Methodology';
import { Clients } from '@/components/sections/Clients';
import { Education } from '@/components/sections/Education';
import { Fees } from '@/components/sections/Fees';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Methodology />
      <Clients />
      <Skills />
      <Education />
      <Fees />
      <Contact />
    </>
  );
}

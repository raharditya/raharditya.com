import type { MetaFunction } from '@remix-run/node';

import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import TechStacks from './components/TechStacks';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

export const meta: MetaFunction = () => {
  return [
    { title: 'Raharditya' },
    { name: 'description', content: `Hi! I'm a Full-stack Web Developer based in Indonesia. Ready to work together?` },
  ];
};

export default function Index() {
  return (
    <>
      <div className="bg-primary-light text-primary-dark">
        <Hero />
        <TechStacks />

        <Projects />

        <Experiences />
        <AboutMe />

        <footer className="py-6 text-center">
          <p className="text-sm font-semibold lg:font-bold">raharditya.com</p>
          <p className="text-sm text-body-dark">Last updated: August 2024</p>
        </footer>
      </div>
    </>
  );
}

import type { MetaFunction } from '@remix-run/node';

import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import TechStacks from './components/TechStacks';
import Experiences from './components/Experiences';
import Projects from './components/Projects';

export const meta: MetaFunction = () => {
  // TODO: Update meta
  return [{ title: 'Raharditya' }, { name: 'description', content: 'Welcome to Remix!' }];
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

        {/* <div className="space-y-8 pb-32 pt-28">
          <h2 className="text-center text-2xl font-bold lg:text-4xl">
            Ready to <span className="text-accent-1">Collaborate?</span>
          </h2>
          <CTA
            primaryClassName="bg-primary-dark border-2 border-primary-light text-primary-light hover:bg-accent-2 hover:text-primary-dark"
            secondaryClassName="bg-primary-dark border-2 border-primary-light text-primary-light hover:filter hover:bg-secondary-dark"
          />
        </div> */}

        <footer className="py-6 text-center">
          <p className="text-sm font-bold">raharditya.com</p>
          <p className="text-sm text-body-light">Last updated: June 2024</p>
        </footer>
      </div>
    </>
  );
}

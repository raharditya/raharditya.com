import CTA from '../../../components/CTA';
import Container from '../../../components/Container';
import SVGMorprh from '~/components/SVGMorph';
import { blob1, blob2, blob3, blob4, blob5 } from '~/lib/data/blobPaths';
import { getCurrentBreakpoint } from '~/lib/helper';

const Hero = () => {
  const breakpoint = getCurrentBreakpoint();

  return (
    <div className="hero-bg">
      <Container>
        <div className="flex h-[650px] items-center lg:h-[750px] lg:gap-8 lg:pt-12">
          <div className="space-y-36 lg:space-y-48">
            <div className="space-y-8">
              <p className="text-lg text-primary-dark lg:text-base">
                Hi, I'm <i>Raharditya</i>
              </p>

              <div className="space-y-2">
                <h1 className="text-3xl font-semibold leading-snug text-accent-3 lg:text-nowrap lg:text-5xl lg:font-bold">
                  <span className="text-primary-dark opacity-50">I'm a</span> Full-stack Web Developer
                </h1>
                <h1 className="text-3xl font-semibold leading-snug text-accent-3 lg:text-5xl lg:font-bold">
                  <span className="text-primary-dark opacity-50">Based in</span> Indonesia
                </h1>
              </div>

              <p className="max-w-[750px] text-primary-dark">
                Combining creative design with powerful functionality, I build websites that not only look great but
                also deliver seamless user experiences and scalable performance
              </p>
            </div>

            <CTA className="bg-white hover:brightness-90 hover:filter" />
          </div>

          {breakpoint !== 'sm' && (
            <svg
              width="656"
              height="608"
              viewBox="0 0 656 608"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="blur-lg"
            >
              <SVGMorprh paths={[blob1, blob2, blob3, blob4, blob5, blob1]} />
            </svg>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Hero;

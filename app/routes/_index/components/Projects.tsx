import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '~/components/Container';
import ProjectDetailsModal from '~/components/project-details/ProjectDetailsModal';
import { cn } from '~/lib/helper';
import Video from './Video';
import { useProjectStore } from '~/lib/stores/useProjectStore';
import projects from '~/data/projects';
import useUserAgent from '~/lib/hooks/useUserAgent';

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useProjectStore();
  const [_, os] = useUserAgent();

  const [activeIndex, setActiveIndex] = useState(0);

  const [transitioning, setTransitioning] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const breakpoints: number[] = [];

  for (let i = 0; i < projects.length + 1; i++) {
    breakpoints.push(windowDimensions.height * (i + 1));
  }

  const handleScroll = () => {
    const pos = ref.current?.getBoundingClientRect();
    setScrollPosition((pos?.top || 0) * -1);
  };

  function getWindowDimensions() {
    if (typeof window === 'undefined') {
      return {
        width: 0,
        height: 0,
      };
    }

    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!breakpoints.length || !scrollPosition) return;
    const index = breakpoints.findIndex((bp) => scrollPosition < bp);

    if (index === -1 || index === activeIndex || index > projects.length - 1) return;
    setActiveIndex(index);
    setTransitioning(true);

    setTimeout(() => {
      setTransitioning(false);
    }, 200);
  }, [scrollPosition]);

  return (
    <>
      <Container className="px-4">
        <div className="py-16" ref={ref} style={{ height: `${(projects.length + 1) * 100}vh` }}>
          <div className="sticky top-8 space-y-6">
            <h2 className="text-2xl font-bold text-accent-3 lg:text-3xl">Projects</h2>

            <div className="projects-bg relative rounded-2xl p-6 text-primary-light bg-blend-multiply lg:h-[80vh] lg:max-h-[800px] lg:pr-10">
              <div className="absolute right-[8px] top-8 space-y-1.5 lg:right-[17px]">
                {[...new Array(projects.length)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'h-2 w-2 cursor-pointer rounded-full bg-[#747474] transition hover:bg-card-white',
                      i === activeIndex && 'bg-card-white',
                    )}
                    onClick={() => {
                      window.scrollTo({
                        top: (ref.current?.offsetTop || 0) + (breakpoints[i] - windowDimensions.height),
                        behavior: 'smooth',
                      });
                    }}
                  />
                ))}
              </div>

              <div className="flex h-full flex-col-reverse gap-6 lg:flex-row">
                <div className="lg:w-96">
                  <AnimatePresence>
                    {!transitioning && (
                      <motion.div
                        className="flex h-full flex-col items-start justify-center gap-8 lg:gap-8"
                        exit={{ opacity: 0 }}
                      >
                        <motion.h3
                          className="text-xl font-bold lg:text-3xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {projects[activeIndex].name}
                        </motion.h3>

                        <motion.p
                          className="-mt-4 text-sm lg:text-base"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {projects[activeIndex].shortDescription}
                        </motion.p>

                        <motion.button
                          className={cn(
                            'flex items-center space-x-8 rounded-full border-2 border-primary-dark px-4 py-2 text-center text-sm font-medium text-primary-dark transition lg:text-base',
                            'bg-white hover:brightness-90 hover:filter',
                          )}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          onClick={() => {
                            onOpen(projects[activeIndex].slug);
                            // window.history.replaceState(
                            //   null,
                            //   projects[activeIndex].name,
                            //   `/${projects[activeIndex].slug}`,
                            // );
                          }}
                        >
                          <p>Read More</p>

                          <i className="fi fi-rr-arrow-right flex h-4 w-4 items-center justify-center text-lg" />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="h-64 overflow-hidden rounded-xl bg-body-light lg:h-full lg:flex-1">
                  <Video
                    src={os === 'Android' ? projects[activeIndex].videoUrl : '/projects.mp4'}
                    progress={
                      os !== 'Android'
                        ? Math.min(Math.max(scrollPosition / (windowDimensions.height * projects.length), 0), 1)
                        : undefined
                    }
                    isScrollControlled={os !== 'Android'}
                    isLooped={os === 'Android'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <ProjectDetailsModal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          // window.history.replaceState(null, 'Raharditya', '/');
        }}
      />
    </>
  );
};

export default Projects;

import { cn, getCurrentBreakpoint } from '~/lib/helper';
import Container from '../../../components/Container';
import { useEffect, useRef, useState } from 'react';

const data = [
  {
    title: 'Front-end',
    stacks: ['JavaScript', 'TypeScript', 'React-based Frameworks', 'Firebase', 'TailwindCSS'],
  },
  {
    title: 'Back-end',
    stacks: ['Go', 'NodeJS', 'PostgreSQL', 'Amazon Web Services (AWS)', 'Redis', 'GraphQL'],
  },
  {
    title: 'Others',
    stacks: ['Docker & Docker Swarm', 'Git', 'Linux CLI', 'Figma', 'CI/CD'],
  },
];

const TechStacks = () => {
  const breakpoint = getCurrentBreakpoint();
  const [active, setActive] = useState<number | null>(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update the active state with the index of the intersecting element
            setActive(refs.current.indexOf(entry.target));
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // trigger when at least half the element is visible
      },
    );

    refs.current.forEach((ref) => observer.observe(ref));

    // Clean up
    return () => {
      refs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <Container className="px-0">
      <div className="space-y-6 py-14">
        <h2 className="px-4 text-2xl font-bold text-accent-3 lg:text-3xl">Tech Stacks</h2>

        <div className="no-scrollbar flex snap-x snap-mandatory scroll-m-4 justify-between gap-6 overflow-x-scroll lg:px-4">
          <div className="snap-start scroll-mx-4 lg:hidden" />
          {data.map((d, i) => (
            <div
              key={d.title}
              ref={(ref) => (refs.current[i] = ref)}
              className={cn(
                'group relative flex h-56 w-[280px] flex-shrink-0 snap-start scroll-mx-4 flex-col overflow-hidden rounded-xl border border-primary-dark bg-card-white p-4 transition-all lg:flex-shrink lg:hover:bg-accent-1',
                'justify-end lg:w-[calc(100%/3-theme(spacing.4))] lg:hover:w-[60%]',
                active === i && (breakpoint === 'sm' || breakpoint === 'md') && 'bg-accent-1',
              )}
            >
              {/* <div className="absolute bottom-0 left-0 top-0 isolate z-10 w-full">
                <div className="stacks-bg h-full w-full" />
                <div className="stacks-overlay absolute left-0 top-0 h-full w-full" />
              </div> */}

              <h3
                className={cn(
                  'relative z-20 mb-4 justify-self-end text-xl font-semibold transition-all lg:group-hover:-translate-y-[100%] lg:group-hover:opacity-0',
                  active === i && (breakpoint === 'sm' || breakpoint === 'md') && '-translate-y-[100%] opacity-0',
                )}
              >
                {d.title}
              </h3>

              <div
                className={cn(
                  'absolute left-0 top-[100%] z-20 flex h-56 w-full flex-col justify-between p-4 opacity-0 transition-all lg:group-hover:top-0 lg:group-hover:opacity-100',
                  active === i && (breakpoint === 'sm' || breakpoint === 'md') && 'top-0 opacity-100',
                )}
              >
                <h3 className="mb-4 justify-self-end text-xl font-semibold">{d.title}</h3>

                <ul>
                  {d.stacks.map((stack) => (
                    <li key={stack} className="flex items-center gap-2">
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="snap-start scroll-mx-4 lg:hidden" />
        </div>
      </div>
    </Container>
  );
};

export default TechStacks;

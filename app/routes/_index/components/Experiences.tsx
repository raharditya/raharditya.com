import { useState } from 'react';

import AnimateChangeInHeight from '~/components/AnimateChangeInHeight';
import Container from '~/components/Container';

import { cn } from '~/lib/helper';

const Experiences = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-14">
      <Container>
        <div className="space-y-8 lg:space-y-12">
          <h2 className="text-2xl font-bold text-accent-3 lg:text-3xl">Work Experiences</h2>

          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            <div className="h-14 w-14 flex-shrink-0 rounded-lg bg-body-dark p-3">
              <img src="/skilvul-head.png" alt="" />
            </div>

            <div className="relative space-y-4">
              <div className="lg:text-lg">
                <h3 className="font-semibold">Full-stack Web Developer</h3>
                <div className="flex items-center gap-2 text-body-dark">
                  <p>Skilvul</p>
                  <div className="h-1.5 w-1.5 rounded-full bg-body-dark" />
                  <p>Sep 2021 - Jul 2024 (2 yrs 8 mos)</p>
                </div>
              </div>

              <AnimateChangeInHeight>
                <div className="space-y-4 rounded-xl border border-card-border bg-card-white p-4">
                  <div
                    className={cn(
                      'relative flex flex-col gap-8 overflow-hidden lg:flex-row',
                      isExpanded ? 'max-h-[unset]' : 'max-h-36',
                    )}
                  >
                    <div className="flex-1 space-y-2">
                      <h4 className="font-semibold lg:text-lg">Description</h4>
                      <p className="text-body-dark">
                        I worked at an edu-tech company specializing in online classes and bootcamps for the technology
                        sector. My responsibilities included developing and maintaining high-quality web applications,
                        encompassing front-end, back-end, and some DevOps tasks.
                      </p>
                    </div>

                    <div className="space-y-2 lg:w-2/5">
                      <h4 className="font-semibold lg:text-lg">Key Responsibilities</h4>
                      <p className="text-body-dark">
                        <ul className="list-disc pl-4">
                          <li>
                            Ensured code quality with unit testing and continuous integration. Collaborated with
                            cross-functional teams to streamline development processes and optimize performance.
                          </li>
                          <li>
                            Integrated AI and machine learning for user performance prediction as part of my OKR
                            assignment using existing data from more than 1500 users.
                          </li>
                          <li>
                            Invited as a speaker for the publicly available company-hosted webinar 3 times and attended
                            by a total of 600+ students across Indonesia.
                          </li>
                          <li>
                            Maintained service uptime, ensuring uninterrupted platform access through proactive
                            monitoring, quick troubleshooting, and robust solutions for a high-quality user experience.
                          </li>
                        </ul>
                      </p>
                    </div>

                    {!isExpanded && (
                      <div className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-b from-transparent to-card-white" />
                    )}
                  </div>

                  <button className="font-medium text-primary-dark" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </AnimateChangeInHeight>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experiences;

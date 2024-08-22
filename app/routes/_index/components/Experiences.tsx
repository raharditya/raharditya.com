import { useState } from 'react';
import AnimateChangeInHeight from '~/components/AnimateChangeInHeight';
import Container from '~/components/Container';
import projects from '~/data/projects';
import { cn } from '~/lib/helper';

const data = [
  {
    company: 'Skilvul',
    location: 'Jakarta, Indonesia',
    role: 'Full-stack Web Developer',
    year: '2021 - 2024',
    pictureUrl: '/skilvul-head.png',
    // pictureUrl: import.meta.env.BASE_URL + '/skilvul-head.png',
    description:
      'Skilvul is a premier edu-tech company focused on transforming coding education. The platform provides an extensive range of interactive courses, real-world projects, and personalized mentorship, catering to learners of all ages and skill levels',
    projects: [
      {
        slug: 'skilroom',
        name: 'SkilRoom',
        pictureUrl: '/skilroom.png',
      },
      {
        slug: 'program-platform',
        name: 'Bootcamp Platform',
        pictureUrl: '/skilroom.png',
      },
      {
        slug: 'certificate-generator',
        name: 'Certificate Generator',
        pictureUrl: '/skilroom.png',
      },
    ],
    highligths: [
      'Skilvul is a premier edu-tech company focused on transforming coding education.',
      'The platform provides an extensive range of interactive courses, real-world projects.',
      'And personalized mentorship, catering to learners of all ages and skill levels.',
    ],
  },
  {
    company: 'Freelance',
    location: 'Yogyakarta, Indonesia',
    role: 'Full-stack Web Developer',
    year: '2019 - 2021',
    // pictureUrl: '/skilvul-head.png',
    // pictureUrl: import.meta.env.BASE_URL + '/skilvul-head.png',
    description:
      'When I was in college, I started to take freelance projects. I have worked with various clients from different countries. I have developed websites, web applications, and mobile applications.',
    projects: [
      {
        slug: 'skilroom',
        name: 'SkilRoom',
        pictureUrl: '/skilroom.png',
      },
      {
        slug: 'program-platform',
        name: 'Bootcamp Platform',
        pictureUrl: '/skilroom.png',
      },
      {
        slug: 'certificate-generator',
        name: 'Certificate Generator',
        pictureUrl: '/skilroom.png',
      },
    ],
    highligths: [
      'Skilvul is a premier edu-tech company focused on transforming coding education.',
      'The platform provides an extensive range of interactive courses, real-world projects.',
      'And personalized mentorship, catering to learners of all ages and skill levels.',
    ],
  },
];

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
                  <p>Sep 2021 - Jul 2024 (2 yrs 6 mos)</p>
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
                        I have been making websites since 2018. Apart from being a full-stack developer, I am also
                        skilled in UI/UX design. In 2018, I became the Vice Chair of the Media and Information division
                        in my college study program organization. In 2019, me and my team won a silver medal in the 2019
                        KIWIE innovation competition held in Seoul, South Korea.
                      </p>
                    </div>

                    <div className="space-y-2 lg:w-2/5">
                      <h4 className="font-semibold lg:text-lg">Key Responsibilities</h4>
                      <p className="text-body-dark">
                        <ul className="list-disc pl-4">
                          <li>Skilvul is a premier edu-tech company focused on transforming coding education.</li>
                          <li>
                            The platform provides an extensive range of interactive courses, real-world projects.{' '}
                          </li>
                          <li>and personalized mentorship, catering to learners of all ages and skill levels.</li>
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

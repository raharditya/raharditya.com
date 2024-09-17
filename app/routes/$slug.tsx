import { Fragment, useState } from 'react';
import { json, redirect, useLoaderData } from '@remix-run/react';

import AnimateChangeInHeight from '~/components/AnimateChangeInHeight';

import projects from '~/data/projects';
import { cn } from '~/lib/helper';
import type { MetaFunction } from '@remix-run/node';

export const loader = async ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug);

  return json({ project });
};

export const meta: MetaFunction<typeof loader> = ({ data }: { data: any }) => {
  return [
    { title: `${data.project?.name} - Raharditya` },
    { name: 'description', content: data.project?.shortDescription },
  ];
};

export default function ProjectDetails() {
  const { project } = useLoaderData<typeof loader>();

  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return redirect('/');
  }

  return (
    <div className="bg-primary-light px-6 pb-8 lg:px-0">
      <div className="mx-auto max-w-[1350px] lg:px-4">
        <div className="pb-4 pt-6">
          <a href="/" className="flex items-center gap-2 hover:underline">
            <i className="fi fi-rr-arrow-left flex h-4 w-4 items-center justify-center"></i>
            Back to homepage
          </a>
        </div>

        <div className="py-8">
          <div className="mb-6 flex flex-col justify-between pr-10 lg:flex-row lg:pr-0">
            <h2 className="flex-1 text-xl font-bold">{project?.name}</h2>

            <p className="text-sm">{project?.date}</p>
          </div>

          <div className="flex flex-col justify-between gap-12 lg:flex-row">
            <div className="flex-1 space-y-6">
              <div className="h-[230px] w-full rounded-2xl bg-gray-300 lg:h-[400px]">
                <img
                  src={project?.thumbnailPictureUrl}
                  alt={project?.name}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>

              <p className="text-body-dark">{project?.description}</p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold">Stacks</h3>

                <div className="flex flex-wrap gap-2">
                  {project?.stacks.map((stack, i) => (
                    <div
                      key={i}
                      className="flex w-fit items-center gap-2 rounded-full border border-card-border bg-card-white p-2 pr-3"
                    >
                      <div
                        className={cn(
                          'h-4 w-4 rounded-full',
                          stack.type === 0 && 'bg-accent-1',
                          stack.type === 1 && 'bg-accent-3',
                          stack.type === 2 && 'bg-accent-2',
                        )}
                      />
                      <p className="text-sm leading-none text-body-dark">{stack.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-lg font-semibold">Key Takeaways</h3>

              {project?.highligts.map((highlight, i) => {
                const isActive = activeIndex === i;

                return (
                  <AnimateChangeInHeight>
                    <div
                      key={i}
                      className="cursor-pointer rounded-xl border border-card-border bg-card-white p-4 text-body-dark"
                      onClick={() => {
                        if (activeIndex === i) {
                          setActiveIndex(-1);
                          return;
                        }
                        setActiveIndex(i);
                      }}
                    >
                      <div className="flex items-center">
                        <h2 className="flex-1 font-medium uppercase text-primary-dark">{highlight.title}</h2>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-card-border leading-none">
                          <i
                            className={cn(
                              'fi flex h-4 w-4 items-center justify-center text-xl leading-none',
                              isActive ? 'fi-rr-minus-small' : 'fi-rr-plus-small',
                            )}
                          />
                        </div>
                      </div>

                      <div className={cn('space-y-4 overflow-hidden', isActive ? 'mt-2 h-auto' : 'h-0')}>
                        {highlight.items.map((item, j) => (
                          <Fragment key={j}>
                            <p className="text-sm leading-relaxed">{item}</p>
                            {j !== highlight.items.length - 1 && <hr className="my-4" />}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </AnimateChangeInHeight>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

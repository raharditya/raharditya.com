import { useState, useRef, useEffect } from 'react';
import Container from '~/components/Container';
import ProjectDetailsModal from '~/components/project-details/ProjectDetailsModal';
import { cn } from '~/lib/helper';

export type Project = {
  slug: string;
  title: string;
  pictureUrl: string;
};

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  icon: string;
};

const Button = ({ className, icon, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'absolute top-[50%] z-10 hidden h-12 w-12 -translate-y-[50%] items-center justify-center rounded-full border-2 border-primary-dark bg-accent-1 text-primary-dark transition-all duration-200 hover:brightness-90 disabled:cursor-not-allowed disabled:brightness-50 lg:flex',
        className,
      )}
      {...props}
    >
      <i className={cn('fi flex text-2xl leading-none', icon)} />
    </button>
  );
};

const MAX_PER_PAGE = 3;

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  const totalPages = Math.ceil(projects.length / MAX_PER_PAGE);
  const listRef = useRef<HTMLDivElement>(null);

  const [dirty, setDirty] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!dirty) return;
    const s = `[data-i="${(page - 1) * MAX_PER_PAGE}"]`;
    listRef.current?.querySelector(s)?.scrollIntoView({ inline: 'start', block: 'nearest' });
  }, [page]);

  return (
    <>
      <Container className="px-0">
        <div className="space-y-6 py-16">
          <h2 className="text-2xl font-bold text-accent-3 lg:text-3xl">Projects</h2>

          <div className="relative lg:mx-6" style={{ '--max-per-page': MAX_PER_PAGE } as React.CSSProperties}>
            <Button
              className="left-6 z-[5] xl:-left-6"
              icon="fi-sr-angle-small-left"
              disabled={page === 1}
              onClick={() => {
                if (!dirty) setDirty(true);
                setPage((prev) => prev - 1);
              }}
            />
            <div
              className="no-scrollbar mt-12 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-smooth lg:gap-6 lg:overflow-hidden"
              ref={listRef}
            >
              <div className="snap-start scroll-mx-4 lg:hidden" />
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="flex h-[370px] w-[300px] flex-shrink-0 cursor-pointer snap-start scroll-mx-4 flex-col items-start overflow-hidden rounded-3xl bg-slate-400 lg:w-[calc(100%/var(--max-per-page)-theme(spacing.4))] lg:scroll-m-0"
                  data-i={i}
                  onClick={() => {
                    setSlug(project.slug);
                    setIsModalOpen(true);
                    window.history.replaceState(null, project.title, `/${project.slug}`);
                  }}
                >
                  <img src={project.pictureUrl} className="h-full w-full object-cover" />
                </div>
              ))}
              <div className="snap-start scroll-mx-4 lg:hidden" />
            </div>
            <Button
              className="right-6 z-[5] xl:-right-6"
              icon="fi-sr-angle-small-right"
              disabled={page === totalPages}
              onClick={() => {
                if (!dirty) setDirty(true);
                setPage((prev) => prev + 1);
              }}
            />
          </div>
        </div>
      </Container>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          window.history.replaceState(null, 'Raharditya', '/');
        }}
        slug={slug}
      />
    </>
  );
};

export default Projects;

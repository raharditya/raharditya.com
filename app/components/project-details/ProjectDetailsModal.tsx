import Modal from 'app/components/Modal';
import Menu from '../Menu';
import { cn } from '~/lib/helper';
import { Fragment, useState } from 'react';
import AnimateChangeInHeight from '../AnimateChangeInHeight';
import projects from '~/data/projects';
import { useProjectStore } from '~/lib/stores/useProjectStore';

type ProjectDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProjectDetailsModal = ({ isOpen, onClose }: ProjectDetailsModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { slug } = useProjectStore();

  const project = projects.find((project) => project.slug === slug);

  const closeModal = () => {
    onClose();
    setActiveIndex(0);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="h-[90vh] w-[90vw] lg:h-[90vh] lg:w-[90%] lg:max-w-[1350px] lg:rounded-2xl"
    >
      <button
        className="absolute right-6 top-6 h-8 w-8 rounded-lg bg-primary-light text-primary-dark shadow-lg transition hover:brightness-90 lg:-top-10 lg:right-4 lg:bg-transparent lg:text-primary-light lg:shadow-none"
        onClick={closeModal}
      >
        <i className="fi fi-rr-cross-small flex h-8 w-8 items-center justify-center text-2xl" />
      </button>

      <div className="max-h-[90vh] overflow-y-scroll p-6 lg:max-h-[90vh]">
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
    </Modal>
  );
};

export default ProjectDetailsModal;

import { cn } from '~/lib/helper';

export type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn('mx-auto max-w-[1240px] px-4 lg:px-0', className)}>{children}</div>;
};

export default Container;

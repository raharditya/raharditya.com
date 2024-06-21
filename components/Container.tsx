export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1350px] px-4 lg:px-0 mx-auto">{children}</div>;
};

export default Container;

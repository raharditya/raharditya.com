import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  // TODO: Update meta
  return [{ title: 'Raharditya' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <>
      <h1 className="font-bold text-3xl">I'm a Full-stack Web Developer</h1>
    </>
  );
}

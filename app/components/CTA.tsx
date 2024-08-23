import { cn } from '~/lib/helper';

type CTAProps = {
  className?: string;
};

const CTA = ({ className }: CTAProps) => {
  return (
    <div className="">
      <button
        className={cn(
          'flex items-center space-x-8 rounded-full border-2 border-primary-dark px-4 py-2 text-center font-medium text-primary-dark transition',
          className,
        )}
      >
        <p>Let's Work Together!</p>

        <i className="fi fi-rr-arrow-right flex h-4 w-4 items-center justify-center text-lg" />
      </button>
    </div>
  );
};

export default CTA;

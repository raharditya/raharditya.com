import { cn } from '~/lib/helper';

type CTAProps = {
  className?: string;
};

const CTA = ({ className }: CTAProps) => {
  return (
    <div className="space-y-4">
      <a
        className={cn(
          'flex w-fit items-center space-x-8 rounded-full border-2 border-primary-dark px-4 py-2 text-center font-medium text-primary-dark transition',
          className,
        )}
        href="mailto:contact@raharditya.com"
      >
        <p>Let's Work Together!</p>

        <i className="fi fi-rr-arrow-right flex h-4 w-4 items-center justify-center text-lg" />
      </a>

      <a
        className="group flex w-fit items-center space-x-4 px-4 font-medium text-primary-dark transition"
        href="https://drive.google.com/file/d/1A8IbR0ZmBQdtpZ8OhWZeJ4EjXmXU8JPw/view?usp=sharing"
        target="_blank"
      >
        <p className="group-hover:underline">Download My CV</p>

        <i className="fi fi-rr-arrow-right flex h-4 w-4 items-center justify-center text-lg" />
      </a>
    </div>
  );
};

export default CTA;

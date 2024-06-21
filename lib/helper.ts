import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};

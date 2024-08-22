import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';
import useWindowDimensions from './hooks/useWindowDimensions';

export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};

export const getCurrentBreakpoint = () => {
  const { width } = useWindowDimensions();

  const fullConfig = resolveConfig(tailwindConfig);
  const breakpoints = fullConfig.theme.screens as Record<string, string>;
  const currentBreakpoint = Object.keys(breakpoints).find((breakpoint) => width < parseInt(breakpoints[breakpoint]));

  return currentBreakpoint || null;
};

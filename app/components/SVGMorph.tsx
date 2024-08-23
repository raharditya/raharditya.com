import { useEffect, useRef, useState } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import interpolate from 'app/lib/flubber/interpolate';

type SVGMorphProps = {
  paths: string[];
};

const SVGMorprh = ({ paths }: SVGMorphProps) => {
  const [currentPath, setCurrentPath] = useState(0);
  const progress = useMotionValue(currentPath);

  const arrayOfIndex = paths.map((_, i) => i);

  const path = useTransform(progress, arrayOfIndex, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 30 }),
  });

  useEffect(() => {
    const animation = animate(progress, currentPath, {
      duration: 10,

      ease: 'easeInOut',

      //   delay: 1,

      onComplete: () => {
        if (currentPath === paths.length - 1) {
          progress.set(0);

          setCurrentPath(1);
        } else {
          setCurrentPath(currentPath + 1);
        }
      },
    });

    return () => {
      animation.stop();
    };
  }, [currentPath]);

  return <motion.path fill="#F4A261" d={path} />;
};

export default SVGMorprh;

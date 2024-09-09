import { useEffect, useRef } from 'react';

type VideoProps = {
  src: string;
  progress?: number;
  isScrollControlled?: boolean;
  isLooped?: boolean;
  className?: string;
};

const Video = ({ src, progress, isScrollControlled, isLooped }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isScrollControlled || !progress) return;

    if (ref.current?.duration) {
      ref.current.currentTime = ref.current.duration * progress;
    }
  }, [progress, isScrollControlled]);

  useEffect(() => {
    if (!isScrollControlled) return;
    ref.current?.pause();
  }, [isScrollControlled]);

  return (
    <div className="h-full w-full">
      <video
        src={src}
        className="h-full w-full object-cover"
        playsInline
        autoPlay
        muted
        loop={isLooped || false}
        ref={ref}
      />
    </div>
  );
};

export default Video;

import { useEffect, useRef } from 'react';

type VideoProps = {
  src: string;
  progress: number;
  className?: string;
};

const Video = ({ src, progress }: VideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current?.duration) {
      ref.current.currentTime = ref.current.duration * progress;
    }
  }, [progress]);

  useEffect(() => {
    ref.current?.pause();
  }, []);

  return (
    <div className="h-full w-full">
      <video src={src} className="h-full w-full object-cover" playsInline autoPlay muted ref={ref} />
    </div>
  );
};

export default Video;

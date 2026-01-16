import React, { useRef, useState, useEffect } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

/**
 * LazyVideo component that only loads video content when it enters the viewport.
 * Uses IntersectionObserver for efficient visibility detection.
 */
const LazyVideo: React.FC<LazyVideoProps> = ({ src, poster, className, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to observe anymore
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading slightly before visible
        threshold: 0,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  // When video becomes visible, set the src
  useEffect(() => {
    if (isVisible && videoRef.current && !hasLoaded) {
      videoRef.current.src = src;
      setHasLoaded(true);
    }
  }, [isVisible, src, hasLoaded]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      preload="none"
      className={className}
      {...props}
    />
  );
};

export default LazyVideo;

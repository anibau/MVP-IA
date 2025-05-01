
import { useEffect, useRef, useState } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AnimatedImage = ({ src, alt, className = "" }: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg">
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary animate-pulse-subtle"></div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-auto transition-all duration-700 ${
          isInView ? "scale-100 opacity-100" : "scale-105 opacity-0"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default AnimatedImage;

import { useState, useEffect } from 'react';

export const useImageLoader = (src, fallbackSrc = null) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };

    img.onerror = () => {
      if (fallbackSrc) {
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          setImageSrc(fallbackSrc);
          setIsLoading(false);
          setHasError(false);
        };
        fallbackImg.onerror = () => {
          setImageSrc(null);
          setIsLoading(false);
          setHasError(true);
        };
        fallbackImg.src = fallbackSrc;
      } else {
        setImageSrc(null);
        setIsLoading(false);
        setHasError(true);
      }
    };

    img.src = src;
  }, [src, fallbackSrc]);

  return { imageSrc, isLoading, hasError };
};

export const ImageWithFallback = ({ 
  src, 
  fallbackSrc = null, 
  alt = "Image", 
  className = "", 
  children,
  ...props 
}) => {
  const { imageSrc, isLoading, hasError } = useImageLoader(src, fallbackSrc);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}>
        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (hasError || !imageSrc) {
    if (children) {
      return <div className={className}>{children}</div>;
    }
    return (
      <div className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`}>
        <span className="text-gray-500 dark:text-gray-400 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      className={className}
      {...props} 
    />
  );
};
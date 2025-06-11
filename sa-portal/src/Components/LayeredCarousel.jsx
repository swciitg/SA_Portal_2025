import React, { useState, useEffect } from "react";

const LayeredCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
  ];
  const SWITCH_INTERVAL = 3000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, SWITCH_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const frontImage = currentIndex;
    const middleImage = (currentIndex + 1) % images.length;
    const backImage = (currentIndex + 2) % images.length;

    return {
      front: images[frontImage],
      middle: images[middleImage],
      back: images[backImage],
    };
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="mx-10">
      <div className="h-[350px] w-[383px] flex items-center overflow-hidden relative">
        <img
          src={visibleImages.back}
          alt=""
          className={`w-[280px] h-2/3 absolute left-32 transition-opacity duration-[2000ms] ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />

        <img
          src={visibleImages.middle}
          alt=""
          className={`w-[280px] h-5/6 absolute z-5 left-16 transition-opacity duration-[2500ms] ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />

        <img
          src={visibleImages.front}
          alt=""
          className={`w-[280px] h-full z-10 absolute left-0 transition-opacity duration-[3000ms] ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default LayeredCarousel;

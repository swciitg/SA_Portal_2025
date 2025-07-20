import React, { useState, useEffect } from "react";
import sendApiRequest from "../services/apiService";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

const LayeredCarousel = ({ fetchUrl }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const SWITCH_INTERVAL = 3000;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await sendApiRequest(fetchUrl);

        const media = res?.data?.images || [];

        const urls = media.map((img) => getStrapiMediaUrl(img?.url));

        console.log("Fetched URLs:", urls);

        setImages(urls);
      } catch (err) {
        console.error("Error loading layered carousel images:", err);
      }
    };

    if (fetchUrl) fetchImages();
  }, [fetchUrl]);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, SWITCH_INTERVAL);

    return () => clearInterval(interval);
  }, [images]);

  const getVisibleImages = () => {
    if (images.length < 3) return { front: "", middle: "", back: "" };
    const front = currentIndex;
    const middle = (currentIndex + 1) % images.length;
    const back = (currentIndex + 2) % images.length;
    return {
      front: images[front],
      middle: images[middle],
      back: images[back],
    };
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="size-full shrink-0 flex items-center overflow-hidden relative">
      {/* Debug URLs if needed */}
      {/* <div className="absolute top-0 left-0 text-white text-xs bg-black bg-opacity-50 p-2 z-50">
        {images.map((url, i) => (
          <div key={i}>{url}</div>
        ))}
      </div> */}

      {visibleImages.back && (
        <img
          src={visibleImages.back}
          alt=""
          className={`w-3/4 h-2/3 absolute right-0 transition-opacity duration-[2000ms] ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      {visibleImages.middle && (
        <img
          src={visibleImages.middle}
          alt=""
          className={`w-3/4 h-5/6 absolute z-5 right-[12.5%] transition-opacity duration-[2500ms] ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      {visibleImages.front && (
        <img
          src={visibleImages.front}
          alt=""
          className={`w-3/4 h-full z-10 absolute left-0 transition-opacity duration-[3000ms] ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
};

export default LayeredCarousel;

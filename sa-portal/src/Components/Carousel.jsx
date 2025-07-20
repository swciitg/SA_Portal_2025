import React, { useState, useEffect } from "react";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await sendApiRequest(ROUTES.HOMEPAGE_CAROUSAL_IMG);
        const mediaArray = res?.data?.images|| [];
        const imageUrls = mediaArray.map((img) =>
          getStrapiMediaUrl(img?.url)
        );
        console.log(imageUrls)
        setImages(imageUrls);
      } catch (error) {
        console.error("Failed to fetch homepage carousel images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full" style={{ height: "calc(60vh - 0px)" }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

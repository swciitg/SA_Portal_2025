import React, { useState, useEffect } from "react";

const images = ["/vis.png", "/agriculture-bg.jpg", "/vis.png"]; // Replace with your image paths

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full" style={{ height: "calc(60vh - 0px)" }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={ process.env.REACT_APP_BASE_URL+img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
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

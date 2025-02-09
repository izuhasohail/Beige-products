import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const BrandCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const brands = [
    { id: 1, name: 'Amazon', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/6485c4480719867ec6ca75d1_107e13f1-c6b6-4ad1-a265-1bca830218b1.png" },
    // { id: 2, name: 'Chase', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/66707a8babcc412692c138b2_chase-logo-black-transparent-p-800.png" },
    // { id: 3, name: 'Rolls Royce', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/666a056de7886f503ad6e3e5_rolls-royce-logo-24811DB90B-seeklogo.com.png" },
    { id: 2, name: 'DHL', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/66707d3420efce975fa956b7_DHL_logo_rgb_BG.png" },
    { id: 3, name: 'Harvard', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/64b1bccacb1acb69f6c3f372_Harvard_University_logo.svg" },
    { id: 4, name: 'Abu Dhabi Tourism', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/642d6b18fb2448632128a3a3_Group%2072-p-500.png" },
    { id: 5, name: 'South African Tourism', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/642d6b184eda5e940b0a4bb8_Group%2075-p-500.png" },
    { id: 6, name: 'Brand 8', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/642d6b199450cfc990ee9493_Group%2082-p-500.png" },
    { id: 7, name: 'Brand 9', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/642d6b191ce6a2a20018954f_Group%2081-p-500.png" },
    { id: 8, name: 'Brand 10', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/642d6b18fb2448a67728a3a5_Group%2079-p-500.png" },
    { id: 9, name: 'Brand 11', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/6485c448e8b0f28bdc9e70c8_19fcd3e8-fdec-4028-8aa3-8f5a6957cf78-p-500.png" },
    { id: 10, name: 'Brand 12', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/642d6b189c7f165b40170aeb_Group%2076-p-500.png" },
    { id: 11, name: 'Brand 13', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/642d6b18ddda441d43d8d35e_Group%2073-p-500.png" },
    { id: 12, name: 'Brand 14', logo: "https://cdn.prod.website-files.com/642809a5c22576231faf8672/642d6b191132f4433128a820_Group%2084-p-500.png" },
  ];

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 3;
      return 5;
    }
    return 5;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(brands.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const visibleBrands = brands.slice(
    currentSlide * itemsPerSlide,
    (currentSlide * itemsPerSlide) + itemsPerSlide
  );

  return (
    <div className="w-full pb-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 bg-black mt-24">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          TRUSTED BY THE WORLD'S TOP BRANDS
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex items-center justify-center">
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden px-4 sm:px-8 md:px-12">
            <div className="flex gap-4 justify-center items-center transition-transform duration-500 ease-in-out">
              {visibleBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 p-2 sm:p-4"
                >
                  <div className="w-full h-full relative group bg-transparent rounded-lg">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-2">
                      <span className="text-white text-sm font-medium bg-black bg-opacity-70 px-2 py-1 rounded">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
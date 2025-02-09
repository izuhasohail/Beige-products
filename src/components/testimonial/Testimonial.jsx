import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Mubarak AlShamsi",
    role: "Director of Abu Dhabi Convention & Exhibition Bureau",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Beige was exceptional to work with. They are very professional and we are happy with the results they provided with their videography and photography work.",
    videoId: "dQw4w9WgXcQ"
  },
  {
    name: "Ahmed Hassan",
    role: "CEO, Future Technologies",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    content: "The team demonstrated exceptional expertise in capturing our corporate events. Their attention to detail was remarkable.",
    videoId: "jNQXAC9IVRw"
  },
  {
    name: "Sarah Al Mahmoud",
    role: "Events Director, Global Conferences",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    content: "Outstanding video production that captured the essence of our international exhibition perfectly.",
    videoId: "C0DPdy98e4c"
  },
  {
    name: "Fatima Al Zaabi",
    role: "Marketing Head, Innovation Hub",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    content: "Their creative approach and technical expertise made our event coverage stand out from the rest.",
    videoId: "M7lc1UVf-VE"
  },
  {
    name: "Mohammed Al Qasimi",
    role: "Director, Dubai Media City",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    content: "Exceptional quality in both photography and videography. They truly understand the corporate event space.",
    videoId: "9bZkp7q19f0"
  }
];

const TestimonialsWithVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoKey, setVideoKey] = useState(0); // Key for forcing video reload

  const next = () => {
    setVideoKey(prev => prev + 1); // Force video reload
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setVideoKey(prev => prev + 1); // Force video reload
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-red-950/10 to-black p-4 md:p-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 hover:bg-gradient-to-r hover:from-black hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
            What our clients say
          </h2>
          <p className="text-gray-400 text-base md:text-lg px-4">
            Listen to what our happy clients have to say about the video production services provided by BEIGE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Testimonials Section */}
          <div className="relative order-2 lg:order-1">
            <Card className="bg-black/40 backdrop-blur-sm border-red-900/20 hover:border-red-700/30 transition-all duration-300 h-[400px] md:h-[400px]">
              <CardContent className="p-4 md:p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-red-500/30 shadow-lg shadow-red-500/10">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-red-400 font-semibold text-lg md:text-xl">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4 mt-4 md:mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-red-500/30 hover:bg-red-950/30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-red-400" />
              </Button>

              <div className="flex-1 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setVideoKey(prev => prev + 1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 p-0 rounded-full transition-colors ${
                      currentIndex === index 
                        ? 'bg-red-500' 
                        : 'bg-red-950 hover:bg-red-900'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-red-500/30 hover:bg-red-950/30 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-red-400" />
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative h-full order-1 lg:order-2">
            <Card className="bg-black/40 backdrop-blur-sm border-red-900/20 hover:border-red-700/30 transition-all duration-300 h-[400px] md:h-[450px]">
              <CardContent className="p-4 h-full">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    key={videoKey} // Force reload on navigation
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${testimonials[currentIndex].videoId}?autoplay=0`}
                    title={`${testimonials[currentIndex].name}'s Testimonial Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default TestimonialsWithVideo;
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const VideoCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const intervalRef = useRef(null);

  const videos = [
    { id: 1, title: "Bala", thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=450&fit=crop", url: "https://player.vimeo.com/video/808734429" },
    { id: 2, title: "Suri Products", thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=450&fit=crop", url: "https://player.vimeo.com/video/991377492" },
    { id: 3, title: "Fleetwell Company", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop", url: "https://player.vimeo.com/video/980387103" },
    { id: 4, title: "Alive Print", thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=450&fit=crop", url: "https://player.vimeo.com/video/952502997" },
    { id: 5, title: "Walmart", thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=450&fit=crop", url: "https://player.vimeo.com/video/990745402" },
    { id: 6, title: "Nickelytics", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop", url: "https://player.vimeo.com/video/1009545364" },
  ];

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(videos.length / itemsPerSlide);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleManualNavigation = (callback) => {
    clearInterval(intervalRef.current);
    callback();
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <div className="w-full bg-black py-32">
      <div className="max-w-[90vw] mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 hover:bg-gradient-to-r hover:from-black hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
            Premier Corporate Event Production
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Capturing moments that matter in stunning clarity and precision
          </p>
        </div>

        <div className="relative mx-auto">
          <Button variant="ghost" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10" onClick={() => handleManualNavigation(prevSlide)}>
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          <Button variant="ghost" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10" onClick={() => handleManualNavigation(nextSlide)}>
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex gap-4 sm:gap-6">
                  {videos.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((video) => (
                    <div key={video.id} className={`w-1/${itemsPerSlide}`}>
                      <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:scale-105 transition-all duration-300" onClick={() => setSelectedVideo(video)}>
                        <CardContent className="p-0 relative group">
                          <div className="relative aspect-video">
                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button key={index} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === activeIndex ? "bg-white w-4 sm:w-6" : "bg-zinc-700 hover:bg-zinc-600"}`} onClick={() => handleManualNavigation(() => setActiveIndex(index))} />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-full sm:max-w-5xl bg-black border-zinc-800 mx-4 sm:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-white text-lg sm:text-2xl">{selectedVideo?.title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 absolute top-4 right-4 bg-black border border-white rounded-full"
              onClick={() => {
                setSelectedVideo(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </DialogHeader>
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            {selectedVideo && <iframe src={`${selectedVideo.url}?autoplay=1`} className="absolute inset-0 w-full h-full" allow="autoplay; fullscreen" allowFullScreen />}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoCarousel;
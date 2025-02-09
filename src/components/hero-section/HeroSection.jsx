// Hero Section Component
import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden w-full h-full bg-black">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <iframe
          src="https://player.vimeo.com/video/1006823618?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
          title="New Vimeo Video"
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Corporate Event
              <br />
              Video Production
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              On Demand Corporate Event Video Production by Beige Video
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Beige Video is your go-to for professional, high-quality, and
              visually stunning corporate event videos anywhere at anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-black to-red-500 text-white hover:from-gray-800 hover:to-red-600 px-8 py-6 text-lg">
                TEXT US NOW
              </Button>
              <Button className="bg-gradient-to-r from-black to-red-500 text-white hover:from-gray-800 hover:to-red-600 px-8 py-6 text-lg">
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

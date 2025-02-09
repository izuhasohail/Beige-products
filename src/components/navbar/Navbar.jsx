import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const NavItems = [
  "Home",
  "About",
  "Photos",
  "Videos",
  "Beige News"
];

const NavButton = ({ item }) => (
  <Button
    variant="ghost"
    className="text-white hover:bg-gradient-to-r hover:from-black hover:to-red-500 hover:text-white w-full justify-start"
  >
    {item}
  </Button>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold tracking-wider">
              BEIGE
            </span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex space-x-8">
              {NavItems.map((item) => (
                <NavigationMenuItem key={item}>
                  <NavButton item={item} />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-black/90 backdrop-blur-sm border-gray-800"
              >
                <div className="absolute right-4 top-4 rounded-sm hover:opacity-70 transition-opacity">
                  <SheetClose className="outline-none focus:outline-none">
                    {/* <X className="h-6 w-6 text-white" /> */}
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-4 mt-12">
                  {NavItems.map((item) => (
                    <NavButton key={item} item={item} />
                  ))}
                  <Button className="bg-red-500 hover:bg-red-600 text-white mt-4">
                    Book Now
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Book Now Button (Desktop) */}
          <Button className="hidden md:inline-flex bg-red-500 hover:bg-red-600 text-white">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
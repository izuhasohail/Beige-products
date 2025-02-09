import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const EventContactForm = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8 py-32 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative h-[300px] lg:h-[600px] rounded-xl overflow-hidden">
            <img 
              src="https://cdn.prod.website-files.com/642809a5c22576231faf8672/6442a7c75cb2a45ddc618877_Theo%20King%2074-p-800.jpg"
              alt="Professional videographer with camera equipment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>

          {/* Form Section */}
          <div className="relative">
            <Card className="bg-black/40 backdrop-blur-sm border-2 border-red-500/30 shadow-lg shadow-red-500/10 hover:border-red-500 transition-colors duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                      Bring Your Event to Life
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base mb-6">
                      Experience expert storytelling and seamless production.
                      Join the leading brands that trust Beige Video for unforgettable corporate event photography.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-gray-200">Full name*</Label>
                      <Input 
                        id="fullName"
                        className="bg-black/50 border-gray-800 focus:border-gray-700 text-gray-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-200">Email*</Label>
                      <Input 
                        id="email"
                        type="email"
                        className="bg-black/50 border-gray-800 focus:border-gray-700 text-gray-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-200">Phone number*</Label>
                      <Input 
                        id="phone"
                        className="bg-black/50 border-gray-800 focus:border-gray-700 text-gray-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="text-gray-200">Day of Event*</Label>
                      <Input 
                        id="eventDate"
                        type="date"
                        className="bg-black/50 border-gray-800 focus:border-gray-700 text-gray-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-gray-200">Event location*</Label>
                    <Input 
                      id="location"
                      className="bg-black/50 border-gray-800 focus:border-gray-700 text-gray-200"
                      placeholder="Enter event location"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-200">Company name</Label>
                    <Input 
                      id="company"
                      className="bg-black/50 border-gray-800 focus:border-gray-700 text-gray-200"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project" className="text-gray-200">Tell us more about your project</Label>
                    <Textarea 
                      id="project"
                      className="bg-black/50 border-gray-800 focus:border-gray-700 text-gray-200 min-h-[100px] resize-none"
                      placeholder="Describe your project requirements"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="source" className="text-gray-200">How did you find us?</Label>
                    <Select>
                      <SelectTrigger className="bg-black/50 border-red-500/30 focus:border-red-500/20 text-gray-200">
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-red-500/30">
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="subscribe" className="mt-1 data-[state=checked]:bg-gray-200 data-[state=checked]:text-black" />
                    <Label htmlFor="subscribe" className="text-sm text-gray-400 leading-relaxed">
                      I agree to receive other communications from Beige. You may unsubscribe from these communications at any time.
                    </Label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-black to-red-500 text-white hover:from-gray-800 hover:to-red-600 transition-colors duration-300">
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventContactForm;
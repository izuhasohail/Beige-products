import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What type of video and photography services do you offer?",
      answer: "We offer a wide range of services, including corporate videos, event coverage, branding videos, product shoots, real estate videos, training videos, social media content, and more. Our network of professional videographers and photographers across the U.S. ensures that we can meet your needs anytime, anywhere."
    },
    {
      question: "How quickly can I book a videographer or photographer?",
      answer: "We offer fast and efficient booking services to meet your timeline requirements."
    },
    {
      question: "Can we handle both shooting and editing?",
      answer: "Yes, we provide comprehensive services including both shooting and editing."
    },
    {
      question: "What industries do we primarily work with?",
      answer: "We work with a diverse range of industries, tailoring our services to meet specific needs."
    },
    {
      question: "How do I get a quote or book a service?",
      answer: "Contact us through our website or give us a call for a custom quote."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-white mt-24">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6 hover:bg-gradient-to-r hover:from-black hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-red-800/20 rounded-lg bg-grey backdrop-blur-sm hover:border-red-800/40 transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-red-600 hover:text-red-400 transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-500">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Banner Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/642809a5c22576231faf8672/679f3c27fe6237186b820983_videography.jpeg')`,
            backgroundPosition: '50% 50%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent">
            <div className="max-w-4xl mx-auto h-full flex flex-col justify-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                GET $250 OFF YOUR FIRST SHOOT
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full transition-colors"
                >
                  TEXT US NOW
                </Button>
                <Button 
                  variant="outline" 
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-6 text-lg rounded-full transition-colors"
                >
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
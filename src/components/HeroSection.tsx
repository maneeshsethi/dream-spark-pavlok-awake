
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Moon, Star } from 'lucide-react';
import { toast } from 'sonner';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your backend
      toast.success("Thanks for signing up! Check your email for exclusive lucid dreaming tips and a special discount.");
      setEmail('');
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-pavlok-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-pavlok-dark/90 via-pavlok-dark/80 to-pavlok-dark/100"></div>
      
      {/* Animated stars */}
      <div className="absolute top-1/4 right-1/4 animate-pulse-soft">
        <Star className="h-6 w-6 text-white opacity-40" />
      </div>
      <div className="absolute top-1/3 left-1/3 animate-pulse-soft" style={{ animationDelay: '1s' }}>
        <Star className="h-4 w-4 text-white opacity-30" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-pulse-soft" style={{ animationDelay: '2s' }}>
        <Star className="h-5 w-5 text-white opacity-50" />
      </div>
      
      {/* Floating moon icon */}
      <div className="absolute top-10 right-1/5 md:top-20 md:right-[20%] animate-float">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-pavlok-purple opacity-20 blur-xl"></div>
          <Moon className="h-12 w-12 md:h-16 md:w-16 text-white relative z-10" />
        </div>
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold text-white">
            Unlock the Power of <span className="text-gradient">Lucid Dreaming</span> with Pavlok
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-gray-200">
            Experience your dreams like never before with our unique wearable technology.
            Take control of your dream world tonight.
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit"
                className="bg-pavlok-purple hover:bg-pavlok-blue transition-all duration-300 whitespace-nowrap"
              >
                Get Lucid Dreams Guide
              </Button>
            </form>
            <p className="text-gray-400 text-sm mt-3">
              Sign up to receive exclusive lucid dreaming tips and a special discount on your Pavlok device.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <a href="#about" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

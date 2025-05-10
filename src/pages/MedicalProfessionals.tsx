
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Clock, Bell, Smartphone, Shield, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const MedicalProfessionals = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for your interest! We'll be in touch with more information about Shock Clock Max.");
      setEmail('');
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  const testimonials = [
    {
      quote: "I've never missed a 5am shift since I started using Shock Clock. As an ER nurse, being late isn't an option.",
      author: "Sarah J., ER Nurse, Chicago"
    },
    {
      quote: "Zap on Call saved me from missing an emergency surgery last week. My team and patient couldn't afford any delays.",
      author: "Dr. Michael K., Surgeon, NYC"
    },
    {
      quote: "Working night shifts means I'm usually sleeping when everyone else is awake. Shock Clock wakes me without disturbing my family.",
      author: "James T., EMT, Boston"
    },
  ];

  const painPoints = [
    {
      icon: <AlertCircle className="h-8 w-8 text-pavlok-purple" />,
      title: "Missed Critical Calls",
      description: "Never miss an emergency page or call again, even when your phone is on silent."
    },
    {
      icon: <Clock className="h-8 w-8 text-pavlok-blue" />,
      title: "Alarm Fatigue",
      description: "Stop building immunity to regular alarms that you unconsciously snooze or turn off."
    },
    {
      icon: <Bell className="h-8 w-8 text-pavlok-purple" />,
      title: "Disturbing Others",
      description: "Wake up without loud alarms that disturb sleeping family members or roommates."
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-pavlok-purple" />,
      title: "Multi-sensory Alarm",
      description: "Escalating wake-up system with vibration, beep, and zap options to ensure you wake up."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-pavlok-blue" />,
      title: "Zap on Call",
      description: "Set Shock Clock to vibrate and zap you awake if a specific number or hospital calls."
    },
    {
      icon: <Shield className="h-8 w-8 text-pavlok-purple" />,
      title: "Snooze-lock",
      description: "No more turning off your alarm in your sleep. Require specific actions to disable."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get the free Pavlok app on iOS or Android and connect your Shock Clock Max device."
    },
    {
      number: "02",
      title: "Set Alarms & Contacts",
      description: "Set regular wake-up times or input emergency contacts for Zap on Call feature."
    },
    {
      number: "03",
      title: "Choose Wake-up Methods",
      description: "Customize your wake-up with vibration, beep, or zap in varying intensities."
    },
    {
      number: "04",
      title: "Sleep Worry-Free",
      description: "Wear your Shock Clock Max to bed knowing you'll never miss an important call again."
    },
  ];

  const faqItems = [
    {
      question: "Can it wake me up without disturbing my partner?",
      answer: "Yes, Shock Clock Max uses silent vibration and small zaps that only you can feel, making it perfect for couples with different schedules."
    },
    {
      question: "How does Zap on Call work?",
      answer: "Simply designate important phone numbers in the app. When those numbers call, your Shock Clock will vibrate and/or zap you awake, even if your phone is on silent."
    },
    {
      question: "Can I set multiple alarms?",
      answer: "Absolutely. You can set as many alarms as you need for different shifts and customize the intensity for each one."
    },
    {
      question: "Is it safe to zap myself awake?",
      answer: "Yes, Shock Clock's zap is safe and adjustable. It creates a mild electrical stimulus designed to alert you without causing harm or discomfort beyond a brief sensation."
    },
    {
      question: "What phones is the app compatible with?",
      answer: "The Pavlok app works with both iOS (iPhone) and Android devices running recent operating system versions."
    },
  ];

  return (
    <div className="min-h-screen bg-pavlok-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-pavlok-dark overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pavlok-dark/90 via-pavlok-dark/80 to-pavlok-dark/100"></div>
        
        {/* Content */}
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <h1 className="mb-6 text-4xl md:text-6xl font-extrabold text-white">
                Wake Up On Time. <span className="text-gradient">Every Time.</span> Even On Call.
              </h1>
              <p className="mb-8 text-xl md:text-2xl text-gray-200">
                Designed for doctors, nurses, and first responders — Shock Clock Max uses vibration, sound, and a zap to make sure you never sleep through a shift or an emergency call.
              </p>
              
              <div className="max-w-md">
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
                    Get Shock Clock Info
                  </Button>
                </form>
                <p className="text-gray-400 text-sm mt-3">
                  Join thousands of medical professionals who trust Shock Clock Max to wake them up—no matter what.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-r from-pavlok-purple/30 to-pavlok-blue/30 rounded-full blur-3xl"></div>
                <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                  <div className="bg-black rounded-xl overflow-hidden h-80 w-60 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-pavlok-purple to-pavlok-blue rounded-full flex items-center justify-center">
                        <Zap className="h-12 w-12 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">Shock Clock Max</h4>
                      <p className="text-gray-400 text-sm">Medical Professional Edition</p>
                      <div className="mt-4 py-2 px-4 bg-pavlok-purple/20 rounded-lg text-pavlok-purple text-xs">
                        Zap on Call Technology
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device And App Section - Similar to original page */}
      <section id="device-and-app" className="bg-gradient-to-b from-pavlok-dark to-pavlok-dark/90 text-white py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The <span className="text-gradient">Shock Clock Max</span> Experience</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge wearable technology and companion app work together to ensure medical professionals 
              never miss a critical call or shift again.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Device Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Shock Clock Device</h3>
              <div className="relative">
                {/* Glow effect behind device */}
                <div className="absolute -inset-10 bg-gradient-to-r from-pavlok-purple/20 to-pavlok-blue/20 rounded-full blur-3xl"></div>
                
                {/* Device image */}
                <div className="relative flex justify-center">
                  <img 
                    src="/lovable-uploads/a0c9db2a-b7c8-4969-b618-27d99ebb22f5.png" 
                    alt="Shock Clock Device" 
                    className="max-w-[300px] relative z-10 transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="dream-card border-none">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-pavlok-purple/20 w-10 h-10 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-pavlok-purple" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Zap Wake-up</h4>
                        <p className="text-sm text-gray-300">Guaranteed to wake you up</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="dream-card border-none">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-pavlok-blue/20 w-10 h-10 flex items-center justify-center">
                        <Bell className="h-5 w-5 text-pavlok-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Silent Alerts</h4>
                        <p className="text-sm text-gray-300">Won't disturb others</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* App Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Companion App</h3>
              <div className="relative">
                {/* Glow effect behind app */}
                <div className="absolute -inset-10 bg-gradient-to-r from-pavlok-blue/20 to-pavlok-purple/20 rounded-full blur-3xl"></div>
                
                {/* App image */}
                <div className="relative flex justify-center">
                  <img 
                    src="/lovable-uploads/1e1feb58-10ce-4aff-97cd-f8f8c9994dc6.png" 
                    alt="Shock Clock Companion App" 
                    className="max-w-[250px] relative z-10 transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="dream-card border-none">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-pavlok-purple/20 w-10 h-10 flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-pavlok-purple" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Zap on Call</h4>
                        <p className="text-sm text-gray-300">Wake up when important calls come</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="dream-card border-none">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-pavlok-blue/20 w-10 h-10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-pavlok-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Multiple Alarms</h4>
                        <p className="text-sm text-gray-300">For different shifts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="dream-card p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Medical Professional Ready</h3>
              <p className="text-gray-300">
                The Shock Clock device and app work in perfect harmony to help you never miss critical calls or shifts again.
                Set emergency contacts in the app, wear your device to bed, and sleep worry-free knowing you'll always wake up when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="bg-gradient-to-b from-pavlok-dark/90 to-pavlok-dark text-white py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Irregular Shifts Don't Have to <span className="text-gradient">Ruin Your Sleep</span></h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Medical professionals face unique sleep challenges that regular alarm clocks simply can't address.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="dream-card border-none">
                <CardContent className="p-8 text-center">
                  <div className="rounded-full bg-pavlok-dark/50 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-gray-300">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-pavlok-dark to-pavlok-dark/90 text-white py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered for the <span className="text-gradient">Demands of Medical Life</span></h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our unique wearable technology provides multi-sensory alarms designed specifically for high-stress, 
              life-critical professions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-10">
                {features.map((feature, index) => (
                  <Card key={index} className="dream-card border-none">
                    <CardContent className="p-6 flex items-start gap-6">
                      <div className="flex-shrink-0 rounded-full bg-pavlok-dark/50 w-16 h-16 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center mb-10 lg:mb-0">
              <div className="relative">
                {/* Glowing effect behind device */}
                <div className="absolute -inset-10 bg-gradient-to-r from-pavlok-purple/30 to-pavlok-blue/30 rounded-full blur-3xl"></div>
                
                {/* Main device image */}
                <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                  <div className="bg-black rounded-xl overflow-hidden h-80 w-60 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-pavlok-purple to-pavlok-blue rounded-full flex items-center justify-center">
                        <Zap className="h-12 w-12 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">Shock Clock Max</h4>
                      <p className="text-gray-400 text-sm">For Medical Professionals</p>
                      <div className="mt-4 py-2 px-4 bg-pavlok-purple/20 rounded-lg text-pavlok-purple text-xs">
                        Multi-sensory Wake-up Technology
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gradient-to-b from-pavlok-dark/90 to-pavlok-dark text-white py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple Setup. <span className="text-gradient">Powerful Wake-Up.</span></h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Follow these simple steps to begin using your Shock Clock Max for reliable wake-ups.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pavlok-purple to-pavlok-blue opacity-30"></div>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step circle */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-3 z-10">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-pavlok-purple to-pavlok-blue flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs md:text-sm font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className={`pl-12 md:pl-0 grid md:grid-cols-5 gap-6 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    {/* Step title column */}
                    <div className={`md:col-span-2 ${
                      index % 2 === 0 ? 'md:order-1' : 'md:order-4'
                    }`}>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    </div>
                    
                    {/* Center spacer */}
                    <div className="hidden md:block md:col-span-1"></div>
                    
                    {/* Description column */}
                    <div className={`md:col-span-2 ${
                      index % 2 === 0 ? 'md:order-3' : 'md:order-2'
                    }`}>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gradient-to-b from-pavlok-dark to-pavlok-dark/90 text-white py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by <span className="text-gradient">Medical Professionals</span></h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from doctors, nurses, and first responders who rely on Shock Clock Max.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <Card key={index} className="dream-card border-none">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-pavlok-purple">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{item.quote}"</p>
                  <p className="font-semibold">{item.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-gradient-to-b from-pavlok-dark/90 to-pavlok-dark text-white py-20">
        <div className="section-container">
          <div className="dream-card p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss an <span className="text-gradient">On-Call Shift Again</span></h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of medical professionals who trust Shock Clock Max to wake them up—no matter what.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <Button 
                className="bg-pavlok-purple hover:bg-pavlok-purple/80 text-white px-8 py-6 text-lg"
                onClick={() => toast.success("Thanks for your interest in Shock Clock Max!")}
              >
                Buy Now — Wake Up Smarter →
              </Button>
            </div>
            
            <p className="text-gray-400">
              60-Day Money Back Guarantee | Free U.S. Shipping
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gradient-to-b from-pavlok-dark to-pavlok-dark/90 text-white py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about using Shock Clock Max as a medical professional.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqItems.map((item, index) => (
              <Card key={index} className="dream-card border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalProfessionals;

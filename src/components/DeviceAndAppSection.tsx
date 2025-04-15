
import React from 'react';
import { Zap, Moon, Smartphone, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DeviceAndAppSection: React.FC = () => {
  return (
    <section id="device-and-app" className="bg-gradient-to-b from-pavlok-dark to-pavlok-dark/90 text-white py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The <span className="text-gradient">Pavlok</span> Dream Experience</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our cutting-edge wearable technology and companion app work together to help you achieve 
            lucid dreaming with precision and ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Device Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Pavlok Dream Device</h3>
            <div className="relative">
              {/* Glow effect behind device */}
              <div className="absolute -inset-10 bg-gradient-to-r from-pavlok-purple/20 to-pavlok-blue/20 rounded-full blur-3xl"></div>
              
              {/* Device image */}
              <div className="relative flex justify-center">
                <img 
                  src="/lovable-uploads/a0c9db2a-b7c8-4969-b618-27d99ebb22f5.png" 
                  alt="Pavlok Dream Device" 
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
                      <h4 className="font-semibold">Haptic Feedback</h4>
                      <p className="text-sm text-gray-300">Customizable stimulus intensity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dream-card border-none">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-pavlok-blue/20 w-10 h-10 flex items-center justify-center">
                      <Moon className="h-5 w-5 text-pavlok-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sleep Tracking</h4>
                      <p className="text-sm text-gray-300">Monitors REM sleep cycles</p>
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
                  alt="Pavlok Companion App" 
                  className="max-w-[250px] relative z-10 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card className="dream-card border-none">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-pavlok-purple/20 w-10 h-10 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-pavlok-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Dream Journal</h4>
                      <p className="text-sm text-gray-300">Track and analyze dreams</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dream-card border-none">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-pavlok-blue/20 w-10 h-10 flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-pavlok-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Custom Settings</h4>
                      <p className="text-sm text-gray-300">Personalized stimuli patterns</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="dream-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
            <p className="text-gray-300">
              The Pavlok device and app work in perfect harmony to help you achieve and maintain lucid dreams. 
              Set your preferences in the app, wear your device to bed, and let our technology 
              enhance your dream awareness while you sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceAndAppSection;

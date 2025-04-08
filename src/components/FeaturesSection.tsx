
import React from 'react';
import { Zap, Bell, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-pavlok-dark/90 to-pavlok-dark text-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How <span className="text-gradient">Pavlok</span> Helps You Achieve Lucid Dreams</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our unique wearable technology provides the sensory cues you need to recognize when you're dreaming 
            and take control of your dream experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-10">
              <Card className="dream-card border-none">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="flex-shrink-0 rounded-full bg-pavlok-purple/20 w-16 h-16 flex items-center justify-center">
                    <Bell className="h-8 w-8 text-pavlok-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Vibration Alerts</h3>
                    <p className="text-gray-300">
                      Gentle vibrations during REM sleep serve as reality checks without waking you. 
                      These subtle reminders help trigger awareness that you're dreaming, 
                      a crucial first step to achieving lucidity.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dream-card border-none">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="flex-shrink-0 rounded-full bg-pavlok-blue/20 w-16 h-16 flex items-center justify-center">
                    <Headphones className="h-8 w-8 text-pavlok-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Sound Cues</h3>
                    <p className="text-gray-300">
                      Customizable audio prompts that are subtle enough to integrate into your dream 
                      without causing awakening. These auditory cues can be personalized to maximize 
                      effectiveness based on your dream patterns.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="dream-card border-none">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="flex-shrink-0 rounded-full bg-pavlok-purple/20 w-16 h-16 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-pavlok-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Electric Zaps</h3>
                    <p className="text-gray-300">
                      Our signature feature - mild electric stimulus that can be programmed to activate 
                      during REM cycles. This unique sensation creates a powerful trigger for dream recognition 
                      that users find impossible to ignore.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center mb-10 lg:mb-0">
            <div className="relative">
              {/* Glowing effect behind device */}
              <div className="absolute -inset-10 bg-gradient-to-r from-pavlok-purple/30 to-pavlok-blue/30 rounded-full blur-3xl"></div>
              
              {/* Main device image - placeholder */}
              <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
                <div className="bg-black rounded-xl overflow-hidden h-80 w-60 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-pavlok-purple to-pavlok-blue rounded-full flex items-center justify-center">
                      <Zap className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">Pavlok</h4>
                    <p className="text-gray-400 text-sm">Dream Control Device</p>
                    <div className="mt-4 py-2 px-4 bg-pavlok-purple/20 rounded-lg text-pavlok-purple text-xs">
                      Advanced Dream Detection Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block py-3 px-6 rounded-full bg-pavlok-purple/20 text-pavlok-purple font-medium">
            Smart Integration with Sleep Tracking
          </div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Pavlok's technology intelligently detects your sleep stages and delivers stimuli at the optimal moment 
            during your REM cycles, when dreams are most vivid and lucidity is most achievable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

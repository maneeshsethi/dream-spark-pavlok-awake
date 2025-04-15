
import React from 'react';
import { Zap, Bell, Headphones, CircleArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesAndHowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Set Your Intention",
      description: "Before sleep, spend 5-10 minutes setting a clear intention to become lucid in your dreams. Activate your Pavlok device and set your preferred stimuli timing in the app.",
    },
    {
      number: "02",
      title: "Sleep with Pavlok",
      description: "Wear your Pavlok device to bed. The smart technology will monitor your sleep cycles and deliver subtle sensory cues during REM sleep when you're most likely to dream.",
    },
    {
      number: "03",
      title: "Reality Check & Recognize",
      description: "When you feel a vibration, hear a sound, or experience the mild zap, perform a reality check in your dream. This creates awareness that you're dreaming, leading to lucidity.",
    },
    {
      number: "04",
      title: "Control Your Dream",
      description: "Once lucid, you can take control of your dream environment. Fly, create, explore, or use your dream state for personal growth and problem-solving.",
    },
    {
      number: "05",
      title: "Record & Learn",
      description: "Upon waking, record your dreams in the Pavlok app. The built-in AI will analyze your experiences and provide personalized tips to improve future lucid dreaming.",
    },
  ];

  return (
    <section id="features-and-how" className="bg-gradient-to-b from-pavlok-dark/90 to-pavlok-dark text-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How <span className="text-gradient">Pavlok</span> Helps You Achieve Lucid Dreams</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our unique wearable technology provides the sensory cues you need to recognize when you're dreaming 
            and take control of your dream experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
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
        
        <div className="mt-16 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Use <span className="text-gradient">Pavlok</span> for Lucid Dreaming</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to begin your journey into the world of lucid dreaming with Pavlok.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pavlok-purple to-pavlok-blue opacity-30"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step circle with arrow */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-3 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-pavlok-purple to-pavlok-blue flex items-center justify-center shadow-lg">
                    <CircleArrowDown className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                
                <div className={`pl-12 md:pl-0 grid md:grid-cols-5 gap-6 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  {/* Step number column */}
                  <div className={`text-4xl font-bold text-gradient hidden md:block ${
                    index % 2 === 0 ? 'md:col-span-2 md:order-1' : 'md:order-4 md:col-span-2'
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Center spacer */}
                  <div className="hidden md:block md:col-span-1"></div>
                  
                  {/* Content column */}
                  <div className={`${
                    index % 2 === 0 ? 'md:col-span-2 md:order-3' : 'md:order-2 md:col-span-2'
                  }`}>
                    <div className="md:hidden text-2xl font-bold text-gradient mb-3">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="dream-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Pro Tip</h3>
            <p className="text-gray-300">
              For best results, practice reality checks during the day. When you feel the Pavlok stimulus, 
              ask yourself "Am I dreaming?" and check by looking at your hands or a clock. This habit will 
              carry into your dreams, making it easier to achieve lucidity when you feel the stimulus while asleep.
            </p>
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

export default FeaturesAndHowItWorksSection;

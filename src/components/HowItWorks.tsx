
import React from 'react';
import { CircleArrowDown } from 'lucide-react';

const HowItWorks: React.FC = () => {
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
    <section id="how-it-works" className="bg-gradient-to-b from-pavlok-dark to-pavlok-dark/90 text-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
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
      </div>
    </section>
  );
};

export default HowItWorks;

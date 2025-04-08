
import React from 'react';
import { Book, Lightbulb, Headphones } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-pavlok-dark to-pavlok-dark/90 text-white py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is <span className="text-gradient">Lucid Dreaming</span>?</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Lucid dreaming is the awareness that you're dreaming while you're asleep. When you're lucid dreaming, 
            you can control your actions and often manipulate your dream environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="dream-card p-8 transform transition-all duration-300 hover:-translate-y-2">
            <div className="rounded-full bg-pavlok-purple/20 w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-pavlok-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Enhanced Creativity</h3>
            <p className="text-gray-300">
              Access your subconscious mind and tap into enhanced creative potential. Many artists, writers, and 
              innovators have used lucid dreaming to solve problems and find inspiration.
            </p>
          </div>
          
          <div className="dream-card p-8 transform transition-all duration-300 hover:-translate-y-2">
            <div className="rounded-full bg-pavlok-blue/20 w-16 h-16 flex items-center justify-center mb-6">
              <Book className="h-8 w-8 text-pavlok-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Overcome Nightmares</h3>
            <p className="text-gray-300">
              Take control of your nightmares by recognizing you're in a dream. Transform negative experiences into 
              positive ones and reduce nightmare frequency and intensity.
            </p>
          </div>
          
          <div className="dream-card p-8 transform transition-all duration-300 hover:-translate-y-2">
            <div className="rounded-full bg-pavlok-purple/20 w-16 h-16 flex items-center justify-center mb-6">
              <Headphones className="h-8 w-8 text-pavlok-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Practice & Learn</h3>
            <p className="text-gray-300">
              Use lucid dreams to practice real-life skills, rehearse important events, or explore personal growth.
              Research shows neural pathways activated in dreams mirror those in waking life.
            </p>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="relative overflow-hidden rounded-lg shadow-xl max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-pavlok-purple to-pavlok-blue opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Lucid Dreaming Concept" 
              className="w-full h-auto rounded-lg relative z-10 mix-blend-overlay opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pavlok-dark to-transparent z-20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
              <p className="text-white text-lg md:text-xl font-medium">
                "Lucid dreaming delivers the ultimate virtual reality experience - one where you are fully immersed, 
                your physical body is at rest, and the content is provided by the most creative part of your mind."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

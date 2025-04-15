
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
      </div>
    </section>
  );
};

export default AboutSection;

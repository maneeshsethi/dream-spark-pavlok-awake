
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-pavlok-dark/90 via-pavlok-dark to-pavlok-dark/95 text-white py-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dream-pattern opacity-10"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="dream-card p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience <span className="text-gradient">Lucid Dreams</span>?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Join thousands who have transformed their dream experiences with Pavlok.
              Start your journey today with our 30-day satisfaction guarantee.
            </p>
            
            <div className="max-w-lg mx-auto mt-12 mb-12">
              <div className="dream-card p-6 flex flex-col h-full border border-white/5 hover:border-pavlok-purple/30 transition-colors">
                <h3 className="text-xl font-bold mb-2">Pavlok Dream</h3>
                <p className="text-3xl font-bold mb-6">$149.99</p>
                <div className="space-y-3 text-left flex-grow">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pavlok-purple shrink-0 mt-0.5" />
                    <span className="text-gray-300">Pavlok wearable device with all 3 stimulus types</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pavlok-purple shrink-0 mt-0.5" />
                    <span className="text-gray-300">Dream tracking app with AI analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pavlok-purple shrink-0 mt-0.5" />
                    <span className="text-gray-300">Basic lucid dreaming course</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pavlok-purple shrink-0 mt-0.5" />
                    <span className="text-gray-300">30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pavlok-purple shrink-0 mt-0.5" />
                    <span className="text-gray-300">Premium lucid dreaming masterclass</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pavlok-purple shrink-0 mt-0.5" />
                    <span className="text-gray-300">1-year access to Dream Community</span>
                  </div>
                </div>
                <Button 
                  className="mt-8 py-6 bg-gradient-to-r from-pavlok-purple to-pavlok-blue hover:opacity-90"
                >
                  Get Started
                </Button>
              </div>
            </div>
            
            <div className="mt-8 text-center max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm">
                By purchasing, you agree to our <a href="#" className="text-pavlok-purple hover:text-pavlok-blue underline">Terms of Service</a>. 
                All orders include free shipping within the continental US. 
                International shipping available for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

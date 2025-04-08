
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ScienceSection: React.FC = () => {
  return (
    <section id="science" className="bg-gradient-to-b from-pavlok-dark to-pavlok-dark/95 text-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The <span className="text-gradient">Science</span> Behind It</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Pavlok's lucid dreaming technology is grounded in scientific research and proven techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="dream-card border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {/* REM Sleep Graph Visualization */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-semibold mb-6">REM Sleep & Lucid Dreaming</h3>
                    
                    <div className="relative h-56 mb-8">
                      {/* Night timeline */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-600"></div>
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                        <span>10 PM</span>
                        <span>12 AM</span>
                        <span>2 AM</span>
                        <span>4 AM</span>
                        <span>6 AM</span>
                      </div>
                      
                      {/* Sleep phases */}
                      <div className="absolute left-0 right-0 bottom-6 h-16 bg-pavlok-purple/10 rounded"></div>
                      <div className="absolute left-[15%] right-[70%] bottom-10 h-10 bg-pavlok-purple/20 rounded"></div>
                      <div className="absolute left-[35%] right-[50%] bottom-16 h-12 bg-pavlok-purple/30 rounded"></div>
                      <div className="absolute left-[55%] right-[25%] bottom-24 h-16 bg-pavlok-purple/40 rounded"></div>
                      <div className="absolute left-[80%] right-[5%] bottom-28 h-20 bg-pavlok-blue/50 rounded"></div>
                      
                      {/* Indicators for Pavlok triggers */}
                      <div className="absolute left-[40%] bottom-16 w-4 h-4 bg-pavlok-purple rounded-full shadow-lg shadow-pavlok-purple/40"></div>
                      <div className="absolute left-[60%] bottom-24 w-4 h-4 bg-pavlok-purple rounded-full shadow-lg shadow-pavlok-purple/40"></div>
                      <div className="absolute left-[85%] bottom-28 w-4 h-4 bg-pavlok-purple rounded-full shadow-lg shadow-pavlok-purple/40"></div>
                      
                      {/* Legend */}
                      <div className="absolute top-0 right-0 flex flex-col gap-2 bg-pavlok-dark/90 p-2 rounded">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-pavlok-blue/50 rounded"></div>
                          <span className="text-xs text-gray-400">REM Sleep</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-pavlok-purple rounded-full"></div>
                          <span className="text-xs text-gray-400">Pavlok Stimulus</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-300">
                      Research shows that lucid dreams occur most frequently during REM sleep. 
                      Pavlok delivers precisely timed sensory stimuli during these phases, 
                      significantly increasing your chances of achieving dream awareness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="dream-card p-6">
              <h3 className="text-xl font-semibold mb-4">External Stimuli Integration</h3>
              <p className="text-gray-300">
                Scientific studies have demonstrated that external sensory stimuli can be incorporated into dreams 
                without causing awakening. Pavlok leverages this phenomenon with precisely calibrated stimuli 
                that are strong enough to notice but gentle enough to maintain sleep.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pavlok-purple rounded-full"></div>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">2019 Study:</span> 83% of subjects reported sensory incorporation into dream content
                  </p>
                </div>
              </div>
            </div>
            
            <div className="dream-card p-6">
              <h3 className="text-xl font-semibold mb-4">Reality Testing Effectiveness</h3>
              <p className="text-gray-300">
                Regular reality testing combined with external cues has been shown to increase lucid dream 
                frequency by up to 300% in consistent practitioners. Pavlok's technology provides the perfect 
                trigger for these reality checks during sleep.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pavlok-blue rounded-full"></div>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">2021 Research:</span> Reality check triggers improved lucid dream recall by 73%
                  </p>
                </div>
              </div>
            </div>
            
            <div className="dream-card p-6">
              <h3 className="text-xl font-semibold mb-4">Neurological Benefits</h3>
              <p className="text-gray-300">
                Lucid dreaming activates the prefrontal cortex, the area responsible for self-awareness and executive 
                function. Regular lucid dreamers show increased activity in this region even during waking hours, 
                potentially improving cognitive performance and emotional regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;

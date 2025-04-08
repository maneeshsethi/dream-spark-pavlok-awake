
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I've been trying to lucid dream for years with no success. Within a week of using Pavlok, I had my first lucid dream! The vibration alert triggered my awareness during a dream, and suddenly I could control everything.",
      name: "Michael T.",
      location: "Seattle, WA",
      rating: 5,
    },
    {
      quote: "The electric zap feature was a game-changer for me. It's just enough to make you realize you're dreaming without waking you up. I've been able to overcome recurring nightmares by taking control of the dream narrative.",
      name: "Sarah J.",
      location: "Chicago, IL",
      rating: 5,
    },
    {
      quote: "As a creative professional, I use lucid dreaming for inspiration. Pavlok has made it so much easier to achieve lucidity consistently. I've solved design problems in my dreams that I couldn't figure out while awake!",
      name: "David L.",
      location: "Austin, TX",
      rating: 4,
    },
    {
      quote: "The sleep tracking integration is brilliant. It delivers the alerts at exactly the right moment in my sleep cycle. I'm averaging 2-3 lucid dreams per week now, compared to maybe 1 per month before Pavlok.",
      name: "Jessica M.",
      location: "Portland, OR",
      rating: 5,
    },
    {
      quote: "I was skeptical about the electric zap, but it's actually quite gentle and incredibly effective for dream awareness. The app is intuitive, and the customer support has been fantastic with helping me optimize my settings.",
      name: "Robert K.",
      location: "Denver, CO",
      rating: 5,
    },
    {
      quote: "Pavlok has helped me reduce my anxiety by practicing difficult conversations in my lucid dreams. The sound cues work perfectly for me, and I love how I can customize the intensity and timing.",
      name: "Emma S.",
      location: "New York, NY",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-pavlok-dark/90 to-pavlok-dark text-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Dreamers Are <span className="text-gradient">Saying</span></h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands who have transformed their dream experiences with Pavlok.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="dream-card p-6 h-full flex flex-col">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 flex-grow">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="dream-card py-8 px-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pavlok-purple to-pavlok-blue rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">98%</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Dream Satisfaction Rate</h3>
            <p className="text-gray-300">
              98% of Pavlok users report having more vivid and controllable dream experiences 
              within the first month of use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

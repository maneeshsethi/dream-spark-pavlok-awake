
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Is the electric stimulus painful?",
      answer: "No, Pavlok's electric stimulus is fully adjustable and designed to be noticeable but not painful. For lucid dreaming purposes, users typically set it to a mild level that's just enough to be recognized within a dream state without causing awakening."
    },
    {
      question: "How long does it typically take to have my first lucid dream with Pavlok?",
      answer: "Results vary based on individual factors, but many users report their first lucid dream experience within 1-2 weeks of consistent use. Those who combine Pavlok with recommended dream journaling and reality testing techniques often see faster results."
    },
    {
      question: "Can I use Pavlok for lucid dreaming if I don't remember my dreams?",
      answer: "Yes! Pavlok can actually help improve dream recall. The app includes features specifically designed to enhance dream memory, and many users report remembering more dreams overall when using the device regularly."
    },
    {
      question: "Will Pavlok disrupt my sleep quality?",
      answer: "Pavlok is designed to work with your natural sleep cycles, not against them. The stimuli are calibrated to be recognized by your dreaming mind without disturbing overall sleep architecture. Most users report no negative impact on sleep quality, and many actually report improved sleep satisfaction."
    },
    {
      question: "How does Pavlok know when I'm in REM sleep?",
      answer: "Pavlok uses advanced sleep tracking technology that monitors micro-movements and heart rate patterns to detect sleep phases. The algorithm has been refined through extensive testing to accurately identify REM cycles when dreams are most likely to occur."
    },
    {
      question: "Can I disable certain features if I prefer only vibration or sound?",
      answer: "Absolutely! Pavlok is fully customizable. You can enable or disable vibration, sound, and electric stimulus independently, and adjust the intensity of each. Many lucid dreamers start with just vibration and gradually incorporate other features as they become more experienced."
    },
    {
      question: "Is lucid dreaming safe?",
      answer: "Yes, lucid dreaming is a natural phenomenon that many people experience spontaneously. Research has shown no negative psychological effects from deliberately inducing lucid dreams. In fact, many people report benefits like reduced anxiety and improved creativity."
    },
    {
      question: "How long does the Pavlok battery last when used for lucid dreaming?",
      answer: "When used specifically for lucid dreaming (typically active only during sleep hours), the Pavlok battery lasts approximately 7-10 days between charges, depending on your specific settings and stimulus frequency."
    },
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-pavlok-dark/95 to-pavlok-dark text-white py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about using Pavlok for lucid dreaming.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-left font-medium py-5 text-white hover:text-pavlok-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Don't see your question answered here? <a href="#contact" className="text-pavlok-purple hover:text-pavlok-blue underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

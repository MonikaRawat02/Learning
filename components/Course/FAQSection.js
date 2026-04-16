import React, { useState } from 'react';

const faqs = [
  {
    question: "Is this beginner friendly?",
    answer: "Absolutely! This course is designed specifically for beginners with no prior trading experience. We start with the fundamentals and build up progressively, ensuring every concept is clearly explained."
  },
  {
    question: "Will this guarantee profits?",
    answer: "No. This is an educational program focused on teaching trading concepts, risk management, and disciplined execution. Trading involves financial risk, and past performance does not guarantee future results. The goal is to provide knowledge and skills, not income guarantees."
  },
  {
    question: "How long do I have access?",
    answer: "You get lifetime access to all course content, including any future updates or additions. Learn at your own pace without any time restrictions."
  },
  {
    question: "Is support available?",
    answer: "Yes! You'll get access to our private community where you can ask questions, share insights, and get support from both instructors and fellow students. We also conduct periodic trade review sessions."
  },
  {
    question: "What if I have no experience with charts or technical analysis?",
    answer: "That's perfectly fine! We start from the very basics, explaining everything from chart types to technical indicators. No prior knowledge is required."
  },
  {
    question: "How is this course delivered?",
    answer: "The course consists of video lessons, real chart examples, and practical demonstrations. You can access everything online at your convenience, 24/7."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E4E7EB] mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            Everything you need to know about the course
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-xl bg-[#0a0e1a]/80 border border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all duration-300 hover:bg-emerald-500/[0.03] group"
              >
                <span className={`text-lg pr-8 font-medium transition-colors duration-300 ${openIndex === index ? 'text-emerald-400' : 'text-[#E4E7EB]'}`}>
                  {faq.question}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'text-emerald-400 rotate-180' : 'text-emerald-400'}`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 border-t border-slate-800' : 'max-h-0'}`}>
                <div className="px-6 pb-6 pt-2 text-[#9CA3AF] text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

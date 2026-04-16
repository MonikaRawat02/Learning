"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "क्या यह course beginners के लिए है?",
    answer: "हाँ, यह course बिल्कुल beginners के लिए designed किया गया है। हम basics से शुरू करते हैं और धीरे-धीरे advanced concepts की ओर बढ़ते हैं। आपको पहले से कोई trading knowledge की जरूरत नहीं है।"
  },
  {
    question: "क्या profit की कोई guarantee है?",
    answer: "नहीं, यह एक educational course है। Trading में risk शामिल है और हम किसी भी प्रकार के profit या returns की guarantee नहीं देते। हमारा उद्देश्य आपको proper knowledge और skills provide करना है।"
  },
  {
    question: "Course की access कितने समय के लिए है?",
    answer: "आपको lifetime access मिलेगा। एक बार enroll करने के बाद, आप कभी भी, कहीं भी course content को access कर सकते हैं। भविष्य में जो भी updates होंगे, वो भी आपको मिलेंगे।"
  },
  {
    question: "क्या support available है?",
    answer: "हाँ, आपको private community में access मिलेगा जहाँ आप questions पूछ सकते हैं। साथ ही weekly market insights और trade review sessions में भी आप participate कर सकते हैं।"
  },
  {
    question: "Course किस language में है?",
    answer: "पूरा course Hindi में है, ताकि आप आसानी से समझ सकें। Technical terms की proper explanation दी गई है और real-life examples के साथ concepts को समझाया गया है।"
  },
  {
    question: "क्या certificate मिलेगा?",
    answer: "हाँ, course complete करने के बाद आपको Certificate of Completion मिलेगा। यह certificate आपके learning journey का proof है।"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
            आम सवाल (FAQ)
          </h2>
          <p className="text-slate-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            आपके मन में जो सवाल हो सकते हैं
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-emerald-500/30 transition-colors"
            >
              <button
                className="w-full px-6 py-6 flex items-center justify-between bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                    index === openIndex ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  index === openIndex ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-4">
                  <p className="text-slate-300 leading-relaxed border-t border-slate-700/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

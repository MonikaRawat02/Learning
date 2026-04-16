import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f1729] to-[#0a0a0f]">
      <div className="max-w-[1200px] mx-auto">
        {/* CTA Container */}
        <div className="bg-gradient-to-br from-emerald-500/20 to-blue-600/20 border border-emerald-500/30 rounded-2xl p-12 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Start Your Trading Learning Journey
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of learners who are building their trading knowledge with structured, beginner-friendly content in Hindi.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={() => window.open("http://o2helpvip.com/", "_blank")}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-lg text-xl transition-colors inline-flex items-center gap-2"
          >
            Join Free Training Now
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.2]">
          How to Start Trading (Step-by-Step Guide)
        </h1>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Understand how trading platforms work and how beginners can get started.
        </p>
        <button 
          onClick={() => window.open("https://broker-qx.pro/sign-up/?lid=1220966", "_blank")}
          className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Open Free Practice Account
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

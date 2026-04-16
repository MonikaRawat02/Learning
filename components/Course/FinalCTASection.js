import React from 'react';
import { ArrowRight, CheckCircle, Infinity, Users, Sparkles } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#020617] overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" 
      />

      {/* Central Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-8">
          <Sparkles className="w-4 h-4 text-[#10b981]" />
          <span className="text-[#10b981] text-sm font-semibold tracking-wide">Ready to start learning?</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold lg:text-5xl mb-6">
          Start Your Structured Trading Learning Today
        </h2>

        {/* Subheading */}
        <p className="text-[#9CA3AF] text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of students who are building their trading knowledge with a comprehensive, step-by-step educational program.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <button className="group relative inline-flex items-center justify-center px-12 py-5 bg-[#10b981] text-[#030712] font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Get Instant Access
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Mini Features */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#10b981]" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Infinity className="w-5 h-5 text-[#10b981]" />
            <span>Lifetime Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#10b981]" />
            <span>Community Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

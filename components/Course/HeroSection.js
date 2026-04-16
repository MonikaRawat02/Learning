
import React from 'react';
import { BookOpen, Users, Infinity } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
    title: "50+ Lessons",
    subtitle: "Comprehensive",
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: "Beginner Friendly",
    subtitle: "No experience needed",
  },
  {
    icon: <Infinity className="w-6 h-6 text-emerald-400" />,
    title: "Lifetime Access",
    subtitle: "Learn at your pace",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#0f1419] to-[#0a0e1a] pt-20 pb-20 md:pt-32 md:pb-28">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
          }}
        />
        {/* Top Glow/Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6">
          Complete Trading Course
        </h1>
        
        {/* Subtitle */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A structured program to help you understand trading, risk management, and disciplined execution.
        </p>

        {/* CTA Button */}
        <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden bg-emerald-500 text-slate-950 font-bold rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] mb-12">
          <span className="relative z-10 flex items-center gap-2">
            Enroll Now
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Feature Icons */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4 text-left justify-center sm:justify-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                {feature.icon}
              </div>
              <div>
                <div className="text-white font-bold">{feature.title}</div>
                <div className="text-slate-400 text-sm">{feature.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

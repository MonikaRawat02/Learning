
import React from 'react';
import { BookOpen, ShieldCheck, TrendingUp, GraduationCap } from 'lucide-react';

const reasons = [
  {
    icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
    title: "Step-by-step learning system",
    description: "Structured curriculum that takes you from basics to advanced concepts in a logical progression.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Strong focus on risk management",
    description: "Learn how to protect your capital and make informed decisions with proper risk controls.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    title: "Real chart-based explanations",
    description: "Every concept is demonstrated using actual market examples and real trading scenarios.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
    title: "Structured and beginner-friendly",
    description: "Designed for complete beginners with clear explanations and no prior knowledge required.",
  },
];

const WhyThisCourseSection = () => {
  return (
    <section className="py-12 md:py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E4E7EB] mb-4">
            Why This Course Is Different
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            A comprehensive approach to trading education that prioritizes understanding and discipline
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl bg-[#0f172a]/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                {reason.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#E4E7EB] mb-3">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisCourseSection;

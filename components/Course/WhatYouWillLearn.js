
import React from 'react';
import { BookOpen, Target, ShieldCheck, BrainCircuit, LineChart } from 'lucide-react';

const modules = [
  {
    icon: <BookOpen className="w-7 h-7 text-emerald-400" />,
    module: "Module 01",
    title: "Trading Basics",
    description: "Understand market fundamentals, trading terminology, chart types, and how financial markets operate.",
  },
  {
    icon: <Target className="w-7 h-7 text-emerald-400" />,
    module: "Module 02",
    title: "Strategy System",
    description: "Learn proven trading strategies, entry and exit techniques, and how to identify high-probability setups.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
    module: "Module 03",
    title: "Risk Management",
    description: "Master position sizing, stop-loss placement, and capital preservation strategies to protect your account.",
  },
  {
    icon: <BrainCircuit className="w-7 h-7 text-emerald-400" />,
    module: "Module 04",
    title: "Trading Psychology",
    description: "Develop mental discipline, emotional control, and the mindset required for consistent trading performance.",
  },
  {
    icon: <LineChart className="w-7 h-7 text-emerald-400" />,
    module: "Module 05",
    title: "Live Market Breakdown",
    description: "Real-time market analysis, live trading examples, and practical application of learned concepts.",
  },
];

const WhatYouWillLearn = () => {
  return (
    <section className="py-12 md:py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E4E7EB] mb-4">
            What You Will Learn
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Five comprehensive modules covering everything from fundamentals to advanced trading concepts
          </p>
        </div>

        {/* Modules List */}
        <div className="space-y-6">
          {modules.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden p-6 md:p-8 rounded-xl bg-[#0f172a]/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-emerald-500 font-medium">
                      {item.module}
                    </span>
                    <h3 className="text-2xl font-bold text-[#E4E7EB]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-lg text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Background Number */}
              <div className="absolute top-0 right-0 text-[120px] md:text-[150px] font-bold text-emerald-500/5 leading-none pointer-events-none select-none">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;

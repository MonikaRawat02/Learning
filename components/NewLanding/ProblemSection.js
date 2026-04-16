import React from 'react';
import { AlertCircle, TrendingDown, Brain } from 'lucide-react';

const problems = [
  {
    icon: <AlertCircle className="w-12 h-12 text-red-400" />,
    title: "Random Entries",
    description: "No clear strategy or plan for entering trades",
  },
  {
    icon: <TrendingDown className="w-12 h-12 text-red-400" />,
    title: "Poor Risk Management",
    description: "Not knowing when to exit or how much to risk",
  },
  {
    icon: <Brain className="w-12 h-12 text-red-400" />,
    title: "Emotional Decisions",
    description: "Trading based on fear and greed instead of logic",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          Why Most Beginners Struggle in Trading
        </h2>
        
        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-red-400/50 transition-all"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                {problem.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl mb-4 text-white font-semibold">
                {problem.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-lg">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

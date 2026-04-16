import React from 'react';
import { CheckCircle } from 'lucide-react';

const learningOutcomes = [
  "Market structure basics",
  "Entry & exit logic",
  "Risk management fundamentals",
  "Common beginner mistakes",
];

const LearningOutcomesSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0f0f1a]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl text-center mb-12 text-white">
          What You'll Learn
        </h2>
        
        {/* Learning Outcomes Grid */}
        <div className="max-w-3xl mx-auto grid gap-6">
          {learningOutcomes.map((outcome, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-400/50 transition-all"
            >
              {/* Check Icon */}
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              
              {/* Text */}
              <span className="text-xl text-gray-200">
                {outcome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomesSection;

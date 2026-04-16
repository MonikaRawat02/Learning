import React from 'react';
import { Users, TrendingUp, MessageSquare } from 'lucide-react';

const bonuses = [
  {
    title: "Private Community Access",
    description: "Join an exclusive community of learners to share insights, ask questions, and grow together.",
    icon: Users,
    number: "Bonus #1"
  },
  {
    title: "Weekly Market Insights",
    description: "Receive regular market analysis and educational content to keep your skills sharp.",
    icon: TrendingUp,
    number: "Bonus #2"
  },
  {
    title: "Trade Review Sessions",
    description: "Access to periodic sessions where we review trading decisions and learning progress.",
    icon: MessageSquare,
    number: "Bonus #3"
  }
];

const BonusesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E4E7EB] mb-4">
            Included Bonuses
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Get additional value with these exclusive benefits included in your enrollment
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="relative group">
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content Card */}
              <div className="relative p-8 rounded-xl bg-[#0f172a]/50 border border-slate-800 group-hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <bonus.icon className="w-8 h-8 text-emerald-500" />
                </div>

                {/* Bonus Title */}
                <h3 className="text-xl font-bold text-[#E4E7EB] mb-3">
                  {bonus.title}
                </h3>

                {/* Description */}
                <p className="text-[#9CA3AF] leading-relaxed flex-grow">
                  {bonus.description}
                </p>

                {/* Bonus Badge */}
                <div className="mt-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium">
                    {bonus.number}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;

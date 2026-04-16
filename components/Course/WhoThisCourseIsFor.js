
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const targets = [
  "Beginners with no experience",
  "Traders struggling with consistency",
  "Individuals looking for structured learning",
];

const WhoThisCourseIsFor = () => {
  return (
    <section className="py-12 md:py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E4E7EB] mb-4">
            Who This Course Is For
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            This program is designed to help anyone serious about learning trading
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0f172a]/50 border border-slate-800 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              {targets.map((target, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <p className="text-lg md:text-xl text-[#E4E7EB] font-medium">{target}</p>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-12 pt-8 border-t border-slate-800/50">
              <p className="text-base text-[#9CA3AF] text-center leading-relaxed">
                If you're willing to commit to learning and applying proven trading principles, this course is for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisCourseIsFor;

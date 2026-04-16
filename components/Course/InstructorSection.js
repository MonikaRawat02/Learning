import React from 'react';
import { Award, Users, BookOpen, User } from 'lucide-react';

const stats = [
  {
    label: "Years Experience",
    value: "5+",
    icon: Award
  },
  {
    label: "Students Taught",
    value: "1000+",
    icon: Users
  },
  {
    label: "Comprehensive Lessons",
    value: "50+",
    icon: BookOpen
  }
];

const InstructorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#020617] to-[#0f172a]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E4E7EB] mb-4">
            About the Instructor
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Instructor Image/Placeholder */}
          <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] border border-slate-800 flex items-center justify-center overflow-hidden group shadow-2xl">
            {/* Shine Feature */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
            
            <div className="relative w-32 h-32 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-700 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <User className="w-16 h-16 text-emerald-500" />
            </div>
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#020617] to-transparent" />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#E4E7EB] mb-4">
              Expert Trading Educator
            </h3>
            
            <div className="space-y-4 text-[#9CA3AF] text-lg leading-relaxed">
              <p className="mb-4">
                With years of experience in financial markets and a passion for education, I created this course to demystify trading and help others build a solid foundation.
              </p>
              <p className="mb-4">
                My journey started as a complete beginner, struggling with inconsistency and lack of structure. After years of learning and refinement, I developed a systematic approach that focuses on education, discipline, and proper risk management.
              </p>
              <p>
                My mission is to provide clear, structured education that empowers individuals to make informed trading decisions and develop the skills necessary for long-term success in the markets.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-[#111827] border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 group/stat">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover/stat:bg-emerald-500/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="text-xl font-bold text-[#E4E7EB] mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9CA3AF] leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;

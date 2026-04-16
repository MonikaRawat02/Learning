import React from 'react';
import { BookOpen, UserPlus, TrendingUp } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Learn Platform Basics',
      description: 'Familiarize yourself with the interface, tools, and features available on most trading platforms.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Create Demo Account',
      description: 'Sign up for a free practice account with virtual funds to explore without financial risk.',
      icon: <UserPlus className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Practice with Virtual Balance',
      description: 'Use simulated money to understand how trades work and build your confidence.',
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Getting Started: 3 Simple Steps
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Follow this straightforward path to begin your trading education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative group bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300"
            >
              <div className="absolute top-4 right-6 text-7xl font-bold text-slate-200/50 group-hover:text-blue-100 transition-colors pointer-events-none select-none">
                {step.id}
              </div>
              
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;

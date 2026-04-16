import React from 'react';
import { Shield, Lightbulb, CheckCircle } from 'lucide-react';

const WhyDemoSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: 'No real money risk',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: 'Learn platform features',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: 'Build confidence',
    },
  ];

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
          Why Start with a Demo Account?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-slate-200 flex items-center gap-4 transition-all hover:shadow-sm"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                {benefit.icon}
              </div>
              <span className="text-slate-700 font-medium">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDemoSection;

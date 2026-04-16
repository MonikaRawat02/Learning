import React from 'react';
import { GraduationCap } from 'lucide-react';

const StructuredLearningSection = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center shadow-sm">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Want Structured Learning?
          </h2>
          <p className="text-slate-600 mb-6">
            If you want structured learning, explore our training program.
          </p>
          <button 
            onClick={() => window.open("https://broker-qx.pro/sign-up/?lid=1220966", "_blank")}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View Training Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default StructuredLearningSection;

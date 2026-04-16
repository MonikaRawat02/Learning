import React from 'react';
import { ExternalLink } from 'lucide-react';

const ReadyToStartSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Open a free demo account and begin practicing with no financial commitment.
        </p>
        <button 
          onClick={() => window.open("https://broker-qx.pro/sign-up/?lid=1220966", "_blank")}
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-xl"
        >
          Open Free Demo Account
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ReadyToStartSection;

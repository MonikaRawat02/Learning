import React from "react";

const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-lg border-t border-emerald-500/30 shadow-2xl transition-transform duration-300 translate-y-0">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Side - Course Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl">Complete Trading Course (Hindi)</h3>
              <p className="text-emerald-400 text-sm sm:text-base">₹4,999 • Lifetime Access</p>
            </div>
          </div>

          {/* Right Side - CTA Button */}
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl shadow-emerald-500/50 hover:shadow-emerald-400/60 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            अभी नामांकन करें
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;

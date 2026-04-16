import React from "react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        {/* <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 opacity-20 blur-3xl rounded-3xl"></div> */}
        {/* CTA Card */}
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl border border-emerald-500/50 p-12 lg:p-16 text-center">
         
         
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              अपनी Structured Learning शुरू करें
            </h2>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              आज ही join करें और अपने trading journey को एक नई दिशा दें। हर module, हर lesson आपको एक successful trader बनने में मदद करेगा।
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-12 py-6 rounded-xl text-2xl font-bold transition-all duration-300 shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-400/60 hover:scale-105 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Get Instant Access
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </button>
            </div>

            {/* Features List */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-400 text-sm">Limited batch access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-400 text-sm">Lifetime validity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-slate-400 text-sm">Instant access</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FinalCTA;

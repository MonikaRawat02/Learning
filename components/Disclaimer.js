import React from "react";

const Disclaimer = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Disclaimer Card */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            {/* Warning Icon */}
            <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Important Disclaimer</h3>
              
              {/* Hindi Text */}
              <p className="text-slate-400 leading-relaxed mb-4">
                यह course केवल शैक्षिक उद्देश्यों के लिए है। Trading में जोखिम शामिल है और आप अपनी पूंजी खो सकते हैं। कोई भी guaranteed returns या profit की guarantee नहीं है।
              </p>

              {/* English Text */}
              <p className="text-slate-400 leading-relaxed">
                This course is for educational purposes only. Trading involves risk. No guaranteed returns. Past performance is not indicative of future results. Please do your own research and trade responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;

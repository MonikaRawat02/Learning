import React from "react";

const Instructor = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            अपने Instructor से मिलें
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            एक अनुभवी ट्रेडर और शिक्षक से सीखें
          </p>
        </div>

        {/* Instructor Card */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Image Section */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-visible border-4 border-emerald-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full opacity-20 blur-2xl scale-110"></div>
                <img
                  src="/instructor.jpg"
                  alt="Rajesh Verma"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Rajesh Verma
              </h3>
              <p className="text-emerald-400 text-xl mb-6">
                Professional Trader & Educator
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                मैं पिछले 5+ वर्षों से markets में active हूँ और अपने अनुभव को students के साथ share करता हूँ। मेरा मकसद है कि हर trader को एक structured और disciplined approach सिखाया जाए, ताकि वे long-term में successful हो सकें।
              </p>

              {/* Achievements */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <line x1={18} y1={20} x2={18} y2={10} />
                      <line x1={12} y1={20} x2={12} y2={4} />
                      <line x1={6} y1={20} x2={6} y2={14} />
                    </svg>
                  </div>
                  <span className="text-slate-300">5+ साल का ट्रेडिंग अनुभव</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                  </div>
                  <span className="text-slate-300">10,000+ students को सिखाया</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9V2h12v7" />
                      <path d="M6 18h12" />
                      <path d="M6 14h12" />
                      <path d="M6 22v-4" />
                      <path d="M18 22v-4" />
                    </svg>
                  </div>
                  <span className="text-slate-300">Certified Market Analyst</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                  </div>
                  <span className="text-slate-300">प्रमाणित शिक्षण कार्यक्रम</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;

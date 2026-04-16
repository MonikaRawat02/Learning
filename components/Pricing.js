import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Course Pricing
          </h2>
          <p className="text-slate-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            एक बार का निवेश, जीवनभर की शिक्षा
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl border-2 border-emerald-500/50 p-8 lg:p-12 overflow-hidden">
          {/* Glow Effect - Inside the card */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-emerald-400/10 opacity-20 blur-3xl"></div>

          <div className="relative">
            {/* Limited Batch Badge */}
            <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600/20 to-orange-500/20 border border-orange-500/50 rounded-full px-6 py-3 mb-8 w-fit mx-auto">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span className="text-orange-300 font-semibold">Limited Batch Access</span>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-slate-400 text-2xl line-through">₹9,999</span>
                <span className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">₹4,999</span>
              </div>
              <p className="text-slate-400 text-center mb-16 text-lg">One-time payment • Lifetime access</p>
            </div>

            {/* What's Included Header */}
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              कोर्स में शामिल है:
            </h3>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="text-slate-300">सभी 5 कोर्स मॉड्यूल</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="text-slate-300">50+ वीडियो lessons</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="text-slate-300">Private community access</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="text-slate-300">Weekly market insights</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="text-slate-300">Trade review sessions</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="text-slate-300">Lifetime access</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="text-slate-300">Mobile और desktop पर उपलब्ध</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="text-slate-300">Certificate of completion</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white py-6 rounded-xl text-xl font-semibold transition-all duration-300 shadow-emerald-500/25 hover:shadow-emerald-500/50 mb-8 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              अभी नामांकन करें
            </button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                <span className="text-slate-400 text-sm">Secure payment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                <span className="text-slate-400 text-sm">Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                <span className="text-slate-400 text-sm">No hidden charges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-lg mb-4">
            सभी भुगतान सुरक्षित और encrypted हैं
          </p>
          <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
            <span>UPI Accepted</span>
            <span>•</span>
            <span>Cards Accepted</span>
            <span>•</span>
            <span>Net Banking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

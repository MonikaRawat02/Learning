import React from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';

const features = [
  "Module 1: Trading Basics",
  "Module 2: Strategy System",
  "Module 3: Risk Management",
  "Module 4: Trading Psychology",
  "Module 5: Live Market Breakdown",
  "Private Community Access",
  "Weekly Market Insights",
  "Trade Review Sessions",
  "Lifetime Access to All Content",
  "Future Course Updates Included"
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#020617] overflow-hidden font-sans">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E4E7EB] mb-4 tracking-tight">
            Get Full Access
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            One-time payment for lifetime access to the complete trading education program
          </p>
        </div>

        {/* Pricing Card Area - Using exact 3-div structure from inspector */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* DIV 1: Absolute Glow Background */}
          <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-3xl"></div>

          {/* DIV 2: Relative Card Wrapper with Gradient and Border */}
          <div className="relative bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-emerald-500/5 border-2 border-emerald-500/30 rounded-2xl p-8 md:p-12">
            
            {/* DIV 3: Content Container (Implicit in structure) */}
            <div className="relative">
              {/* Limited Batch Access Badge */}
              <div className="flex items-center justify-center gap-2 mb-8 p-3 rounded-lg bg-primary/10 border border-primary/30 bg-emerald-500/10 border border-emerald-500/30 ">
                <Clock className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-500 text-sm tracking-wide">Limited batch access</span>
              </div>

              {/* Price Section */}
              <div className="text-center mb-10">
                <div className="text-5xl md:text-6xl  text-[#E4E7EB] mb-2 tracking-tighter">
                  ₹4,999
                </div>
                <p className="text-[#9CA3AF] text-base font-normal">One-time payment • Lifetime access</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-6 h-6 text-emerald-500" />
                    </div>
                    <span className="text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="max-w-md mx-auto">
                <button className="w-full py-5 bg-[#10b981] hover:bg-[#059669] text-slate-950 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-xl shadow-[0_10px_30px_rgba(16,185,129,0.1)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                  Enroll Now
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer Text */}
              <div className="text-center mt-10">
                <p className="text-sm text-[#9CA3AF] font-normal">
                  Secure payment • Instant access • Educational purposes only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

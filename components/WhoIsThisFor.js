import React from "react";

const whoIsThisFor = [
  {
    title: "Beginners",
    description: "जो लोग ट्रेडिंग में नए हैं और शुरुआत से सीखना चाहते हैं।"
  },
  {
    title: "Struggling Traders",
    description: "जो ट्रेडर्स संघर्ष कर रहे हैं और अपने परिणामों को सुधारना चाहते हैं।"
  },
  {
    title: "Structured Approach Seekers",
    description: "जो लोग एक संरचित और व्यवस्थित दृष्टिकोण चाहते हैं।"
  }
];

const WhoIsThisFor = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            यह कोर्स किसके लिए है?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            यदि आप इनमें से किसी भी श्रेणी में आते हैं, तो यह कोर्स आपके लिए है
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {whoIsThisFor.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20"
            >
              <div className="flex items-center gap-4">
                {/* Checkmark Icon */}
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;

import React from "react";

const modules = [
  {
    number: "1",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Module 1: Trading Basics",
    description: "ट्रेडिंग की बुनियादी समझ, मार्केट स्ट्रक्चर, और महत्वपूर्ण अवधारणाएँ।"
  },
  {
    number: "2",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Module 2: Strategy System",
    description: "प्रभावी ट्रेडिंग रणनीतियाँ, एंट्री और एग्जिट पॉइंट्स की पहचान।"
  },
  {
    number: "3",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Module 3: Risk Management",
    description: "जोखिम प्रबंधन तकनीक, पोजीशन साइजिंग, और पूंजी संरक्षण।"
  },
  {
    number: "4",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 3.1-2.5 7.7-9 12-6.5-4.3-9-8.9-9-12a9 9 0 0 1 9-9z" />
        <path d="M12 2v9" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
    title: "Module 4: Psychology",
    description: "ट्रेडिंग मनोविज्ञान, भावनात्मक नियंत्रण, और अनुशासन बनाए रखना।"
  },
  {
    number: "5",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1={18} y1={20} x2={18} y2={10} />
        <line x1={12} y1={20} x2={12} y2={4} />
        <line x1={6} y1={20} x2={6} y2={14} />
      </svg>
    ),
    title: "Module 5: Live Market Breakdown",
    description: "लाइव मार्केट विश्लेषण, रियल-टाइम चार्ट रीडिंग और प्रैक्टिकल उदाहरण।"
  }
];

const CourseModules = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
            कोर्स मॉड्यूल
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            पाँच व्यापक मॉड्यूल जो आपको शुरुआत से विशेषज्ञता तक ले जाएंगे
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/6 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 transition-all duration-300 hover:scale-105 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white text-xl font-bold flex items-center justify-center shadow-lg">
                {module.number}
              </div>

              {/* Icon Container */}
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 text-emerald-400">
                {module.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;

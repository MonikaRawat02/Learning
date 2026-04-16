import React from "react";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
        <rect x={9} y={9} width={6} height={6} />
        <line x1={9} y1={1} x2={9} y2={4} />
        <line x1={15} y1={1} x2={15} y2={4} />
        <line x1={9} y1={20} x2={9} y2={23} />
        <line x1={15} y1={20} x2={15} y2={23} />
        <line x1={20} y1={9} x2={23} y2={9} />
        <line x1={20} y1={14} x2={23} y2={14} />
        <line x1={1} y1={9} x2={4} y2={9} />
        <line x1={1} y1={14} x2={4} y2={14} />
      </svg>
    ),
    title: "Step-by-step System",
    description: "चरण-दर-चरण प्रणाली से शुरुआत से लेकर उन्नत स्तर तक सीखें।"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Risk Management Focus",
    description: "अपने पूंजी की सुरक्षा के लिए जोखिम प्रबंधन रणनीतियाँ सीखें।"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1={18} y1={20} x2={18} y2={10} />
        <line x1={12} y1={20} x2={12} y2={4} />
        <line x1={6} y1={20} x2={6} y2={14} />
      </svg>
    ),
    title: "Real Chart Examples",
    description: "वास्तविक चार्ट उदाहरणों के साथ व्यावहारिक शिक्षा प्राप्त करें।"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Structured Learning",
    description: "संरचित पाठ्यक्रम के साथ प्रत्येक अवधारणा को गहराई से समझें।"
  }
];

const WhyThisCourse = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            यह कोर्स क्यों?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center mb-16">
            एक संपूर्ण शिक्षा प्रणाली जो आपको सफल ट्रेडर बनने में मदद करेगी
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 group"
            >
              {/* Icon Container */}
              <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisCourse;

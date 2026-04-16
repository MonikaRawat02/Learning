import React from "react";

const bonuses = [
  {
    number: "#1",
    icon: (
      <svg className="lucide lucide-users w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Private Community",
    description: "एक exclusive community में शामिल हों जहाँ आप fellow traders से connect कर सकते हैं और अनुभव साझा कर सकते हैं।"
  },
  {
    number: "#2",
    icon: (
      <svg className="lucide lucide-bar-chart-2 w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1={18} y1={20} x2={18} y2={10} />
        <line x1={12} y1={20} x2={12} y2={4} />
        <line x1={6} y1={20} x2={6} y2={14} />
      </svg>
    ),
    title: "Weekly Market Insights",
    description: "हर सप्ताह market analysis और insights प्राप्त करें जो आपको current trends को समझने में मदद करेंगे।"
  },
  {
    number: "#3",
    icon: (
      <svg className="lucide lucide-message-circle w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    title: "Trade Review Sessions",
    description: "अपने trades की review करें और expert feedback प्राप्त करें, ताकि आप अपनी गलतियों से सीख सकें।"
  }
];

const Bonuses = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Exclusive Bonuses
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            कोर्स के साथ मिलने वाले अतिरिक्त लाभ
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-emerald-900/30 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group hover:scale-105"
            >
              {/* Badge - Positioned outside the card */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/50">
                BONUS {bonus.number}
              </div>

              {/* Icon Container */}
              <div className="mt-6 bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-500/20 transition-colors">
                {bonus.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">
                {bonus.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed text-center">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;

import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Beginner Trader",
    quote: "इस कोर्स ने मुझे ट्रेडिंग की बुनियादी समझ दी। अब मैं आत्मविश्वास के साथ मार्केट को समझ सकता हूँ।"
  },
  {
    name: "Priya Patel",
    role: "Part-time Trader",
    quote: "Risk management मॉड्यूल बहुत उपयोगी था। मैंने अपनी गलतियों को कम किया है और बेहतर निर्णय ले रही हूँ।"
  },
  {
    name: "Amit Kumar",
    role: "Student",
    quote: "संरचित approach और Hindi में समझाया गया content बहुत helpful है। Live market examples से काफी कुछ सीखा।"
  },
  {
    name: "Neha Singh",
    role: "Working Professional",
    quote: "Psychology module ने मुझे emotional control सिखाया। अब भावनाओं पर कंट्रोल करके ट्रेड करता हूँ।"
  },
  {
    name: "Vikram Desai",
    role: "Aspiring Trader",
    quote: "Course की quality और instructor का experience दोनों excellent है!"
  },
  {
    name: "Anjali Mehta",
    role: "New Trader",
    quote: "Lifetime access और community support बहुत valuable है।"
  }
];

const StarRating = () => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Students की राय
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto text-center">
            हमारे छात्रों के अनुभव जानें
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-xl border border-transparent hover:border-emerald-500/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <svg className="lucide lucide-quote absolute top-6 right-6 w-10 h-10 text-emerald-500/20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Star Rating */}
              <StarRating />

              {/* Quote */}
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="border-t border-slate-700 pt-4">
                <h4 className="text-white font-semibold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-emerald-400 text-sm mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-slate-500 text-sm mt-12">
          * सभी testimonials सीखने के अनुभव पर आधारित हैं। कोई profit guarantee नहीं है।
        </p>
      </div>
    </section>
  );
};

export default Testimonials;

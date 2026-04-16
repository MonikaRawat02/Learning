import React from 'react';
import { BookOpen, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
    title: "Beginner Friendly",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    title: "Structured Learning",
  },
  {
    icon: <Users className="w-5 h-5 text-emerald-400" />,
    title: "100+ Learners",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[#0a0a0f] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1767424196045-030bde122aa3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRyYWRpbmclMjBjaGFydHxlbnwwfHx8fDE2ODk4NzQ0MzA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Trading Chart"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 to-[#0a0a0f]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 pb-16 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
            Learn a Structured Trading System
          </h1>
          
          {/* Subtitle in Green */}
          <p className="text-2xl md:text-3xl text-emerald-400 mb-4">
            (Free Training in Hindi)
          </p>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Step-by-step training to understand market structure, risk management, and disciplined trading.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button
  onClick={() => window.open("http://o2helpvip.com/", "_blank")}
  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg transition-colors"
>
  Register for Free Training
</button>
            
 <button
  onClick={() => window.open("https://t.me/o2help", "_blank")}
  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition-colors"
>
  Join Free Telegram
</button>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <span className="text-white font-medium">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

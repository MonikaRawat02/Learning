import React from 'react';
import { Users, MessageCircle, BookOpen, TrendingUp, Send } from 'lucide-react';

const communityFeatures = [
  {
    icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
    title: "Market Discussions",
    description: "Daily market insights and analysis",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    title: "Learning Insights",
    description: "Regular educational content and tips",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    title: "Trade Breakdowns",
    description: "Educational analysis of trading setups",
  },
];

const TelegramSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0f1729]">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
        {/* Main Icon */}
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-10 h-10 text-white"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl text-center mb-6 text-white">
          Join Our Free Telegram Community
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
          Connect with fellow learners and get daily trading insights
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {communityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
         </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => window.open("https://t.me/o2help", "_blank")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Join Free Telegram
          </button>
        </div>
      </div>
    </section>
  );
};

export default TelegramSection;

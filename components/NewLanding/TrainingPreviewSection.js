import React from 'react';
import { Play } from 'lucide-react';

const TrainingPreviewSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl text-center mb-12">
          Training Preview
        </h2>
        
        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
            {/* YouTube Video Embed */}
            <iframe
              src="https://www.youtube.com/embed/ssskIvrfEhU"
              title="Training Preview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => window.open("http://o2helpvip.com/", "_blank")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Access Full Training Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPreviewSection;

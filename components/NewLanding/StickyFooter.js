import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const StickyFooter = () => {
  return (
    <>
      {/* Floating Chat Button */}
      <a 
        href="https://t.me/o2help" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all z-50 hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      
      {/* Fixed Register Bar - Always visible when scrolling */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f] border-t border-gray-800 z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
          <p className="text-white text-lg">
            Ready to start learning? 
          </p>
          <p className="text-gray-400 text-sm">
            Join our free training in Hindi
          </p>
          </div>
         <button
  onClick={() => window.open("http://o2helpvip.com/", "_blank")}
  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg text-lg transition-colors flex items-center gap-2"
>
  Register Now
  <ArrowRight className="w-5 h-5" />
</button>
        </div>
      </div>
      
    </>
  );
};

export default StickyFooter;

import React from 'react';
import { Info } from 'lucide-react';

const TradingGuideFooter = () => {
  return (
    <footer className="bg-[#0f172a] py-12 px-6 text-slate-400">
      <div className="max-w-4xl mx-auto">
        {/* Disclaimer Box */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8 flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white font-bold mb-2">Disclaimer</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Trading involves financial risk. This page is for educational purposes only. Users should do their own research. Past performance does not guarantee future results. Only invest what you can afford to lose. Always practice with a demo account before trading with real money.
            </p>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="text-center space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Trading Education. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            This is an educational resource and affiliate partnership.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TradingGuideFooter;

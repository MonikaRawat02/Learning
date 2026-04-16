import React from 'react';
import { Shield } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Disclaimer Box */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-yellow-200 leading-relaxed">
              <span className="text-yellow-400 font-medium">Disclaimer:</span> Trading involves financial risk. This training is for educational purposes only. Past performance does not guarantee future results. Please understand the risks before trading.
            </p>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
          <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Privacy Policy
          </a>
          <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Terms & Conditions
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © 2026 Trading Education. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

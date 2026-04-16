import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Disclaimer Section */}
        <div className="bg-slate-800/50 border border-slate-800 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-primary mt-0.5" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg text-[#E4E7EB] mb-2">Important Disclaimer</h3>
              <p className="text-muted-foreground leading-relaxed">
                This course is for educational purposes only. Trading involves financial risk and is not suitable for everyone. Past performance does not guarantee future results. You should carefully consider your financial situation and consult with a financial advisor before engaging in trading activities. We do not provide financial advice, and this course does not guarantee profits or income.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg text-white mb-4">Complete Trading Course</h3>
            <p className="text-sm">
              A comprehensive educational program designed to help you understand trading fundamentals, risk management, and disciplined execution.
            </p>
          </div>
          <div>
            <h3 className="text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-white mb-4">Contact</h3>
            <p className="text-sm">
              Email: support@tradingcourse.com
            </p>
            <p className="text-sm">
              Response time: Within 24 hours
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Complete Trading Course. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Enroll Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group flex items-center justify-center gap-2 px-6 py-3 bg-[#10b981] text-white font-bold rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
          <span>Enroll Now</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

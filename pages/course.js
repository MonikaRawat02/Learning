
import Head from 'next/head';
import HeroSection from '../components/Course/HeroSection';
import WhyThisCourseSection from '../components/Course/WhyThisCourseSection';
import WhatYouWillLearn from '../components/Course/WhatYouWillLearn';
import WhoThisCourseIsFor from '../components/Course/WhoThisCourseIsFor';
import TestimonialsSection from '../components/Course/TestimonialsSection';
import BonusesSection from '../components/Course/BonusesSection';
import InstructorSection from '../components/Course/InstructorSection';
import PricingSection from '../components/Course/PricingSection';
import FAQSection from '../components/Course/FAQSection';
import FinalCTASection from '../components/Course/FinalCTASection';
import Footer from '../components/Course/Footer';

export default function Course() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Head>
        <title>Complete Trading Course</title>
        <meta name="description" content="A structured program to help you understand trading, risk management, and disciplined execution." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <WhyThisCourseSection />
        <WhatYouWillLearn />
        <WhoThisCourseIsFor />
        <TestimonialsSection />
        <BonusesSection />
        <InstructorSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </div>
  );
}

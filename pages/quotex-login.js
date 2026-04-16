import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/TradingGuide/HeroSection';
import StepsSection from '../components/TradingGuide/StepsSection';
import WhyDemoSection from '../components/TradingGuide/WhyDemoSection';
import PlatformIntroSection from '../components/TradingGuide/PlatformIntroSection';
import ReadyToStartSection from '../components/TradingGuide/ReadyToStartSection';
import StructuredLearningSection from '../components/TradingGuide/StructuredLearningSection';
import ImportantNotesSection from '../components/TradingGuide/ImportantNotesSection';
import TradingGuideFooter from '../components/TradingGuide/TradingGuideFooter';

const TradingGuidePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Head>
        <title>Quotex Login - Trading Guide for Beginners</title>
        <meta name="description" content="Learn how to start trading with Quotex. Step-by-step guide for beginners to open demo accounts and practice trading." />
      </Head>

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Steps Section */}
        <StepsSection />
        
        {/* Why Demo Section */}
        <WhyDemoSection />

        {/* Platform Intro Section */}
        <PlatformIntroSection />

        {/* Ready to Start Section */}
        <ReadyToStartSection />

        {/* Structured Learning Section */}
        <StructuredLearningSection />

        {/* Important Notes Section */}
        <ImportantNotesSection />
      </main>

      {/* Footer */}
      <TradingGuideFooter />
    </div>
  );
};

export default TradingGuidePage;

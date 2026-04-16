import Head from 'next/head';
import HeroSection from '../components/NewLanding/HeroSection';
import ProblemSection from '../components/NewLanding/ProblemSection';
import LearningOutcomesSection from '../components/NewLanding/LearningOutcomesSection';
import TrainingPreviewSection from '../components/NewLanding/TrainingPreviewSection';
import TestimonialsSection from '../components/NewLanding/TestimonialsSection';
import TelegramSection from '../components/NewLanding/TelegramSection';
import FinalCTASection from '../components/NewLanding/FinalCTASection';
import FooterSection from '../components/NewLanding/FooterSection';
import StickyFooter from '../components/NewLanding/StickyFooter';

export default function NewLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Head>
        <title>Learn a Structured Trading System - Free Training in Hindi</title>
        <meta name="description" content="Step-by-step training to understand market structure, risk management, and disciplined trading. Free training in Hindi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <ProblemSection />
        <LearningOutcomesSection />
        <TrainingPreviewSection />
        <TestimonialsSection />
        <TelegramSection />
        <FinalCTASection />
        <FooterSection />
      </main>
      
      <StickyFooter />
    </div>
  );
}

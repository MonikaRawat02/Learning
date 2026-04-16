import Hero from "@/components/Hero";
import WhyThisCourse from "@/components/WhyThisCourse";
import CourseModules from "@/components/CourseModules";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Testimonials from "@/components/Testimonials";
import Bonuses from "@/components/Bonuses";
import Instructor from "@/components/Instructor";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Disclaimer from "@/components/Disclaimer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      <Hero />
      <WhyThisCourse />
      <CourseModules />
      <WhoIsThisFor />
      <Testimonials />
      <Bonuses />
      <Instructor />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Disclaimer />
      <StickyBar />
    </main>
  );
}

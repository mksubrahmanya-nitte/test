import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import AboutSection from '@/components/sections/AboutSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import PartnersMarquee from '@/components/sections/PartnersMarquee';
import SalientFeatures from '@/components/sections/SalientFeatures';
import ProgrammesSection from '@/components/sections/ProgrammesSection';
import FacultySection from '@/components/sections/FacultySection';
import CampusSection from '@/components/sections/CampusSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <LeadershipSection />
      <PartnersMarquee />
      <SalientFeatures />
      <ProgrammesSection />
      <FacultySection />
      <CampusSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

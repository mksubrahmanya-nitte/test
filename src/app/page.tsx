

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgrammesSection from '@/components/sections/ProgrammesSection';
import OurStrengths from '@/components/sections/OurStrengths';
import LeadershipSection from '@/components/sections/LeadershipSection';
import FacultySection from '@/components/sections/FacultySection';
import PartnersSection from '@/components/sections/PartnersSection';
import CampusSection from '@/components/sections/CampusSection';
import SalientFeatures from '@/components/sections/SalientFeatures';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AdmissionPopup from '@/components/layout/AdmissionPopup';

export default function Home() {
  return (
    <>
      <AdmissionPopup />
      <HeroSection />
      <AboutSection />
      <ProgrammesSection />
      <OurStrengths />
      <LeadershipSection />
      <FacultySection />
      <PartnersSection />
      <CampusSection />
      <SalientFeatures />
      <TestimonialsSection />
    </>
  );
}

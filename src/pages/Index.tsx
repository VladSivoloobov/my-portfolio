import { memo } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import ApproachSection from '@/components/sections/ApproachSection';
import HighlightSection from '@/components/sections/HighlightSection';
import BackgroundAnimations from '@/components/sections/BackgroundAnimations';

const Index = () => {
  return (
    <div className='min-h-screen relative overflow-hidden'>
      <BackgroundAnimations />

      <div className='relative z-10 container mx-auto px-4 py-16 max-w-7xl'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ArchitectureSection />
        <ApproachSection />
        <HighlightSection />
      </div>
    </div>
  );
};

export default memo(Index);

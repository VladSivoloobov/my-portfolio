import { memo } from 'react';
import { useBackgroundAnimations } from '@/hooks/animations/useGsapAnimations';

const BackgroundAnimations = () => {
  useBackgroundAnimations();

  return (
    <div className='fixed inset-0 pointer-events-none parallax-bg'>
      <div className='absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-[140px] float-1' />
      <div className='absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-secondary/50 to-primary/40 rounded-full blur-[160px] float-2' />
      <div className='absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-gradient-to-br from-accent/35 to-secondary/35 rounded-full blur-[150px] float-3' />
      <div className='absolute top-40 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-[120px] float-1 [animation-delay:1s]' />
      <div className='absolute bottom-40 left-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-accent/40 to-primary/30 rounded-full blur-[130px] float-2 [animation-delay:2s]' />

      {/* Decorative shapes for glass effect visibility */}
      <div className='absolute top-1/4 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-[80px]' />
      <div className='absolute bottom-1/3 right-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-[90px]' />
    </div>
  );
};

export default memo(BackgroundAnimations);

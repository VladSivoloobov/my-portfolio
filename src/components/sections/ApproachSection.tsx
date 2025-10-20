import { memo, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useStaggerAnimation } from '@/hooks/animations/useGsapAnimations';
import { DEVELOPMENT_APPROACH } from '@/constants/approach';

const ApproachSection = () => {
  const approachRef = useRef<HTMLElement>(null);
  useStaggerAnimation(approachRef, '.approach-card', 0.15);

  return (
    <section ref={approachRef} className='mb-24'>
      <div className='text-center mb-12'>
        <h2 className='text-5xl md:text-6xl font-bold mb-4'>
          <span className='text-gradient'>Мой подход к разработке</span>
        </h2>
        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          Ключевые аспекты, которые делают мои проекты успешными и долговечными
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {DEVELOPMENT_APPROACH.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className='approach-card glass glass-hover group text-center'
            >
              <CardContent className='p-8 space-y-4'>
                <div className='inline-flex p-4 rounded-2xl glass-strong border border-accent/30 group-hover:border-accent/50 transition-all duration-300'>
                  <Icon className='h-10 w-10 text-accent group-hover:scale-125 group-hover:rotate-12 transition-all duration-300' />
                </div>
                <h3 className='text-xl font-bold'>{item.title}</h3>
                <p className='text-foreground/70 leading-relaxed'>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default memo(ApproachSection);

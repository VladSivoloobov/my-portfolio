import { memo, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useStaggerAnimation } from '@/hooks/animations/useGsapAnimations';
import { ARCHITECTURE_PRINCIPLES } from '@/constants/architecture';

const ArchitectureSection = () => {
  const architectureRef = useRef<HTMLElement>(null);
  useStaggerAnimation(architectureRef, '.architecture-card', 0.12);

  return (
    <section ref={architectureRef} className='mb-24'>
      <div className='text-center mb-12'>
        <h2 className='text-5xl md:text-6xl font-bold mb-4'>
          <span className='text-gradient'>Архитектурные принципы</span>
        </h2>
        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          Следую проверенным методологиям и принципам разработки для создания
          качественного и поддерживаемого кода
        </p>
      </div>
      <div className='grid md:grid-cols-2 gap-6'>
        {ARCHITECTURE_PRINCIPLES.map((principle) => {
          const Icon = principle.icon;
          return (
            <Card
              key={principle.title}
              className='architecture-card glass glass-hover group shimmer cursor-pointer'
            >
              <CardContent className='p-8 space-y-4'>
                <div className='flex items-center gap-4'>
                  <div className='p-4 rounded-2xl glass-strong border border-primary/30 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 flex-shrink-0'>
                    <Icon className='h-8 w-8 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300' />
                  </div>
                  <h3 className='text-2xl font-bold group-hover:text-primary transition-colors duration-300'>
                    {principle.title}
                  </h3>
                </div>
                <p className='text-foreground/80 leading-relaxed text-lg'>
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default memo(ArchitectureSection);

import { memo, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useStaggerAnimation } from '@/hooks/animations/useGsapAnimations';
import { PRIMARY_SKILLS, SECONDARY_SKILLS } from '@/constants/skills';

const SkillsSection = () => {
  const primaryRef = useRef<HTMLElement>(null);
  const secondaryRef = useRef<HTMLElement>(null);

  useStaggerAnimation(primaryRef, '.skill-card', 0.08);
  useStaggerAnimation(secondaryRef, '.secondary-card', 0.15);

  return (
    <>
      {/* Primary Skills Section */}
      <section ref={primaryRef} className='mb-24'>
        <div className='text-center mb-12'>
          <h2 className='text-5xl md:text-6xl font-bold mb-4'>
            <span className='text-gradient'>Технический стек</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Глубокое знание современных технологий и инструментов для создания
            высокопроизводительных веб и мобильных приложений
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {PRIMARY_SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className='skill-card glass glass-hover group cursor-pointer'
              >
                <CardContent className='p-8 flex flex-col items-center gap-4'>
                  <div className='p-4 rounded-2xl glass-strong border border-primary/30 group-hover:border-primary/50 transition-all duration-300'>
                    <Icon className='h-8 w-8 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300' />
                  </div>
                  <span className='font-semibold text-center text-lg'>
                    {skill.name}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Secondary Skills Section */}
      <section ref={secondaryRef} className='mb-24'>
        <div className='text-center mb-12'>
          <h2 className='text-5xl md:text-6xl font-bold mb-4'>
            <span className='text-gradient'>Дополнительные языки</span>
          </h2>
          <p className='text-xl text-muted-foreground'>
            Опыт работы с низкоуровневыми языками и нативной разработкой
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {SECONDARY_SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className='secondary-card glass glass-hover group cursor-pointer'
              >
                <CardContent className='p-8 flex items-center gap-6'>
                  <div className='p-4 rounded-2xl glass-strong border border-secondary/30 group-hover:border-secondary/50 transition-all duration-300'>
                    <Icon className='h-10 w-10 text-secondary group-hover:scale-125 transition-all duration-300' />
                  </div>
                  <span className='font-semibold text-2xl'>{skill.name}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default memo(SkillsSection);

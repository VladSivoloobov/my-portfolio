import { memo, useRef } from 'react';
import { Code2, Server, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useSectionAnimation } from '@/hooks/animations/useGsapAnimations';

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);
  useSectionAnimation(aboutRef);

  return (
    <section ref={aboutRef} className='mb-24'>
      <Card className='glass glass-hover overflow-hidden'>
        <CardContent className='p-10 md:p-12'>
          <div className='grid md:grid-cols-2 gap-8 items-start'>
            <div className='space-y-6'>
              <h2 className='text-4xl md:text-5xl font-bold'>
                <span className='text-gradient'>О моем подходе</span>
              </h2>
              <div className='space-y-4 text-foreground/80 leading-relaxed'>
                <p className='text-lg'>
                  За 2+ года разработки я научился не просто писать код, а
                  создавать решения, которые легко поддерживать и
                  масштабировать. Каждый проект для меня - это возможность
                  применить лучшие практики индустрии и создать продукт, которым
                  можно гордиться.
                </p>
                <p className='text-lg'>
                  Моя специализация - это создание сложных веб-приложений на
                  React и Next.js, а также мобильных приложений на React Native.
                  Я глубоко понимаю экосистему JavaScript и умею выбирать
                  оптимальные инструменты для каждой задачи.
                </p>
                <p className='text-lg'>
                  Особое внимание уделяю архитектуре приложений. Применяю
                  Feature-Sliced Design для структурирования кода, следую
                  принципам Clean Code и SOLID. Это позволяет создавать
                  приложения, которые легко тестировать, расширять и
                  поддерживать.
                </p>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='glass-strong p-6 rounded-2xl space-y-3 hover:scale-105 transition-all duration-300 shimmer group cursor-pointer'>
                <div className='flex items-center gap-3'>
                  <div className='p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300'>
                    <Code2 className='h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h3 className='text-xl font-semibold'>Frontend Excellence</h3>
                </div>
                <p className='text-foreground/70'>
                  Создаю интерактивные интерфейсы с фокусом на UX/UI,
                  производительность и доступность. Владею React, Next.js,
                  TypeScript на продвинутом уровне.
                </p>
              </div>
              <div className='glass-strong p-6 rounded-2xl space-y-3 hover:scale-105 transition-all duration-300 shimmer group cursor-pointer'>
                <div className='flex items-center gap-3'>
                  <div className='p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300'>
                    <Server className='h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h3 className='text-xl font-semibold'>Backend Mastery</h3>
                </div>
                <p className='text-foreground/70'>
                  Разрабатываю надежные API на Node.js с использованием Nest.js
                  и Express. Работаю с MongoDB, PostgreSQL, проектирую схемы
                  данных с Prisma.
                </p>
              </div>
              <div className='glass-strong p-6 rounded-2xl space-y-3 hover:scale-105 transition-all duration-300 shimmer group cursor-pointer'>
                <div className='flex items-center gap-3'>
                  <div className='p-3 rounded-xl bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-300'>
                    <Smartphone className='h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h3 className='text-xl font-semibold'>Mobile Development</h3>
                </div>
                <p className='text-foreground/70'>
                  Создаю кроссплатформенные мобильные приложения на React
                  Native. Опыт публикации в App Store и Google Play.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default memo(AboutSection);

import { memo, useRef } from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useSectionAnimation } from '@/hooks/animations/useGsapAnimations';

const HighlightSection = () => {
  const highlightRef = useRef<HTMLElement>(null);
  useSectionAnimation(highlightRef);

  return (
    <section ref={highlightRef}>
      <Card className='glass glass-hover pulse-glow overflow-hidden'>
        <CardContent className='p-12 md:p-16 text-center relative'>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse' />
          <div className='absolute inset-0 shimmer' />
          <div className='relative z-10'>
            <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-xl hover:scale-110 transition-transform duration-300'>
              <Award className='h-10 w-10 text-white' />
            </div>
            <h3 className='text-4xl md:text-5xl font-bold mb-6 text-gradient'>
              Опыт публикации в App Store
            </h3>
            <p className='text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed'>
              Разработал и успешно опубликовал iOS приложение на Swift в App
              Store. Прошел полный цикл разработки: от концепции и
              проектирования до тестирования, оптимизации и релиза. Опыт работы
              с UIKit, SwiftUI, соблюдения гайдлайнов Apple и процесса ревью в
              App Store. Понимаю специфику нативной разработки и требования к
              качеству мобильных приложений.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default memo(HighlightSection);

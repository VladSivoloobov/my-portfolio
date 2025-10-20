import { memo, useRef } from 'react';
import { Mail, Github, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import { useHeroAnimation } from '@/hooks/animations/useGsapAnimations';
import { CONTACTS } from '@/constants/contacts';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  useHeroAnimation(heroRef);

  return (
    <section ref={heroRef} className='mb-24'>
      <Card className='glass glass-hover overflow-hidden shadow-2xl'>
        <CardContent className='p-10 md:p-16'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30'>
                  <span className='text-sm font-medium text-primary animate-pulse'>
                    ●
                  </span>
                  <span className='text-sm font-medium text-primary'>
                    Full Stack Developer
                  </span>
                </div>
                <h1 className='text-6xl md:text-7xl font-bold text-gradient leading-tight'>
                  Создаю будущее
                </h1>
                <p className='text-2xl text-muted-foreground font-light'>
                  2+ года опыта разработки
                </p>
              </div>

              <p className='text-lg leading-relaxed text-foreground/80 max-w-lg'>
                Специализируюсь на Full Stack JavaScript разработке и мобильной
                разработке на React Native. За 2+ года создал множество
                современных, масштабируемых веб и мобильных приложений, следуя
                принципам чистого кода и современным архитектурным подходам.
              </p>

              <div className='flex gap-4 flex-wrap'>
                <Button
                  className='glass-button-primary group relative overflow-hidden'
                  asChild
                >
                  <a href={`mailto:${CONTACTS.email}`}>
                    <span className='absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <span className='relative z-10 flex items-center text-foreground font-semibold'>
                      <Mail className='mr-2 h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300' />
                      Email
                    </span>
                  </a>
                </Button>
                <Button
                  variant='outline'
                  className='glass-button-outline group border-primary/40'
                  asChild
                >
                  <a
                    href={CONTACTS.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <span className='relative z-10 flex items-center'>
                      <Github className='mr-2 h-4 w-4 group-hover:rotate-[360deg] transition-transform duration-700' />
                      GitHub
                    </span>
                  </a>
                </Button>
                <Button
                  variant='outline'
                  className='glass-button-outline group border-accent/40'
                  asChild
                >
                  <a
                    href={CONTACTS.telegram}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <span className='relative z-10 flex items-center'>
                      <Send className='mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300' />
                      Telegram
                    </span>
                  </a>
                </Button>
              </div>
            </div>

            <div className='flex justify-center md:justify-end'>
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500' />
                <div className='absolute inset-0 bg-gradient-to-tl from-accent via-primary to-secondary rounded-3xl blur-2xl opacity-50 animate-pulse' />
                <div className='relative glass-strong border-2 border-white/40 rounded-3xl p-2'>
                  <img
                    src={profilePhoto}
                    alt='Vladislav Sivolobov - Full Stack Developer'
                    className='w-80 h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500'
                    loading='eager'
                    decoding='async'
                    width='320'
                    height='320'
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default memo(HeroSection);

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем плагин один раз
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Общие настройки для оптимизации производительности
const COMMON_SCROLL_TRIGGER_SETTINGS = {
  start: 'top 80%',
  toggleActions: 'play none none reverse',
  // Оптимизация: не пересчитываем размеры слишком часто
  invalidateOnRefresh: false,
};

export const useHeroAnimation = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          // Оптимизация: will-change для GPU acceleration
          willChange: 'transform, opacity',
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export const useSectionAnimation = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            ...COMMON_SCROLL_TRIGGER_SETTINGS,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export const useStaggerAnimation = (
  ref: RefObject<HTMLElement>,
  selector: string,
  stagger: number = 0.1
) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const elements = ref.current?.querySelectorAll(selector);
      if (!elements?.length) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            ...COMMON_SCROLL_TRIGGER_SETTINGS,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, selector, stagger]);
};

// Фоновые анимации - запускаем только один раз
export const useBackgroundAnimations = () => {
  useEffect(() => {
    // Используем более легкие анимации для фоновых элементов
    const floats = [
      { selector: '.float-1', y: -20, x: 15, duration: 4 },
      { selector: '.float-2', y: 20, x: -15, duration: 5 },
      { selector: '.float-3', y: -15, x: 20, duration: 6 },
    ];

    const animations = floats.map(({ selector, y, x, duration }) => {
      const element = document.querySelector(selector);
      if (!element) return null;

      return gsap.to(element, {
        y,
        x,
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        // Оптимизация: используем force3D для GPU acceleration
        force3D: true,
      });
    });

    // Параллакс эффект с уменьшенной интенсивностью для лучшей производительности
    const parallax = gsap.to('.parallax-bg', {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        invalidateOnRefresh: false,
      },
    });

    return () => {
      animations.forEach((anim) => anim?.kill());
      parallax.kill();
    };
  }, []);
};

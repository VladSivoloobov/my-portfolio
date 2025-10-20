import { Lightbulb, Rocket, Package, BookOpen } from 'lucide-react';

export const DEVELOPMENT_APPROACH = [
  {
    title: 'Качество кода',
    icon: Lightbulb,
    description:
      'Пишу чистый, читаемый и поддерживаемый код с использованием TypeScript для типобезопасности. Покрываю критичный функционал тестами.',
  },
  {
    title: 'Производительность',
    icon: Rocket,
    description:
      'Оптимизирую приложения для максимальной скорости работы: code splitting, lazy loading, мемоизация, оптимизация рендеринга React.',
  },
  {
    title: 'Современный стек',
    icon: Package,
    description:
      'Использую актуальные технологии и best practices: хуки React, функциональные компоненты, async/await, ES6+ синтаксис.',
  },
  {
    title: 'Документация',
    icon: BookOpen,
    description:
      'Документирую архитектурные решения и сложную бизнес-логику. Верю в самодокументируемый код с понятными именами и структурой.',
  },
] as const;

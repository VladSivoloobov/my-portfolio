import { Blocks, Sparkles, CheckCircle2, Target } from 'lucide-react';

export const ARCHITECTURE_PRINCIPLES = [
  {
    title: 'Feature-Sliced Design (FSD)',
    icon: Blocks,
    description:
      'Применяю архитектурную методологию FSD для создания масштабируемых и поддерживаемых приложений. Разделение кода на слои (app, pages, widgets, features, entities, shared) обеспечивает четкую структуру и предсказуемость.',
  },
  {
    title: 'Clean Code',
    icon: Sparkles,
    description:
      'Следую принципам чистого кода: понятные имена переменных, короткие функции с одной ответственностью, минимум комментариев благодаря самодокументируемому коду. Код должен читаться как хорошо написанная проза.',
  },
  {
    title: 'SOLID Principles',
    icon: CheckCircle2,
    description:
      'Применяю принципы SOLID в разработке: единственная ответственность, открытость/закрытость, подстановка Лисков, разделение интерфейсов и инверсия зависимостей для создания гибкой архитектуры.',
  },
  {
    title: 'DRY & KISS',
    icon: Target,
    description:
      "Don't Repeat Yourself и Keep It Simple, Stupid - мои ключевые принципы. Избегаю дублирования кода через переиспользуемые компоненты и утилиты. Простота решения всегда в приоритете.",
  },
] as const;

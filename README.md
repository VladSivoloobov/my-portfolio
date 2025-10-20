# 🌟 Frost Glow Showcase

> Современное портфолио Full Stack разработчика с эффектами глассморфизма и плавными анимациями

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 О проекте

Персональное портфолио с современным дизайном, построенное на React и TypeScript. Проект демонстрирует навыки Full Stack разработки с акцентом на производительность и визуальные эффекты.

## ✨ Особенности

- 🎨 **Glassmorphism Design** - Современный стеклянный дизайн с эффектами размытия
- ⚡ **Высокая производительность** - Оптимизирован для быстрой загрузки (FCP < 1.5s)
- 🎬 **GSAP анимации** - Плавные анимации при скролле
- 📱 **Адаптивный дизайн** - Отлично работает на всех устройствах
- 🎯 **Code Splitting** - Автоматическое разделение кода на чанки
- 🔧 **TypeScript** - Полная типизация для надежности кода
- 🎭 **Мемоизация** - Оптимизация рендеринга React компонентов
- 🚀 **Vite** - Молниеносная сборка и HMR

## 🛠️ Технологический стек

### Frontend

- **React 18.3** - Библиотека для построения UI
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - Utility-first CSS фреймворк
- **GSAP** - Профессиональные анимации
- **Radix UI** - Доступные UI компоненты

### Инструменты разработки

- **Vite** - Сборщик нового поколения
- **ESLint** - Линтер для качества кода
- **SWC** - Быстрый компилятор для React

### Оптимизация

- **Terser** - Минификация JavaScript
- **Manual Chunks** - Разделение vendor кода
- **CSS Code Splitting** - Разделение стилей
- **Lazy Loading** - Отложенная загрузка компонентов

## 📦 Установка

```bash
# Клонировать репозиторий
git clone https://github.com/VladSivoloobov/frost-glow-showcase.git

# Перейти в директорию
cd frost-glow-showcase

# Установить зависимости
npm install

# Запустить dev сервер
npm run dev
```

## 🚀 Команды

```bash
# Разработка
npm run dev          # Запуск dev сервера на http://localhost:8080

# Продакшн
npm run build        # Сборка для продакшна
npm run preview      # Предпросмотр продакшн сборки

# Код качество
npm run lint         # Проверка кода с ESLint
```

## 🌐 Деплой на GitHub Pages

Проект автоматически деплоится на GitHub Pages при каждом push в ветку `main`.

### Настройка GitHub Pages

1. Перейдите в Settings → Pages вашего репозитория
2. В разделе "Build and deployment":
   - Source: выберите "GitHub Actions"
3. После первого push в main, сайт будет доступен по адресу:
   ```
   https://vladsivoloobov.github.io/my-portfolio/
   ```

### Ручной деплой

Вы также можете запустить деплой вручную:

1. Перейдите во вкладку "Actions" в GitHub
2. Выберите workflow "Deploy to GitHub Pages"
3. Нажмите "Run workflow"

## 📊 Производительность

- **FCP (First Contentful Paint)**: < 1.5s
- **TTI (Time to Interactive)**: < 3.5s
- **Bundle Size**: ~500KB (gzipped)
- **Lighthouse Score**: 95+

### Оптимизации

✅ Code Splitting на vendor chunks  
✅ Терминация console.log в продакшне  
✅ Оптимизация GSAP анимаций  
✅ Мемоизация React компонентов  
✅ Critical CSS в index.html  
✅ Preconnect для внешних ресурсов  
✅ GPU ускорение анимаций

## 🎨 Дизайн система

### Цветовая палитра

- **Primary**: `#9d87d4` - Фиолетовый
- **Secondary**: `#e888a5` - Розовый
- **Accent**: `#7db9d8` - Голубой
- **Background**: Градиентный фон с переходами

### Эффекты

- Glassmorphism с backdrop-filter
- Shimmer эффект на карточках
- Pulse glow для акцентов
- Плавные hover трансформации
- Градиентные анимации текста

## 📂 Структура проекта

```
src/
├── components/
│   ├── sections/          # Секции страницы
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ...
│   └── ui/                # UI компоненты (shadcn/ui)
├── constants/             # Константы и данные
│   ├── skills.ts
│   ├── architecture.ts
│   └── contacts.ts
├── hooks/
│   └── animations/        # Хуки для анимаций
│       └── useGsapAnimations.ts
└── pages/                 # Страницы
    └── Index.tsx
```

## 🏗️ Архитектура

Проект следует современным принципам разработки:

- **Clean Code** - Читаемый и поддерживаемый код
- **SOLID** - Принципы ООП
- **DRY** - Переиспользование кода
- **Component-Based** - Модульная архитектура

## 🌐 Браузерная поддержка

- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)

## 📝 Лицензия

MIT License - можете свободно использовать код для своих проектов

## 👤 Автор

**Vladislav Sivolobov**

- GitHub: [@VladSivoloobov](https://github.com/vladislavsivoloobov)
- Telegram: [@vladsivolobov](https://t.me/vladsivolobov)
- Email: vlad.v@comradeweb.com

## 🙏 Благодарности

- [Radix UI](https://www.radix-ui.com/) за доступные компоненты
- [GSAP](https://greensock.com/gsap/) за мощные анимации
- [Tailwind CSS](https://tailwindcss.com/) за отличный CSS фреймворк
- [Lucide Icons](https://lucide.dev/) за красивые иконки

---

⭐ Если проект понравился, поставьте звезду!

Made with ❤️ and ☕

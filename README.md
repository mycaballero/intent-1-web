# Intent-1

**Intent-1** is a building and residential complex management system designed to modernize and streamline property administration through an intuitive, efficient, and user-friendly platform.

> The name "Intent-1" represents the **first solid intention** to create a **comprehensive technological solution** for the real estate sector, providing both administrators and residents with a seamless and modern experience.

---

## 🚀 Tech Stack

- ⚙️ **Vue 3** + TypeScript
- 💅 **Tailwind CSS**
- 🧩 **Vue Router**
- 🧠 **Pinia** (State Management)
- 🌐 **Vue I18n** (Internationalization)
- 📋 **Vee-Validate** + **Yup** (Form validation)
- 🎞 **Motion-V** (Modern, declarative animations)
- ⚙️ **Vite** (Build tool and dev server)
- 🧰 **VueUse** (Advanced composition utilities)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mycaballero/intent-1-web.git
cd intent-1-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file based on `.env.example` (not available yet, coming soon).

```bash
cp .env.example .env
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── assets/                     # Static files (images, SVGs, etc.)
├── components/                # Reusable Vue components
│   ├── global/                # Shared and base components
│   │   ├── animations/        # Animation helpers and base motion component
│   │   ├── buttons/           # Reusable buttons
│   │   └── inputs/            # Custom input fields
│   ├── private/               # Components for authenticated views
│   └── public/                # Public components (unauthenticated views)
│       └── auth/              # Login, password recovery, etc.
├── helpers/                   # General-purpose utility functions
├── layout/                    # Reusable layout components
├── locales/                   # i18n translation files (e.g., `es.json`, `en.json`)
├── middleware/                # Custom route middleware functions
├── plugins/                   # Global plugins (e.g., useFetch)
├── routes/                    # Vue Router configuration and route guards
├── store/                     # Pinia global state stores
├── styles/                    # Global styling and animation setup
│   └── animations/            # Animation variants and configurations
├── utils/                     # General utilities and constants
├── validations/               # Validation schemas using Yup + Vee-Validate
├── App.vue                    # Root Vue component
├── main.ts                    # Application entry point
└── vite-env.d.ts              # Global type declarations for Vite

```

---

## 🌍 Internationalization

The project supports multiple languages using [`vue-i18n`](https://vue-i18n.intlify.dev/guide/essentials/started.html). Spanish (`es`) is currently the default language. Translation files are located under `src/locales`.


---

## ✨ Animations

This project uses [`motion-v`](https://motion.unovue.com/components/motion) for declarative and centralized animations. Variants are defined in `src/styles/animations` and used via the `<BaseMotion>` component.

```vue
<BaseMotion variant="fadeInUp">
  <div>Animated content</div>
</BaseMotion>
```

---

## ✅ Standards & Conventions

- Using  with TypeScript exclusively
- Modular feature-based architecture
- Tailwind configured with a clear visual design guide
- Reusable and decoupled animation system
- Dark mode support planned
- Designed for **scalability** and team collaboration

---

## 📌 Roadmap (Upcoming Features)

- 🔐 Integration with backend services (API)
- 👥 Role-based authentication system
- 🔔 Notification system (UI & backend-driven)
- 🏠 Admin panel for both residents and administrators
- 📱 Progressive Web App (PWA) support and responsive mobile version

---

## 📄 License

This project is private. All rights reserved to the original author.

---

## 🤝 Author

Crafted with care by [Miguel Caballero](https://github.com/mycaballero).\
**Barranquilla, Colombia 🇨🇴**

---


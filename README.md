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
git clone https://github.com/your-username/intent-1.git
cd intent-1
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
│
├── assets/               # Images and media assets
├── components/           # Global and domain-specific components
│   ├── global/           # E.g. BaseTextInput, BaseButton
│   └── public/           # E.g. Login, ForgotPassword
├── layout/               # Layouts (GuestLayout, AppLayout, etc.)
├── middleware/           # Route middleware
├── routes/               # Router configuration
├── store/                # Global state with Pinia
├── locales/              # i18n translation files
├── styles/
│   └── animations/       # Centralized animation config with motion-v
│       └── config.ts
├── plugins/              # Global plugins (e.g. useFetch)
├── App.vue               # Root component
├── main.ts               # App entry point
└── vite-env.d.ts         # Global typings for Vite
```

---

## 🌍 Internationalization

The project supports multiple languages using **vue-i18n**. Spanish (`es`) is currently the default language. Translation files are located under `src/locales`.

---

## ✨ Animations

This project uses [`motion-v`](https://motion.dev/docs/vue-motion-component) for declarative and centralized animations. Variants are defined in `src/styles/animations/config.ts` and used via the `<BaseMotion>` component.

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

## 📌 Roadmap

-

---

## 📄 License

This project is private. All rights reserved to the original author.

---

## 🤝 Author

Crafted with care by [Miguel Caballero](https://github.com/mycaballero).\
**Barranquilla, Colombia 🇨🇴**

---


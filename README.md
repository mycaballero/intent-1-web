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
├── index.html                          # Main HTML file that mounts the Vue app
├── package.json                        # Project metadata, dependencies, and scripts
├── tsconfig.app.json                   # TypeScript configuration for the application
├── tsconfig.json                       # Base TypeScript configuration
├── tsconfig.node.json                  # TypeScript config for Node environment (used by Vite/tools)
├── vite.config.ts                      # Vite configuration file
│
├── public/                             # Static assets served directly without processing
│   └── images/                         # Public images (e.g. backgrounds, logos)
│
└── src/                                # Main application source code
    ├── App.vue                         # Root Vue component
    ├── main.ts                         # Application entry point (mounts Vue app)
    ├── style.css                       # Global styles (Tailwind CSS or other base styles)
    ├── vite-env.d.ts                   # Global type declarations for Vite
    │
    ├── assets/                         # Static assets imported via components (e.g., images, icons)
    │
    ├── components/                     # All Vue components
    │   ├── global/                     # Global components used across the app
    │   │   ├── animations/             # Motion-V base wrapper component
    │   │   │   └── BaseMotion.vue
    │   │   ├── buttons/                # Reusable button components
    │   │   │   └── BaseButton.vue
    │   │   └── inputs/                 # Custom input fields
    │   │       └── BaseTextInput.vue
    │   └── public/                     # Public (unauthenticated) components
    │       └── auth/                   # Authentication views
    │           ├── ChangePassword.vue
    │           ├── ForgotPassword.vue
    │           └── Login.vue
    │
    ├── helpers/                        # General utility functions
    │   ├── translateValidationError.ts # Translates VeeValidate error messages for i18n
    │   └── validationMessage.ts        # Custom error message logic for Yup + i18n
    │
    ├── layout/                         # Page layout wrappers (e.g., GuestLayout)
    │   ├── GuestLayout.vue
    │   └── index.ts                    # Central layout exports
    │
    ├── locales/                        # vue-i18n translation files
    │   └── es.json                     # Spanish language translation
    │
    ├── middleware/                     # Custom route middleware functions
    │   ├── auth.ts                     # Requires authentication
    │   ├── guest.ts                    # Restricts access to guests only
    │   ├── MiddlewareContext.ts        # Type definitions for route context
    │   └── middlewarePipeline.ts       # Composable to chain multiple middleware
    │
    ├── plugins/                        # Custom plugin setups
    │   ├── i18n.ts                     # Initializes vue-i18n
    │   ├── useFetch.ts                 # Custom fetch composable
    │   └── vee-validate.ts             # Initializes vee-validate with config
    │
    ├── routes/                         # Vue Router configuration
    │   └── router.ts                   # Route definitions + guards + middleware
    │
    ├── store/                          # Pinia state management
    │   └── auth.store.ts               # Authentication state: user, tokens, etc.
    │
    ├── styles/                         # Style configuration
    │   └── animations/                 # Central animation system using Motion-V
    │       ├── helpers.ts              # Animation helpers (e.g., stagger, delay)
    │       ├── index.ts                # Animation exports
    │       ├── types.ts                # MotionVariant type definitions
    │       └── variants/               # Grouped animation variants
    │           ├── fade.ts             # Fade animations
    │           ├── slide.ts            # Slide-in/out animations
    │           └── zoom.ts             # Zoom effects
    │
    └── validations/                    # Yup validation schemas
        ├── changePasswordSchema.ts
        ├── forgotPasswordSchema.ts
        └── loginSchema.ts

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
- 📱 Flutter App support and responsive mobile version

---

## 📄 License

This project is private. All rights reserved to the original author.

---

## 🤝 Author

Crafted with care by [Miguel Caballero](https://github.com/mycaballero).\
**Barranquilla, Colombia 🇨🇴**

---


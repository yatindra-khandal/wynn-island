# Wynn Registration App

React + TypeScript project for Wynn Al Marjan Island user registration.  
Built with Vite, Tailwind CSS, and a modular context-based architecture.

## ✨ Features

- ✅ Fully responsive UI using Tailwind CSS utility-first classes
- ✅ Modern architecture with scalable Context + Reducer for state management
- ✅ TypeScript-first development for maintainability and safety
- ✅ Component-driven development with modular directory structure
- ✅ Unit test using Vitest and React Testing Library

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components (buttons, inputs, forms)
    ├── .test/              # Unit test files colocated or centralized
├── context/            # Global registration context (React Context + Reducer)
├── pages/              # Route-level pages (e.g., RegistrationPage)
├── hooks/              # Hooks for reusable logic
├── utils/              # Shared utility functions
├── services/           # Services for API calls
└── App.tsx             # Root app component
```

## 🧠 Why This Architecture?

- **Scalability:** Context + Reducer pattern allows clean state transitions across multiple steps without prop drilling.
- **Testability:** Each step/component is isolated and testable, facilitating unit and integration tests.
- **Separation of Concerns:** Logic, presentation, and context are decoupled for better maintainability.
- **DX-Driven:** Uses Tailwind, TypeScript, Vitest and Vite to optimize developer feedback loop and build performance.

### 💡 Service Layer

The app uses a decoupled `services/` folder that abstracts API interaction using a generic fetch-based client (`comms.ts`). It allows consistent request handling, centralized error management, and secure integration of access tokens via cookies or headers.

- `comms.ts`: Base HTTP client using Fetch (can be swapped with Axios).
- `registrationService.ts`: Specific endpoints for registration, OTP, and verification.

This separation makes the codebase more maintainable, testable, and future-proof.

### 🧪 Mock API Server

A simple Node.js Express server (`server.js`) is provided to simulate backend endpoints like:

- `/register`
- `/request-otp`
- `/verify-otp`
- `/resend-verification-email`

You can run it with:

```bash
node server.js
```

Then set the base URL in `.env`:

```
VITE_API_BASE_URL=http://localhost:4000
```

### ✅ Service Layer Testing

All service functions are unit tested independently from UI, ensuring:

- Correct payloads are sent
- Success/failure responses are handled
- Coverage of all edge cases

## 🚀 Useful Commands

### Install dependencies

```bash
pnpm install
```

### Start dev server

```bash
pnpm dev
```

### Start mock API server

```bash
node server.js
```

### Run unit tests

```bash
pnpm test
```

### Run tests with coverage

```bash
pnpm test -- --coverage
```

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

## 🧪 Testing

- **Test Framework:** [Vitest](https://vitest.dev) with JSDOM for browser-like testing
- **Utilities:** `@testing-library/react` for DOM testing, `user-event` for interaction
- **Coverage:** Istanbul via `vitest.config.ts` for accurate code coverage

---

This app is designed for long-term extensibility and developer experience, following modern React best practices.

## ⚙️ CI/CD Setup

This project leverages GitHub Actions for continuous integration and deployment. The pipeline automates testing, linting, and deployment to ensure code quality and rapid delivery.

### Typical Workflow

1. **Push or Pull Request**
   - Runs on every push and pull request to `main` and feature branches.
2. **Lint & Format Check**
   - Ensures code adheres to style guidelines.
3. **Run Unit Tests**
   - Executes all tests with coverage reporting.
4. **Build**
   - Verifies production build success.
5. **Deploy**
   - On successful tests and build, deploys the app to the hosting environment (e.g., Vercel, Netlify, or custom server).

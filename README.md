# AutoImport Frontend

React + Vite customer-facing app for the AutoImport vehicle platform.

## Quick Start

```bash
npm install
cp .env.example .env    # Edit with your API URL and Paystack key
npm run dev             # Opens at http://localhost:3000
```

## Tech Stack

- React 18 + Vite 5
- React Router v6 (navigation)
- Zustand (state management)
- Axios + React Query (API layer)
- Lucide React (icons)

## Project Structure

```
src/
├── api/          # Axios client and endpoint functions
├── components/   # Shared UI components
├── features/     # Feature modules (auth, vehicles, wallet, etc.)
├── hooks/        # Custom React hooks
├── store/        # Zustand global stores
└── utils/        # Helper functions
```

## Deploy

```bash
npm run build     # Output in dist/
npx vercel        # Deploy to Vercel
```

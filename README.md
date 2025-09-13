# Credes Frontend

A minimal, modern, and responsive frontend for the Credes task management project built with Vite + React + TypeScript.

## Features

- ✨ Clean and modern landing page design
- 🎨 Elegant gradient background with subtle animations
- 📱 Fully responsive design for all device sizes
- 🚀 Built with Vite for fast development and optimal builds
- 🎯 TypeScript for better developer experience
- 🔗 Direct link to backend API at [https://credes-backend.onrender.com](https://credes-backend.onrender.com)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Credes_Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Component-specific styles
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── vite-env.d.ts    # Vite environment types
```

## Future Expansion

The codebase is organized for easy extension with:
- Authentication components
- API service layers
- Task management interfaces
- User management features

## Backend API Integration

The application is designed to work with the Credes backend API which provides endpoints for:

- User authentication (`POST /auth/register/`, `POST /auth/login/`)
- Task management (`GET/POST /tasks/`, `GET/PUT/PATCH/DELETE /tasks/<pk>/`)
- Comments (`GET/POST /tasks/<task_id>/comments/`)
- User management (`GET /users/`, `POST /users/<pk>/soft-delete/`)

Backend URL: https://credes-backend.onrender.com

## License

© 2024 Credes. Hosted on [Render](https://render.com)

# Credes Frontend

A minimal, modern, and responsive React frontend for the Credes task management system.

## Features

- Clean, centered landing page with elegant gradient design
- Modern typography and glass-morphism effects
- Responsive design for all screen sizes
- Direct link to backend API at https://credes-backend.onrender.com
- Built with Vite + React for fast development and optimized builds

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Future Integration

The codebase is organized for easy extension with features such as:

- User authentication (register/login)
- Task management interface
- User management
- Comment system

## Backend API Endpoints

The backend provides the following endpoints for future integration:

- `POST /auth/register/` — Register a new user
- `POST /auth/login/` — Obtain JWT token (login)
- `GET/POST /tasks/` — List all tasks (GET) or create new (POST)
- `GET/PUT/PATCH/DELETE /tasks/<pk>/` — Get, update, or delete a specific task
- `GET/POST /tasks/<task_id>/comments/` — List or add comments for a task
- `GET /users/` — List all users
- `POST /users/<pk>/soft-delete/` — Soft delete a user

**Backend base URL:** https://credes-backend.onrender.com

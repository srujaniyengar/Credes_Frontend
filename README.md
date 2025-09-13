# Credes Frontend

A modern, minimal React frontend for the Credes API Management Platform built with Vite.

## Features

- **Modern Design**: Clean, gradient-based UI with glassmorphism effects
- **Responsive**: Mobile-friendly responsive design
- **API Ready**: Pre-configured API client for easy backend integration
- **Extensible**: Modular structure for future feature additions

## Technology Stack

- **React 19**: Latest React with modern hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with gradients and animations
- **ESLint**: Code linting for quality assurance

## API Integration

The project includes a pre-configured API client (`src/api/`) that supports:

- Authentication endpoints (`/auth/register/`, `/auth/login/`)
- Tasks management (`/tasks/`)
- User management (`/users/`)
- Backend URL: `https://credes-backend.onrender.com`

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Development

The app will run on `http://localhost:5173/` in development mode with hot reload enabled.

### Project Structure

```
src/
├── api/           # API configuration and client
│   ├── config.js  # API endpoints and configuration
│   ├── client.js  # API request helpers
│   └── index.js   # API exports
├── assets/        # Static assets
├── App.jsx        # Main application component
├── App.css        # Application styles
├── index.css      # Global styles
└── main.jsx       # Application entry point
```

### Extending the Application

To add new features:

1. **New API endpoints**: Update `src/api/config.js` and add methods to `src/api/client.js`
2. **New components**: Create components in a `src/components/` directory
3. **New pages**: Add routing with React Router and create pages in `src/pages/`
4. **State management**: Consider adding Redux Toolkit or Zustand for complex state

## Deployment

The application builds to the `dist/` directory and can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

MIT License

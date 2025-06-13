# Overview

This is a full-stack web application built with a modern React frontend and Express backend. The application appears to be a personal portfolio website for "Aka", a student from Indonesia who develops WhatsApp bots, web applications, and automation systems. The project uses a monorepo structure with TypeScript throughout, shadcn/ui components, and Drizzle ORM for database operations.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite for development and production builds
- **Animations**: Framer Motion for smooth animations and transitions

## Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

## Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (Neon serverless driver)
- **Schema**: Centralized in `shared/schema.ts` for type safety
- **Migrations**: Drizzle Kit for schema management

## Development Setup
- **Environment**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Error Handling**: Runtime error overlay in development

# Key Components

## Shared Schema (`shared/schema.ts`)
- Defines database schema with Drizzle ORM
- Currently includes users table with id, username, password
- Uses Zod for validation schemas
- Provides TypeScript types for database operations

## Storage Layer (`server/storage.ts`)
- Abstract storage interface (`IStorage`)
- In-memory implementation (`MemStorage`) for development
- CRUD operations for user management
- Designed to be easily swapped with database implementation

## Frontend Pages
- **Home**: Portfolio landing page with sections for Hero, About, Skills, Projects, Contact
- **404**: Custom not-found page with helpful error message

## UI Components
- Complete shadcn/ui component library implementation
- Dark/light theme support with ThemeProvider
- Responsive design with mobile-first approach
- Framer Motion animations for enhanced UX

## API Layer
- RESTful API structure (routes in `server/routes.ts`)
- Error handling middleware
- Request logging with timing information
- Ready for authentication and session management

# Data Flow

1. **Client Requests**: Frontend makes API calls using React Query
2. **Server Routing**: Express routes handle API endpoints (prefixed with `/api`)
3. **Storage Operations**: Controllers use storage interface for data operations
4. **Response**: JSON responses sent back to client
5. **State Management**: React Query manages caching and synchronization

The current implementation uses in-memory storage but is architected to easily integrate with PostgreSQL using the existing Drizzle setup.

# External Dependencies

## Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js for server
- Drizzle ORM with Neon serverless driver

## UI and Styling
- Tailwind CSS for styling
- Radix UI primitives for accessible components
- Framer Motion for animations
- Lucide React for icons

## Development Tools
- Vite for build tooling
- tsx for TypeScript execution
- esbuild for production bundling
- Replit-specific plugins for development environment

## Form and Validation
- React Hook Form with resolvers
- Zod for schema validation
- Date-fns for date manipulation

# Deployment Strategy

## Development
- Runs on Replit with hot reloading
- Vite dev server for frontend (port 5000)
- Express server serves API and static files
- Environment variables for database connection

## Production Build
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server to `dist/index.js`
- Static file serving from built frontend
- Optimized for Replit's autoscale deployment

## Database
- PostgreSQL configured via `DATABASE_URL` environment variable
- Drizzle migrations in `./migrations` directory
- Schema push command available via `npm run db:push`

# Changelog

Changelog:
- June 13, 2025. Initial setup
- June 13, 2025. Updated portfolio with personalized data and mobile optimizations
  - Added typing effect for status (Pelajar, Newbie, Developer)
  - Updated profile photo to user's catbox URL
  - Added hamburger navigation menu for mobile
  - Implemented audio control widget (fixed bottom-right position)
  - Optimized for Vercel deployment with proper configuration
  - Enhanced mobile responsiveness across all components

# User Preferences

Preferred communication style: Simple, everyday language.
Personal data: aka, 15 tahun, Sumatera Barat, "gw hanya pemula 🗿"
Contact: WhatsApp wa.me/6281266950382
Profile photo: https://files.catbox.moe/qfamnx.jpg
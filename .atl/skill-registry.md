# Skill Registry — Portfolio Project

**Last Updated**: 2026-04-04  
**Project**: Portfolio (React + Express → Astro Migration)  
**SDD Mode**: Engram (persistent memory, no openspec directory)

---

## Active Skills

### SDD Workflow
- **sdd-init**: Initialize SDD context — detect stack, conventions, testing capabilities
- **sdd-explore**: Explore and investigate ideas before committing to a change
- **sdd-propose**: Create change proposals with intent, scope, and approach
- **sdd-spec**: Write specifications with requirements and scenarios
- **sdd-design**: Create technical design documents with architecture decisions
- **sdd-tasks**: Break down changes into implementation task checklists
- **sdd-apply**: Implement tasks from the change, writing actual code
- **sdd-verify**: Validate implementation matches specs, design, and tasks
- **sdd-archive**: Sync delta specs to main specs and archive completed changes
- **sdd-onboard**: Guided end-to-end walkthrough of the SDD workflow

### Code Quality & Review
- **judgment-day**: Parallel adversarial review protocol with two independent blind judges

### Development Workflow
- **branch-pr**: PR creation workflow following issue-first enforcement
- **issue-creation**: GitHub issue creation workflow

### Utilities
- **skill-creator**: Create new AI agent skills following the Agent Skills spec
- **skill-registry**: Update the skill registry for the current project

---

## Project Context

### Current Stack (Legacy - To Be Migrated)

**Frontend** (Portfolio-Front-End):
- React 18.2.0 with Vite 4.4.7
- Bootstrap 5.3.1 + React Bootstrap 2.8.0
- React Router 6.14.2
- Axios for API calls
- ESLint with React plugin
- No testing framework detected

**Backend** (Portfolio-BackEnd):
- Express 4.18.2
- MongoDB with Mongoose 6.11.1
- JWT authentication (jsonwebtoken 9.0.0)
- bcryptjs for password hashing
- express-validator for validation
- Multer for file uploads
- Node 22.x runtime
- No testing framework detected

**Architecture Pattern**:
- Backend: MVC-like structure (models, controllers, routes, middleware, validators)
- Frontend: Component-based with views and options folders
- RESTful API with JWT-protected routes
- File storage in `storage/` directory

**API Resources**:
- `/api/auth` — User authentication (login/signup)
- `/api/educacion` — Education entries
- `/api/proyectos` — Project entries
- `/api/experiencia` — Experience entries

**Database Models**:
- User (authentication)
- Proyectos (projects with name, description, date, media, link)
- Educacion (education entries)
- Experiencia (experience entries)

### Target Stack (Migration Goal)

**New Architecture**:
- Astro (latest) as the meta-framework
- Tailwind CSS for styling (dark navy design theme)
- Single unified project (no separate front/back)
- Content Collections for portfolio data (education, projects, experience)
- JWT authentication (maintain existing auth logic)
- MongoDB connection maintained for dynamic content/admin

**Design System**:
- Dark navy color scheme
- Tailwind CSS utility-first approach
- Modern, clean aesthetic
- Responsive design

---

## Conventions

### File Naming
- **Backend (current)**: lowercase files (e.g., `proyectos.js`, `auth.js`)
- **Frontend (current)**: PascalCase for components (e.g., `Category.jsx`, `Skills.jsx`)
- **Frontend (current)**: lowercase for utilities (e.g., `home.jsx`, `menu.jsx`)
- **Target**: Astro conventions — `.astro` components, content collections in `src/content/`

### Code Style
- **Frontend**: ESLint with React recommended rules, prop-types disabled
- **Backend**: CommonJS modules (`require`/`module.exports`)
- **Target**: ES modules (`import`/`export`) for Astro

### API Patterns
- **Current**: Controllers handle business logic, validators use express-validator
- **Current**: JWT tokens via `Authorization: Bearer <token>`
- **Current**: Error handling via `handleError.js` and `handleHttpError`
- **Current**: Mongoose models with timestamps enabled, versionKey disabled

### Component Structure
- **Current Frontend**: Separation between views (`components/views/`) and reusable parts (`components/options/`)
- **Current Frontend**: Route-based views (educacion, experiencia, proyectos, login)

---

## Testing Capabilities

### Current State
- ⚠️ **No testing framework configured** in either frontend or backend
- Backend has placeholder test script: `"test": "echo \"Error: no test specified\" && exit 1"`
- Frontend has ESLint configured for linting, but no unit/integration tests

### Recommended Setup (For Migration)
- **Astro**: Vitest for unit testing, Playwright for E2E
- **API Routes**: Supertest for integration testing
- **Components**: @astro/testing or Vitest with DOM testing utilities

---

## Migration Strategy Notes

1. **Phase 1**: Set up Astro project with Tailwind CSS
2. **Phase 2**: Migrate static content to Content Collections
3. **Phase 3**: Migrate API routes to Astro endpoints or maintain Express API
4. **Phase 4**: Rebuild UI components in Astro with dark navy theme
5. **Phase 5**: Implement authentication flow
6. **Phase 6**: Deploy and sunset legacy apps

**Key Decision Points**:
- Keep MongoDB or migrate to Content Collections + CMS?
- Astro SSR mode or static site with API backend?
- Maintain Express API or migrate to Astro endpoints?

---

## Key File Locations

### Current Structure
```
portfolio/
├── Portfolio-Front-End/
│   ├── src/
│   │   ├── App/App.jsx           # Main routing
│   │   ├── components/
│   │   │   ├── views/            # Page-level components
│   │   │   ├── options/          # Reusable UI components
│   │   │   └── home/             # Home page
│   │   └── main.jsx              # Entry point
│   ├── package.json
│   └── vite.config.js
├── Portfolio-BackEnd/
│   ├── app.js                    # Express server entry
│   ├── models/nosql/             # Mongoose models
│   ├── controllers/              # Business logic
│   ├── routes/                   # API routes
│   ├── middleware/               # Auth & role middleware
│   ├── validators/               # express-validator schemas
│   ├── utils/                    # JWT, error handling, storage
│   ├── config/mongo.js           # DB connection
│   └── package.json
└── .atl/                         # SDD artifacts (this file)
```

### Target Structure (TBD during migration)
```
portfolio/
├── src/
│   ├── pages/                    # Astro pages
│   ├── components/               # Astro components
│   ├── content/                  # Content collections
│   ├── layouts/                  # Layout components
│   └── styles/                   # Tailwind config
├── astro.config.mjs
├── tailwind.config.mjs
└── .atl/                         # SDD artifacts
```

---

## Usage

When starting a new change:
1. Run **sdd-explore** if you need to investigate or clarify requirements
2. Run **sdd-propose** to create a change proposal
3. Run **sdd-spec** to write specifications
4. Run **sdd-design** for technical design
5. Run **sdd-tasks** to break down implementation
6. Run **sdd-apply** to implement
7. Run **sdd-verify** to validate
8. Run **sdd-archive** to complete the change

For code quality reviews, use **judgment-day** to run parallel adversarial review.

For GitHub workflows, use **issue-creation** and **branch-pr**.

---

**Engram Memory**: All SDD context is stored in persistent memory with topic keys:
- `sdd-init/portfolio` — Project context and stack info
- `sdd/portfolio/testing-capabilities` — Testing setup and recommendations

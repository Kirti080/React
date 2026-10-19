# React reviewer notes

## Architecture

This is a small React 19 + Vite single-page employee-management dashboard. The UI is currently implemented in one component (`src/App.jsx`) with static dashboard data defined at module scope, while global styling is imported from `src/index.css` and `src/App.css`. The app is bootstrapped through `src/main.jsx` using `createRoot` and `StrictMode`.

## Conventions

- Use functional React components and JSX; the current feature is rendered by `App()` in `src/App.jsx`.
- Keep display data in arrays and render collections with `.map()`: `employees`, `metrics`, and `teams` are module-level arrays in `src/App.jsx`.
- Every mapped item uses a stable domain key, such as `metric.label`, `employee.id`, or `team.name`; avoid array indexes as keys.
- Use semantic HTML for dashboard structure: `<main>`, `<aside>`, `<nav>`, `<section>`, `<article>`, `<table>`, `<meter>`, and `<button>` are used in `src/App.jsx`.
- Interactive controls should declare button types. Existing buttons use `type="button"` in `src/App.jsx`.
- Accessibility labels are explicit where visual context may be insufficient: the sidebar has `aria-label="Primary"`, the metrics section has `aria-label="Company metrics"`, and the search input has `aria-label="Search employee"`.
- Employee status styling is derived from the display value using lowercase, space-to-hyphen conversion: `employee.status.toLowerCase().replace(' ', '-')` in `src/App.jsx`. New status values need matching CSS classes.
- Follow the existing Vite setup and scripts in `package.json`; linting is provided by `npm run lint` using `oxlint`, and the app uses ES modules (`"type": "module"`).

## Intentional non-standard choices

- The dashboard is a static presentation currently: employee records, metrics, team capacity, and HR actions are hard-coded in `src/App.jsx`. The search field, navigation links, Export button, and Add Employee button have no behavior yet; do not flag the absence of backend/state wiring unless a change claims to implement it.
- The commented-out employee object near the start of `employees` appears to be sample data intentionally disabled, not malformed production data.

## Watch out for

- Preserve stable keys when changing mapped collections; do not introduce index keys for employees, metrics, or teams.
- Keep status values and generated CSS class names synchronized, especially for multi-word statuses such as `On Leave` → `on-leave`.
- Avoid replacing semantic table or meter markup with generic containers without preserving accessibility and responsive behavior.
- New dashboard data should maintain the existing shape consumed by JSX (`id`, `status`, `allocation`, `capacity`, etc.) or update all consumers together.
- Check both `npm run lint` and `npm run build`; Vite configuration is intentionally minimal in `vite.config.js`.
# Architecture Overview

This document provides a high-level overview of the VPS Setup Guide project.

## System Components

### Core Services
- **Documentation Site** (`docs/`) – A VitePress static site that serves the VPS setup guide.

### Supporting Services
- **None** – This is a simple static site with no database, cache, or message broker.

## Process Architecture
```
User Browser → VitePress Dev Server → Markdown/Vue Files
(Development)

User Browser → Web Server (e.g., Nginx) → Pre-built HTML/CSS/JS files
(Production)
```

## Data Flow Examples

### Example: Reading a Chapter
```
User navigates to a URL → VitePress router maps URL to a Markdown file → Markdown is rendered as HTML → User reads the chapter.
```

### Example: Using an Interactive Component
```
User interacts with a Vue component within a Markdown file (e.g., clicks a button) → The Vue component's state is updated and the component re-renders.
```

## Key Abstractions

- **Content:** Markdown files in the `docs/` directory, each representing a chapter or a page.
- **Interactive Components:** Vue.js components in `docs/.vitepress/components/` that can be embedded in Markdown files.
- **Configuration:** The `docs/.vitepress/config.mjs` file, which defines the site's structure, navigation, and theme.

## Authentication & Authorization

- **None** – The site is public and does not have any authentication or authorization.

## Configuration

- **Central settings file:** `docs/.vitepress/config.mjs` with VitePress-driven configuration.
- **Environment variables:** Not used at the moment, but could be used for future features.

## Integration Points

- **None** – The project is self-contained and does not integrate with any external APIs or services.

## Runtime & Operations Notes

- **Development:** The site is served locally using the `vitepress dev` command.
- **Production:** The site is built into static HTML/CSS/JS files using the `vitepress build` command. These files can be served by any static web server.
- **Security:** As a static site, the attack surface is minimal. The main security consideration is to ensure that the server hosting the static files is secure.

## Development Guidelines

### For Developers
- Read this file first to understand the project structure.
- Write content in Markdown files in the `docs/` directory.
- Create reusable interactive components as Vue components in `docs/.vitepress/components/`.
- Update the sidebar in `docs/.vitepress/config.mjs` when adding new chapters.

### For Architects/Tech Leads
- Keep this document up-to-date when the site's structure or technology changes.
- Focus on the overall user experience and content organization.

## How NOT to Use This File

- Don’t duplicate content from the guide itself here.
- Don’t include long code examples; link to files instead.
- Don’t turn this into a deployment guide; create a separate `DEPLOYMENT.md` for that.

## Red Flags

- If the site becomes slow to load, we may need to investigate the size of images or other assets.
- If the content becomes difficult to manage, we may need to consider a more advanced content management system (CMS).

## Related Docs

- Task specs: `comms/tasks/YYYY-MM-DD-*.md`

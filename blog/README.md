# Truong Ma Phi · Personal portfolio

The personal introduction, selected professional work, and public project directory at https://trmaphi.work.

## Local development

```sh
npm ci
npm run dev
```

The site uses Next.js static export. `npm run build` creates `out/` for GitHub Pages; it needs no application server or runtime credentials.

## Checks

```sh
npm test
npm run lint
npm run build
```

## Update the project directory

The directory is a checked-in snapshot of public repositories, with forks labeled separately. Only public repository metadata is stored; it makes no browser-side requests to GitHub.

With GitHub CLI installed and authenticated, run:

```sh
npm run refresh-projects
```

Review and commit `src/data/projects.json`. The refresh script paginates the public repositories API and preserves a small set of README-derived descriptions for repositories with missing metadata. It does not infer authorship from GitHub's fork flag.

Biography, professional work, and contact information are based on https://github.com/trmaphi/trmaphi. Edit `src/app/page.tsx` for these sections.

Pushes to `main` run tests, lint, the static build, and GitHub Pages deployment. Pull requests run the same checks without publishing.

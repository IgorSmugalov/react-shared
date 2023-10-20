# React Shared

Includes a set of frequently used components, utilities and configs:

- **ESLint, StyleLint, Prettier**
- **Storybook**
- **GitHub Actions**: for linting and deploying Storybook to GitHubPages
- **Plop**: utility for automatic generation of components, styles and stories
- **Pre-commit hooks**
- **[WIP] UI-components**

## UI Preview

<span style="font-size:larger;">[Link to Storybook](https://igorsmugalov.github.io/react-shared)</span>

## For local testing

```bash
npm i
npm run storybook
```

## Usage of Plop

Plop.js allows you to automatically generate template files necessary for working with React: get rid of the routine and enjoy the development

- `component-name.tsx` - file with React functional component:
- `component-name.module.scss` - Css module file
- `component-name.stories.tsx` - Storybook file
- `index.ts` - public API

Run Plop and follow instructions:

```bash
npm run plop
```

## Codestyle

For ESLint, StyleLint and Prettier rule check:

```bash
npm run lint
```

For error fixing:

```bash
npm run format
```

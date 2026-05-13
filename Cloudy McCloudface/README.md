# Webflow Cloud + Astro

This is an [Astro](https://astro.build) project bootstrapped with [`webflow cloud init`](https://developers.webflow.com/webflow-cloud/intro).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, export your Webflow components:

```bash
webflow devlink export
```

This will create the `webflow/` directory with your Webflow components and styles.

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.astro`. The page auto-updates as you edit the file.

## Webflow Components

Your Webflow components are exported to `webflow/`. To update them when you make changes in Webflow:

```bash
webflow devlink export
```

Learn more about [Webflow DevLink](https://developers.webflow.com/data/docs/devlink-overview).

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── webflow/              # Webflow components (generated)
└── webflow.json          # Webflow configuration
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `webflow devlink export`  | Export Webflow components to `webflow/`          |
| `webflow cloud deploy`    | Deploy to Webflow Cloud                          |

## Learn More

- [Webflow Cloud Documentation](https://developers.webflow.com/webflow-cloud/intro)
- [Webflow DevLink Documentation](https://developers.webflow.com/data/docs/devlink-overview)
- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)

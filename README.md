This is a reference implementation of <a href="https://webflow.com/devlink" target="_blank" rel="noopener noreferrer">Webflow DevLink</a> for documentation purposes. It is a <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> project bootstrapped with <a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app" target="_blank" rel="noopener noreferrer"><code>create-next-app</code></a>.

The app uses the Next.js **App Router** (`app/`) on **Next.js 16**. DevLink exports land in **`webflow/`** (see `devlink-export.rootDir` in <a href="webflow.json" target="_blank" rel="noopener noreferrer"><code>webflow.json</code></a>); pages import those components (for example `app/page.tsx`).

## Getting Started

### Clone the Webflow Project

In order to use this project, you'll need to clone this Webflow project into your own workspace. <a href="https://webflow.com/made-in-webflow/website/devlink-reference" target="_blank" rel="noopener noreferrer">https://webflow.com/made-in-webflow/website/devlink-reference</a>

<img width="1470" alt="image" src="https://user-images.githubusercontent.com/1051021/217922636-fe237cc7-74b6-482d-8af4-7422e344b18c.png">

### Set up your local environment

Install Webflow CLI (global install is optional; you can also run the CLI via `npx` in the export step below).

```bash
npm install -g @webflow/webflow-cli
```

Log in to Webflow and select your desired workspace from the opened browser window. You can append `--force` to reset any existing authentication.

```bash
npx @webflow/webflow-cli auth login
```

Then, install the needed dependencies.

```bash
npm install
```

Sync all the Webflow components into your local filesystem. Answer the prompts to generate and configure your `webflow.json`.

```bash
npx @webflow/webflow-cli devlink export
```

Select the cloned "DevLink: Weather" site from the sites listed.

Last, run the development server:

```bash
npm run dev
```

Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> with your browser to see the result.

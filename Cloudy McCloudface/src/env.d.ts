/* eslint-disable @typescript-eslint/no-empty-interface */
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

// Webflow CSS imports
declare module "../../webflow/css/global.css" {
  const content: string;
  export default content;
}

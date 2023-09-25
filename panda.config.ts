import { defineConfig } from "@pandacss/dev";
import typographyPreset from "pandacss-preset-typography";

export default defineConfig({
  presets: [
    typographyPreset(),
    // Re-add the panda preset if you want to keep
    // the default keyframes, breakpoints, tokens
    // and textStyles provided by PandaCSS
    "@pandacss/preset-panda",
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
});

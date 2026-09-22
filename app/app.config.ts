export default defineAppConfig({
  ui: {
    /**
     * Nuxt UI v4 resolves `color="…"` against these semantic aliases
     * rather than raw Tailwind palettes, and renamed the `gray` key to
     * `neutral`. Components previously passing color="violet" /
     * color="emerald" / color="white" had no valid token to resolve to.
     */
    colors: {
      primary: "sky",
      secondary: "violet",
      success: "emerald",
      info: "blue",
      warning: "amber",
      error: "rose",
      neutral: "neutral",
    },
  },
});

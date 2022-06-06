import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#5b63f0",
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            gray: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#2e323d",
              700: "#272b34",
              800: "#181a20",
              900: "#0e1015",
            },
          },
        },
      },
    },
  },
  content: {
    liveEdit: false,
  },
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-EN',
      file: 'en-EN.js',
      name: 'English'
    }, {
      code: 'pl',
      iso: 'pl-PL',
      file: 'pl-PL.js',
      name: 'Polski'
    }],
    defaultLocale: 'pl'
  }
});

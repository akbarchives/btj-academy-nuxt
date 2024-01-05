// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
export default {
  head: {
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        integrity:
          'sha384-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        crossorigin: 'anonymous',
      },
    ],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

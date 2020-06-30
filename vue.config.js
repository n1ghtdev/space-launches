module.exports = {
  publicPath: '/space-launches/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/_variables.scss";
          `,
      },
    },
  },
};

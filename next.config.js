const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  trailingSlash: true,
  output: 'export',
  imagesFolder: 'media',
  images: {
    disableStaticImages: true,
  },
/*   webpack(config, options) {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/images', // Output path for the images
          },
        },
      ],
    });

    return config;
  }, */
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
});

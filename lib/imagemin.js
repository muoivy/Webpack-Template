const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/img/**/*.{jpg,png,gif,svg}'], {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.65, 0.8] }),
    imageminGifsicle(),
    imageminSvgo({
      plugins: [{
        removeViewBox: false
      },
      {
        removeMetadata: false
      },
      {
        removeUnknownsAndDefaults: false
      },
      {
        convertShapeToPath: false
      },
      {
        collapseGroups: false
      },
      {
        cleanupIDs: false
      },
      ]
    })
  ],
  replaceOutputDir: output => {
    return output.replace(/img\//, '../dist/assets/img/')
  }
}).then(() => {
  console.log('Images optimized');
});
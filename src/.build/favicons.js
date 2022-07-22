const fs = require('fs');
const path = require('path');
const icongen = require('icon-gen');

const srcfile = path.resolve('src', 'assets', 'favicon.svg');
const outdir = path.resolve('dist', 'assets', 'favicons');

const makeDir = (dirname) => {
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
};

const faviconoptions = {
  report: true,
  ico: {
    name: 'app',
    sizes: [16, 24, 32, 48, 64, 128, 256]
  },
  icns: {
    name: 'app',
    sizes: [16, 32, 64, 128, 256, 512, 1024]
  },
  favicon: {
    name: 'favicon-',
    pngSizes: [32, 57, 76, 96, 128, 144, 192, 228],
    icoSizes: [16, 24, 32, 48, 64]
  }
}

makeDir(outdir);
icongen(srcfile, outdir, faviconoptions)  
  .then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })
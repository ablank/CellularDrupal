const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcdir = path.resolve('src', 'assets');
const distdir = path.resolve('dist', 'assets');

const makeDir = (dirname) => {
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
};

const err = (error) => {
  console.error(error);
};

const processIcon = async (imagepath, name) => {
  const destination = path.join(distdir, 'icons', 'png');

  makeDir(destination);
  process.chdir(destination);
  try {
    await sharp(path.resolve(imagepath, name))
      .png()
      .toFile(path.resolve(destination, name.replace(/.svg/, '.png')))
      .finally((data) => {
        if(name === '**/*.svg')
        console.log(`${name.replace(/.svg/, '.png')} created`);
      });
  } catch (e) {
    err(e);
  }
};

// Process icons
path.join(srcdir, 'icons', 'svg');
// Process icons
fs.readdir(srcdir, (e, files) => {
  files.forEach((svg) => {
    processIcon(srcdir, svg);
  });
});

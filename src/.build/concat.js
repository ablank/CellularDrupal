const path = require('path');
const fs = require('fs');
const concat = require('concat');
const glob = require('glob');
const distdir = path.resolve('dist', 'js');
const distfile = path.resolve(distdir, 'bundle.js');

const makeDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

makeDir(distdir);

const read = (fName) => {
  new Promise((res, rej) => {
    fs.readFile(path.resolve(fName), (err, str) => {
      if (err) rej(err);
      res(str);
    });
  });
};
const write = (fName, str) => {
  new Promise((res, rej) => {
    fs.writeFile(path.resolve(fName), str, (err) => {
      if (err) return rej(err);
      return res(str);
    });
  });
};

glob('**/*/dist/js/**/*.min.js', {}, (err, files) => {
  concat(files)
    .then((data) => {
      console.log(`Data: ${data}`);
      write(distfile, data);
      console.log(`\n${distfile} created\n`);
    })
    .catch((err) => {
      console.error(err);
    });
});

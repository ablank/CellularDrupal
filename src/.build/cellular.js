const path = require('path');
const fs = require('fs');
const concat = require('concat');

const filename = 'jquery.cellular-ui.js';
const distPath = path.resolve('src', 'js', '_lib', filename);

let prepend = '(function ($) {';
let append = 'jQuery.fn.extend(cellular);})(jQuery);';

const components = [
  '_init',
  'functions',
  'body',
  'jAccordion',
  'jCard',
  'jFormal',
  'jMmenu',
  'jScrolli',
  'jSocial',
  'jTabs',
];

const componentPath = components.map((name) => {
  name = `cellular.${name}.js`;
  return path.resolve('src', 'js', 'components', 'cellular-ui', name);
});

const read = (fName) =>
  new Promise((res, rej) => {
    fs.readFile(path.resolve(fName), (err, str) => {
      if (err) rej(err);
      res(str);
    });
  });

const write = (fName, str) =>
  new Promise((res, rej) => {
    fs.writeFile(path.resolve(fName), str, (err) => {
      if (err) return rej(err);
      return res(str);
    });
  });

concat(componentPath).then((result) => {
  const output = `${prepend}\n${result}\n${append}`;
  write(distPath, output);
});

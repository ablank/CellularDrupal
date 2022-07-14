const path = require('path');
const fs = require('fs');
const concat = require('concat');

const drupal = false;
const filename = drupal
  ? 'drupal9.jquery.cellular-ui.js'
  : 'jquery.cellular-ui.js';
const distPath = path.join(__dirname, '..', 'js', filename);

let prepend = '(function ($) {';
let append = 'jQuery.fn.extend(cellular);})(jQuery);';

if (drupal === true) {
  // Drupal 9
  prepend =
    '(function ($, Drupal, once) {\nDrupal.behaviors.cellular = {\nattach: function (context, settings) {\n';
  append = '},\n\n};\n})(jQuery, Drupal, once);';
  /*
  (function ($, Drupal, once) {
    Drupal.behaviors.cellular = {
      attach: function (context, settings) {
        once('myCustomBehavior', 'input.myCustomBehavior', context).forEach(
          function (element) {
            // Apply the myCustomBehaviour effect to the elements only once.
          },
        );
      },
    };
  })(jQuery, Drupal, once); 
  */

  /* // Drupal7
  prepend = prepend +
    '\nDrupal.behaviors.cellular = {\nattach: function (context, settings) {\n';
  append = '\n//Drupal.behaviors.cellular = {\n}\n}\n;' + append;
*/
  /*
(function ($) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
     $('input.myCustomBehavior', context).once('myCustomBehavior', function () {
      // Apply the myCustomBehaviour effect to the elements only once.
    });
    }
  };
})(jQuery);
  */
}

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

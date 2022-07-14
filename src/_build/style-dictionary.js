/* eslint-disable prettier/prettier */
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const StyleDictionary = require('style-dictionary');

const dirDictionary = path.resolve(__dirname, '..', 'style-dictionary');

// Log available pre-defined formats, transforms and transform groups
// console.log(StyleDictionary);

/**
 * registerFormat
 */
StyleDictionary.registerFormat({
  name: 'sass/cellular',
  formatter: _.template(
    fs.readFileSync(path.resolve(dirDictionary, 'templates', 'sass.js')),
  )
});

StyleDictionary.registerFormat({
  name: 'yaml',
  formatter: _.template(
    fs.readFileSync(path.resolve(dirDictionary, 'templates', 'yaml.js')),
  ),
});

StyleDictionary.registerFormat({
  name: 'yaml/info',
  formatter: _.template(
    fs.readFileSync(path.resolve(dirDictionary, 'templates', 'info.js')),
  ),
});

StyleDictionary.registerFormat({
  name: 'yaml/breakpoint',
  formatter: _.template(
    fs.readFileSync(path.join(dirDictionary, 'templates', 'breakpoint.js')),
  ),
});

StyleDictionary.registerFormat({
  name: 'yaml/layout',
  formatter: _.template(
    fs.readFileSync(path.join(dirDictionary, 'templates', 'layout.js')),
  ),
});

/**
 * registerFilter
StyleDictionary.registerFilter({
  name: 'info',
  matcher: (prop) => prop.attributes.category === 'info'
});
 */

/**
 * registerTransformGroup
 */
StyleDictionary.registerTransformGroup({
  name: 'sass/cellular',
  transforms: StyleDictionary.transformGroup['scss'].concat([]),
});

 StyleDictionary.registerTransformGroup({
  name: 'yaml',
  transforms: ['name/cti/snake', 'attribute/cti'],
});

/**
 * Build
 */

 StyleDictionary.extend(
  path.join(dirDictionary, 'drupal', 'config.json'),
).buildAllPlatforms();

StyleDictionary.extend(
  path.resolve(dirDictionary, '_config.json'),
).buildAllPlatforms();

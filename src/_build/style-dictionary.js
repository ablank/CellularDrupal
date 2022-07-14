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

/**
 * registerTransformGroup
 */
StyleDictionary.registerTransformGroup({
  name: 'sass/cellular',
  transforms: StyleDictionary.transformGroup['scss'].concat([]),
});

/**
 * Build
 */
StyleDictionary.extend(
  path.resolve(dirDictionary, '_config.json'),
).buildAllPlatforms();

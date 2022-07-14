# DO NOT EDIT DIRECTLY 
# @see /src/style-dictionary/drupal/info.json
# @see /src/build/templates/info.js
# Generated on <% print(new Date().toString()) %>
<% 
/**
 * Push all "info" properties to {theme} 
 */
var theme = {};
var allProperties = _.each(allProperties, function (prop) {
  if (prop.attributes.category === 'info') {    
    var rename = prop.name.replace(/info_/, '');
    theme[rename] = prop.value;
  }
});
/**
 * Iterate over specified {theme} prop.
 */
 function iterate(key){
  if (theme[key]) { 
    print(`\n${key}:`);
    _.each(theme[key], function (feature) {
      print(`\n  - ${feature}`);
    });
  } 
}

%>
name: <% print(theme.name) %>
description: <% print(theme.description) %>
version: <% print(theme.version) %>
package: <% print(theme.name) %>
type: theme
base theme: <% print(theme.base_theme); %>
core_version_requirement: ^8 || ^9
<% if (theme.screenshot) { print("\nscreenshot: " + theme.screenshot); } %>
<% iterate('libraries'); %>
<% iterate('features'); %>
<% iterate('ckeditor_stylesheets') %>

regions: <%
  _.each(theme.regions, function (region) {
    // Convert region name from machine to human readable
    var name = region.replace(/_|-/g, ' '),
      splitStr = name.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    name = splitStr.join(' ');
    // Print regions with human string names
    print(`\n  ${region}: '${name}'`);
  }); %>
/*global Handlebars*/
Handlebars.registerHelper('digital', function(options) {
  return options.fn(this).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1&thinsp;');
});
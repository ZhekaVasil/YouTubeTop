/*global Backbone*/
/*global Marionette*/

window.app = {
  application: () => {
    "use strict";
    let marionetteApp = Marionette.Application.extend({
      initialize: function () {
       // console.log('init');
        ytt.router = new app.router();
      },
      onStart: function () {
        //console.log('started');
        ytt.views.page = new app.views.page;
        ytt.views.page.render();
        Backbone.history.start();
      }
    });
    return new marionetteApp;
  }
   ,
  router: {},
  routes: {},
  views: {
    pages: {}
  },
  controllers: {},
  models: {},
  collections: {},
  templates: {}
};


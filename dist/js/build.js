/*global Backbone*/
/*global Marionette*/

window.app = {
  application: () => {
    "use strict";
    let marionetteApp = Marionette.Application.extend({
      initialize: function () {
        console.log('init');
        ytt.router = new app.router();
      },
      onStart: function () {
        console.log('started');
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
  templates: {}
};


window.ytt = {
  routes: {},
  views: {
    pages: {}
  },
  controllers: {},
  models: {},
  templates: {}
};

this["ytt"] = this["ytt"] || {};
this["ytt"]["templates"] = this["ytt"]["templates"] || {};
this["ytt"]["templates"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 class=\"cover-heading\">Cover your page.</h1>\r\n<h1>Hello</h1>\r\n<p class=\"lead\">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>\r\n<p class=\"lead\">\r\n  <a href=\"#\" class=\"btn btn-lg btn-secondary\">Learn more</a>\r\n</p>";
},"useData":true});
this["ytt"]["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"inner\">\r\n  <p>Cover template for <a href=\"https://getbootstrap.com\">Bootstrap</a>, by <a href=\"https://twitter.com/mdo\">@mdo</a>.</p>\r\n</div>";
},"useData":true});
this["ytt"]["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"inner\">\r\n  <h3 class=\"masthead-brand\">Cover</h3>\r\n  <nav class=\"nav nav-masthead\">\r\n    <a class=\"nav-link active\" href=\"./#home\">Home</a>\r\n    <a class=\"nav-link\" href=\"./#features\">Features</a>\r\n    <a class=\"nav-link\" href=\"./#contact\">Contact</a>\r\n  </nav>\r\n</div>";
},"useData":true});
app.routes = {
  homeRoute: function () {
    console.log(Backbone.history.getFragment());
    ytt.views.pages.home = new app.views.pages.home();
    ytt.views.page.mainRegion.show(ytt.views.pages.home);
  },
  featuresRoute: function () {
    console.log(Backbone.history.getFragment());
    ytt.views.pages.features = new app.views.pages.features();
    ytt.views.page.mainRegion.show(ytt.views.pages.features)
  },
  contactRoute: function () {
    console.log(Backbone.history.getFragment());
    ytt.views.pages.contact = new app.views.pages.contact();
    ytt.views.page.mainRegion.show(ytt.views.pages.contact)
  }
};

app.router = Marionette.AppRouter.extend({
  controller: app.routes,
  appRoutes: {
    '': 'homeRoute',
    'features': 'featuresRoute',
    'contact': 'contactRoute',
    '*other': 'homeRoute'
  },
});


/*global Backbone*/
/*global Marionette*/

app.views.page = Marionette.LayoutView.extend({
  el: '#full_page',
  template: '#full_page',
  regions: {
    headerRegion: '#header',
    mainRegion: '#main',
    footerRegion: '#footer'
  },
  onRender: function () {
    ytt.views.header = new app.views.header();
    ytt.views.page.headerRegion.show(ytt.views.header);
    ytt.views.footer = new app.views.footer();
    ytt.views.page.footerRegion.show(ytt.views.footer)
  }

});
app.views.header = Marionette.ItemView.extend({
  template: ytt.templates.header
});
app.views.footer = Marionette.ItemView.extend({
  template: ytt.templates.footer
});
app.views.pages.home = Marionette.LayoutView.extend({
  template: ytt.templates.home
});
app.views.pages.features = Marionette.LayoutView.extend({
  template: '<div><h1>FEATURES</h1></div>'
});
app.views.pages.contact = Marionette.LayoutView.extend({
  template: '<div><h1>CONTACT</h1></div>'
});
/*global Backbone*/
/*global Marionette*/


app.views.page = Marionette.LayoutView.extend({
  el: '#body',
  template: '#body',
  regions: {
    headerRegion: '#header',
    mainRegion: '#main',
    navRegion: '#nav',
    footerRegion: '#footer'
  },
  onRender: function () {
    ytt.views.header = new app.views.header();
    ytt.views.page.headerRegion.show(ytt.views.header);
    ytt.views.nav = new app.views.nav();
    ytt.views.page.navRegion.show(ytt.views.nav);
    ytt.views.footer = new app.views.footer();
    ytt.views.page.footerRegion.show(ytt.views.footer)
  }

});

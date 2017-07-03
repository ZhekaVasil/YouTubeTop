app.routes = {
  views: ()=> {
    //console.log(Backbone.history.getFragment());
    ytt.collections.VideoCollection = new app.collections.VideoCollection();
    ytt.views.page.mainRegion.show( new app.views.pages.views({
      collection: ytt.collections.VideoCollection
    }));
  },
  likes: ()=> {
    //console.log(Backbone.history.getFragment());
    ytt.views.page.mainRegion.show(new app.views.pages.likes())
  },
  trends: ()=> {
    //console.log(Backbone.history.getFragment());
    ytt.views.page.mainRegion.show(new app.views.pages.trends());
  }
};

app.router = Marionette.AppRouter.extend({
  controller: app.routes,
  appRoutes: {
    '': 'views',
    'views': 'views',
    'likes': 'likes',
    'trends': 'trends',
    '*other': 'views'
  },
  execute: (callback, arg, route)=>{
    "use strict";
    //ytt.views.header.showNavActiveLink();
    console.log(route);
    callback();
  }
});


app.views.header = Marionette.ItemView.extend({
  template: ytt.templates.header,
  showNavActiveLink: function () {
    /*$('.nav-masthead .nav-link').each((i, item)=>{
      "use strict";
      $(item).data('page') === Backbone.history.getFragment() ? $(item).addClass('active') : $(item).removeClass('active');
    })*/
  }
});
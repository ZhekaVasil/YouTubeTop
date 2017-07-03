app.views.pages.views = Marionette.LayoutView.extend({
  ui: {
    'cards': '.cards',
    'subNav': '.sub-nav'
  },
  regions: {
    'cards': '.cards'
  },
  events: {
    'click @ui.subNav': 'changeView'
  },

  changeView: function (e) {
    let layout = this;
    let page = $(e.target).data('link');
    if(page){
      $('[data-link]').each((i, item) => {
        let a = $(item);
        a.data('link') === page ? a.parent().addClass('active') : a.parent().removeClass('active')
      });
      this.collection.page = page;
      layout.cards.show(new app.views.loading());
      this.collection.fetch(layout.doAction())
    }
  },

  onRender: function () {
    let layout = this;
    this.collection.fetch(layout.doAction())
  },

  doAction: function () {
    let layout = this;
    return {
      success: function () {
        setTimeout(function () {
          layout.cards.show(new app.views.pages.cards({
            collection: layout.collection
          }))
        }, 2000)
      },
      error: function (res, err) {
        err = err.statusText ? `${err.statusText}<br/>${err.status}` : 'Error';
        layout.ui.cards.html(`<h3>${err}</h3>`)
      }
    }
  },

  template: ytt.templates.views
});

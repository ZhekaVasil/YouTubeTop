app.views.pages.views = Marionette.LayoutView.extend({
  ui: {
    'cards': '.cards'
  },
  regions: {
    'cards': '.cards'
  },

  onRender: function () {
    let layout = this;
    this.collection.fetch({
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
    })
  },

  template: ytt.templates.views
});




app.views.card = Marionette.ItemView.extend({
  className: 'card',
  template: ytt.templates.card
});

app.views.pages.cards = Marionette.CollectionView.extend({
  className:'card-deck', //className:'cards-inner',
  onShow: function () {
    $("img.lazy").lazyload({
      threshold : 0,
      placeholder: './img/placeholder.jpg'
    })
  },
  childView: app.views.card
});
/*global Backbone*/
/*global Marionette*/
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
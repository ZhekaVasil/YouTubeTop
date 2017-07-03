/*global Backbone*/
/*global Marionette*/
app.collections.VideoCollection = Backbone.Collection.extend({
  model: app.models.VideoModel,
  url: './data/topViewsAll.json',
  parse: function (response) {
    return this.page ? response.vid[this.page] : response.vid.hour;
  }
});
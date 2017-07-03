this["ytt"] = this["ytt"] || {};
this["ytt"]["templates"] = this["ytt"]["templates"] || {};
this["ytt"]["templates"]["views"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>Views</div>\r\n<div class=\"cards\">\r\n"
    + ((stack1 = container.invokePartial(partials.loading,depth0,{"name":"loading","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n\r\n";
},"usePartial":true,"useData":true});
this["ytt"]["templates"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.views || (depth0 != null ? depth0.views : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"views","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "\r\n  <a href=\"https://www.youtube.com/watch?v="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n  <img class=\"card-img-top lazy\" data-original=\""
    + alias4(((helper = (helper = helpers.ico || (depth0 != null ? depth0.ico : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ico","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\r\n  </a>\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</h4>\r\n    <p class=\"card-text\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <small class=\"text-muted\">";
  stack1 = ((helper = (helper = helpers.digital || (depth0 != null ? depth0.digital : depth0)) != null ? helper : alias2),(options={"name":"digital","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.digital) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " views</small>\r\n  </div>\r\n\r\n\r\n\r\n";
},"useData":true});
this["ytt"]["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Footer</p>";
},"useData":true});
this["ytt"]["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h3>\r\n  YouTube Top\r\n</h3>";
},"useData":true});
this["ytt"]["templates"]["nav"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul>\r\n  <li><a href=\"#views\">Views</a></li>\r\n  <li><a href=\"#likes\">Likes</a></li>\r\n  <li><a href=\"#trends\">Trends</a></li>\r\n</ul>";
},"useData":true});
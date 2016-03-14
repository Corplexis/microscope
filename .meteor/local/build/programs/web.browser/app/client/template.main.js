(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, HTML.Raw('\n    <header class="navbar navbar-default" role="navigation">\n      <div class="navbar-header">\n        <a class="navbar-brand" href="/">Microscope</a>\n      </div>\n    </header>\n    '), HTML.DIV({
    id: "main"
  }, "\n      ", Spacebars.include(view.lookupTemplate("postsList")), "\n    "), "\n  ");
}));
Meteor.startup(Template.body.renderToDocument);

}).call(this);

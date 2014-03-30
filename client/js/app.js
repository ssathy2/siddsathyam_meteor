Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "homeContainerTemplate"
   * The default action will render the home template
   */
  this.route('home', {
    path: '/',
    template: 'homeContainerTemplate'
  });

  /**
   * The route's name is "blog"
   * The route's path is "/blog"
   * The route's template is inferred to be "blogContainer"
   */
  this.route('blog', {
    path: '/blog',
    template: 'blogContainer'
  });
});

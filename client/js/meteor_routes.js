Router.configure({
  layoutTemplate: 'masterLayout',
  notFoundTemplate: '404Page'
});

Router.map(function () {
  this.route('about', {
    path: '/',
    template: 'aboutTemplate'
  });
});

Router.map(function () {
  this.route('projects', {
    path: '/projects',
    template: 'projectsTemplate'
  });
});

Router.route('/signin', function () {
  this.render('signinTemplate');
});

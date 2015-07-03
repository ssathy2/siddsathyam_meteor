Router.configure({
  layoutTemplate: 'masterLayout',
  notFoundTemplate: '404Page'
});

Router.route('/', function() {
  this.render('aboutTemplate');
});

Router.route('/signin', function () {
  this.render('signinTemplate');
});

Router.route('/projects', function () {
  this.render('projectsTemplate');
});

Router.route('/about', function () {
  this.render('aboutTemplate');
});

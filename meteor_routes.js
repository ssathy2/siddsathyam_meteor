Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'homeContainerTemplate'
  });

  this.route('blog', {
    path: '/blog',
    template: 'blogContainer'
  });

  this.route('blogPostDetail', {
    path: '/blog/:_id',
    data: function() {
      return Blog.findOne(this.params._id);
    },
    template: 'blogPostDetail'
  });
});

Template.blogTemplate.helpers({
  blogPosts: function() {
    return Blog.find();
  }
});

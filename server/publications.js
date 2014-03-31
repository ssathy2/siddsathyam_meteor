Meteor.publish('blogPosts', function() {
  return Blog.find();
});

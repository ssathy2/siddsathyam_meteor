// JavaScript
if (Meteor.isServer) {
  Blog.config({
    adminRole: 'blogAdmin',
    authorRole: 'blogAuthor'
  });
}
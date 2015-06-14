if (Meteor.isClient) {
  Blog.config({
    blogIndexTemplate: 'blogIndexTemplate',
    blogShowTemplate: 'blogPostDetailTemplate'
  });
}

Blog.config({
  syntaxHighlighting: true,
  syntaxHighlightingTheme: 'github'
});
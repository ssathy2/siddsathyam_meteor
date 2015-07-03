if (Meteor.isClient) {
  Blog.config({
    blogIndexTemplate: 'blogIndexTemplate',
    blogShowTemplate: 'blogPostDetailTemplate'
  });
  
  Blog.config({
    comments: {
      disqusShortname: 'siddsathyam'
    }
  });
}

Blog.config({
  syntaxHighlighting: true,
  syntaxHighlightingTheme: 'github'
});
if (Blog.find().count() == 0)
{
  Blog.insert(
    {
    blogPostTitle: 'First Post',
    blogPostText: 'This is my first post'
    }
  );

  Blog.insert(
    {
    blogPostTitle: 'Second Post',
    blogPostText: 'This is my second post'
    }
  );

  Blog.insert(
    {
    blogPostTitle: 'Third Post',
    blogPostText: 'This is my third post'
    }
  );

}

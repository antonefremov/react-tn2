import React from 'react';
import BlogList from 'components/ui/BlogList';
import Helmet from 'react-helmet';

const Index = ({ posts }) => (
  <div>
    <BlogList posts={posts} />
    <Helmet
      title='Список постов'
    />
  </div>
);

Index.propTypes = {
  posts: BlogList.propTypes.posts
};

export default Index;

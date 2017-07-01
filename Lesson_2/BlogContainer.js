import React from 'react';

import BlogList from './BlogList';
import BlogItem from './BlogItem';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
  }

  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts });
  }
}

const BlogList = ({ posts }) => {
  return DOM.ul(
      null,
      _.map(
        posts,
        (post) => (
          <BlogItem key={post.key} post={post}/>
        )
      )
    )
}

export default BlogContainer;

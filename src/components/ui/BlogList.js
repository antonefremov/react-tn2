import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

const DOM = React.DOM;

const BlogList = ({ posts, addLike }) => (
  DOM.ul(
    null,
    posts.map(
      post => <BlogItem key={post.key} post={post} addLike={addLike}/>
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  addLike: PropTypes.func.isRequired
};

BlogList.defaultProps = {
  items: [],
};

export default BlogList;

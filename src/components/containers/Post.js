import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem';
import { Item } from 'semantic-ui-react';

const Post = ({post}) => (
  <Item.Group>
    {post && <BlogItem key={post.key} post={post}/>}
  </Item.Group>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;

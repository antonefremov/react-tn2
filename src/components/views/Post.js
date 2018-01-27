import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import BlogItem from 'components/ui/BlogItem';
import { Item } from 'semantic-ui-react';

const Post = ({post}) => (
  <div>
    <Item.Group>
      {post && <BlogItem key={post.key} post={post}/>}
    </Item.Group>
    {post && <Helmet title={post.text}/>}
  </div>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;

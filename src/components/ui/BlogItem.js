import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Details from './Details';
import Like from './Like';

function BlogItem({post, addLike}) {
  return <div>
    <TextBox>{post.text}</TextBox>
    <Image {...post.image}/>
    <Like postId={post.key} likes={post.details.likes} addLike={addLike}/>
    <Details {...post.details}/>
  </div>;
}

BlogItem.propTypes = {
  post: PropTypes.object,
  addLike: PropTypes.func.isRequired
};

export default BlogItem;

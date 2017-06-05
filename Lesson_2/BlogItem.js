import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Details from './Details';
import Like from './Like';

function BlogItem({post}) {
  return <div>
      <TextBox>{post.text}</TextBox>
      <Image {...post.image}/>
      <Like {...post.details}/>
      <Details {...post.details}/>
    </div>
}

BlogItem.propTypes = {
    key: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: Image.PropTypes.image,
    details: Details.PropTypes.details
}

export default BlogItem;

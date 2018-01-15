import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Details from './Details';
import Like from 'components/containers/Like';
import { Container, Segment, Divider } from 'semantic-ui-react';

function BlogItem({post}) {
  return (
    <Container>
      <TextBox postId={post.key} text={post.text} />
      <Segment compact basic vertical>
        <Image {...post.image}/>
        <Like postId={post.key} likes={post.details.likes}/>
        <Details {...post.details}/>
      </Segment>
      <Divider hidden/>
    </Container>
  );
}

BlogItem.propTypes = {
  post: PropTypes.object,
  addLike: PropTypes.func
};

BlogItem.defaultProps = {
  post: {
    key: null,
    text : '',
    image : {
      src: '',
      width: '',
      height: '',
      alt: ''
    },
    details: {
      author: '',
      createdAt: '',
      updatedAt: '',
      likes: 0
    }
  }
};

export default BlogItem;

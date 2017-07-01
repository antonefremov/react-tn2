import React from 'react';
import PropTypes from 'prop-types';
import {Label} from 'semantic-ui-react';

function Like(props) {
  const {postId, likes, addLike} = props;
  return (
    <Label
      size='tiny'
      icon='heart'
      color='red'
      attached='bottom right'
      content={likes}
      onClick={() => addLike(postId)} />
  );
}

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  postId: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  addLike: PropTypes.func.isRequired
};

export default Like;

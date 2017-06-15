import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

function Like(props) {
  const {postId, likes, addLike} = props;
  return (
    <div>
      {likes}
      <Button
        color='red'
        content='Like'
        icon='heart'
        onClick={() => addLike(postId)}>
      </Button>
    </div>
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

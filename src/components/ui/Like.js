import React from 'react';
import PropTypes from 'prop-types';

function Like(props) {
  const {postId, likes, addLike} = props;
  return (
    <div>
      {likes}
      <button onClick={() => addLike(postId)}>Like!</button>
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

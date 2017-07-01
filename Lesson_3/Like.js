import React from 'react';
import PropTypes from 'prop-types';

function Like(props) {
  const {postId, likes, addLike} = props
  return (
      <div>
        {props.likes}
        <button onClick={() => props.addLike(postId)}>Like!</button>
      </div>
    );
}

Like.defaultProps = {
  likes: 0
}

Like.propTypes = {
  likes: PropTypes.number.isRequired,
  addLikes: PropTypes.func.isRequired
}

export default Like;

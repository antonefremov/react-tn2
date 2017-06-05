import React from 'react';
import PropTypes from 'prop-types';

function Details(props) {
  return <div>
    <span>by {props.author}</span>
    <br/>
    {props.createdAt.length > 0 &&
      <span>Created At: {props.createdAt}</span>
    }
    <br/>
    {props.updatedAt.length > 0 &&
      <span>Last Edited At: {props.updatedAt}</span>
    }
  </div>;
}

Details.defaultProps = {
  details: {
    author: "Anonymous",
    createdAt: "",
    updatedAt: "",
    likes: 0
  }
}

Details.propTypes = {
  details: PropTypes.shape({
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    likes: PropTypes.number
  })
}

export default Details;

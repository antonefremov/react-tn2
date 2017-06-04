import React from 'react';
import PropTypes from 'prop-types';

function Details({details}) {
  return <div>
    <span>by {details.author}</span>
    <br/>
    <span>Created At: {details.createdAt}</span>
    <br/>
    <span>Last Edited At: {details.updatedAt}</span>
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

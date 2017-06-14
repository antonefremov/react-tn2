import React from 'react';
import PropTypes from 'prop-types';

function Details(props) {
  return <div>
    <span>by {props.author}</span>
    <br/>
    { !!props.createdAt && <span>Created At: {props.createdAt}</span> }
    <br/>
    { !!props.updatedAt && <span>Updated At: {props.updatedAt}</span> }
  </div>;
}

Details.defaultProps = {
  author: 'Anonymous',
  createdAt: '',
  updatedAt: ''
};

Details.propTypes = {
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default Details;

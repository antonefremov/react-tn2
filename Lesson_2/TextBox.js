import React from 'react';
import PropTypes from 'prop-types';

function TextBox(props) {
  return <span>{props.children}</span>;
}

TextBox.defaultProps = {
  children: "N/A"
}

TextBox.propTypes = {
  children: PropTypes.string.isRequired
}

export default TextBox;

import React from 'react';
import PropTypes from 'prop-types';

function TextBox(children) {
  return <span>{children.text}</span>;
}

TextBox.defaultProps = {
  children: "N/A"
}

TextBox.propTypes = {
  children: PropTypes.string.isRequired
}

export default TextBox;

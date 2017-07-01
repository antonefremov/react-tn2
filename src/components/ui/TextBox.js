import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

function TextBox(props) {
  return <Header as='h3'>{props.children}</Header>;
}

TextBox.defaultProps = {
  children: 'N/A'
};

TextBox.propTypes = {
  children: PropTypes.string.isRequired
};

export default TextBox;

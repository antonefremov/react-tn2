import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import Link from 'components/ui/Link';
import { postPaths } from 'helpers/routes';

function TextBox(props) {
  return <Header>
    <Link to={postPaths('/posts/' + props.postId)}>{props.text}</Link>
  </Header>;
}

TextBox.defaultProps = {
  children: 'N/A'
};

TextBox.propTypes = {
  postId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default TextBox;

import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import Link from 'components/ui/Link';
import { postPath } from 'helpers/routes/post';

function TextBox(props) {
  return <Header>
    <Link to={postPath('/posts/' + props.postId)}>{props.text}</Link>
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

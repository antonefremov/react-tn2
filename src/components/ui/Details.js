import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'semantic-ui-react';

function Details(props) {
  return (
    <List>
      <List.Item>
        <List.Header as='a'>by {props.author}</List.Header>
      </List.Item>
      <List.Item>
        { !!props.createdAt && <span>Created At: {props.createdAt}</span> }
      </List.Item>
      <List.Item>
        { !!props.updatedAt && <span>Updated At: {props.updatedAt}</span> }
      </List.Item>
    </List>
  );
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

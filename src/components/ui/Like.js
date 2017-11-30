import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Label} from 'semantic-ui-react';
//import {connect} from 'react-redux';
//import {addLike} from 'actions/Like';

class Like extends Component {
  constructor(props) {
    super(props);
  }

  addLike(ev) {
    ev.preventDefault();
  }

  render() {
    return (
      <Label
        size='tiny'
        icon='heart'
        color='red'
        attached='bottom right'
        content={this.props.likes}
        onClick={() => this.props.likePost()}/>
    );
  }
}

//onClick={() => addLike(postId)}
// Like.defaultProps = {
//   likes: 0
// };

Like.propTypes = {
  postId: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  likePost: PropTypes.func.isRequired
};

export default Like;

// export default connect((state) => {
//   return {
//     likes: state.count
//   };
// },{addLike})(Like);

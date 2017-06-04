import React from 'react';
import PropTypes from 'prop-types';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || 0
    }
    this.addLike = this.addLike.bind(this);
  }

  addLike() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <div>
        {this.state.likes}
        <button onClick={this.addLike} >Like!</button>
      </div>
    );
  }
}

Like.defaultProps = {
  likes: 0
}

Like.propTypes = {
  likes: PropTypes.number.isRequired
}

export default Like;

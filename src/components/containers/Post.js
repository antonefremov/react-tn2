import React from 'react';
import PropTypes from 'prop-types';
//import { posts } from 'constants/static/data.js';
import BlogItem from 'components/ui/BlogItem';
import { Item } from 'semantic-ui-react';
import request from 'superagent';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001/',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  render() {
    const filteredPosts = this.state.posts.filter((item) =>
      item.key == this.props.match.params.postId);

    return (
      <Item.Group>
        {filteredPosts.length &&
          filteredPosts.map(item =>
            <BlogItem post={item} />
          )
        }
      </Item.Group>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object
};

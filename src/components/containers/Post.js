import React from 'react';
import PropTypes from 'prop-types';
//import { posts } from 'constants/static/data.js';
import BlogItem from 'components/ui/BlogItem';
import { Item } from 'semantic-ui-react';
//import request from 'superagent';

const Post = ({item}) => (
  <Item.Group>
    {item && <BlogItem key={item.key} post={item}/>}
  </Item.Group>
);

// export default class Post extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { post: {} };
//     this.fetchPosts = this.fetchPosts.bind(this);
//     this.filterPosts = this.filterPosts.bind(this);
//   }
//
//   componentDidMount() {
//     this.fetchPosts();
//   }
//
//   fetchPosts() {
//     request.get(
//       'http://localhost:3001/',
//       {},
//       (err, res) => this.filterPosts(res.body)
//     );
//   }
//
//   filterPosts(posts) {
//     const filteredPosts = posts.filter((item) =>
//       item.key == this.props.match.params.postId);
//
//     this.setState({ post: filteredPosts[0] });
//   }
//
//   render() {
//     return (
//       <Item.Group>
//         {this.state.post.key && <BlogItem post={this.state.post} />}
//       </Item.Group>
//     );
//   }
// }

Post.propTypes = {
  item: PropTypes.object
};

export default Post;

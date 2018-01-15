import { connect } from 'react-redux';
import { likePost } from 'actions/Like';
import Like from 'components/ui/Like';

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePost: () => dispatch(
    likePost(ownProps.postId, ownProps.likes + 1)
  )
});

const stateToProps = (state) => ({
  posts: state.posts.entries
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, ownProps, {
    likes: stateProps.posts
      .find(post => post.key == ownProps.postId).details.likes,
    likePost: () => dispatchProps.likePost(ownProps.postId, ownProps.likes + 1)
  })
);

// export default connect(stateToProps, mapDispatchToProps, mergeProps)(Like);
export default connect(null, mapDispatchToProps, null)(Like);

import Post from 'components/containers/Post';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps)(Post);

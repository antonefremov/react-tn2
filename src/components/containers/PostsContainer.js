import Index from 'components/views/Index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const stateToProps = (state) => ({
  posts: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default withRouter(connect(stateToProps)(Index));

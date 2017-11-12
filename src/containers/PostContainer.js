import Post from 'components/containers/Post';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import {addLike} from 'actions/Posts';

// const actionToProps = (dispatch) => {
//     return {
//         addLike: bindActionCreators(addLike, dispatch)
//     }
// };

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps)(Post); //actionToProps

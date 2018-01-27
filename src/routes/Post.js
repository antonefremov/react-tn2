import PostContainer from 'components/containers/PostContainer';
import { postUrl } from 'helpers/routes/post';
import { fetchPost } from 'actions/Post';
import initialLoad from 'helpers/initialLoad';

const Post = {
  exact: true,
  strict: true,
  path: postUrl(),
  component: PostContainer,
  prepareData: (store, state) => {
    if (initialLoad()) {
      return;
    }
    const id = state.location.pathname;
    if (!!id) return store.dispatch(fetchPost(id));
  }
};

export default Post;

import PostContainer from 'containers/PostContainer';
import { postUrl } from 'helpers/routes/post';
import { fetchPost } from 'actions/Post';

const Post = {
  exact: true,
  strict: true,
  path: postUrl(),
  component: PostContainer,
  prepareData: (store, state) => {
    const id = state.location.pathname;
    if (!!id) return store.dispatch(fetchPost(id));
  }
};

export default Post;

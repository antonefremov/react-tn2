import PostsContainer from 'containers/PostsContainer';
import { postPaths } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';

const Posts = {
  exact: true,
  path: postPaths(),
  component: PostsContainer,
  prepareData: (store) => store.dispatch(fetchPosts())
};

export default Posts;

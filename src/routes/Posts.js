import PostsContainer from 'components/containers/PostsContainer';
import { postsPath } from 'helpers/routes/posts';
import { fetchPosts } from 'actions/Posts';

const Posts = {
  exact: true,
  strict: true,
  path: postsPath(),
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

export default Posts;

import PostsContainer from 'components/containers/PostsContainer';
import { postsPath } from 'helpers/routes/posts';
import { fetchPosts } from 'actions/Posts';
import initialLoad from 'helpers/initialLoad';

const Posts = {
  exact: true,
  strict: true,
  path: postsPath(),
  component: PostsContainer,
  prepareData: (store) => {
    //debugger;
    //console.log('Inside of prepareData for Posts');
    if (initialLoad()) {
      return;
    }
    return store.dispatch(fetchPosts());
  }
};

export default Posts;

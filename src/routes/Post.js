import PostContainer from 'containers/PostContainer';
import { postPaths } from 'helpers/routes';

import { fetchPost } from 'actions/Post';

const Post = {
  exact: true,
  path: postPaths(1),//location.pathname
  component: PostContainer,
  prepareData: (store, query, params) => {
    //debugger;
    console.log("routes=>Post.js is called with params " + params.id);
    store.dispatch(fetchPost(1));//params.id
  }
};

export default Post;

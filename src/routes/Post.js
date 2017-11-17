import PostContainer from 'containers/PostContainer';
import { postPaths } from 'helpers/routes';

import { fetchPost } from 'actions/Post';

const Post = {
  exact: true,
  path: postPaths(location.pathname),
  component: PostContainer,
  prepareData: (store, state) => { //, query, params
    //debugger;
    //console.log("routes=>Post.js is called with params " + params.id);
    const { id } = state.params;
    return store.dispatch(fetchPost(id));
  }
};

export default Post;

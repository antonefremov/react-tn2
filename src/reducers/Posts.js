import {assign} from 'lodash/object';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case types.INCREMENT_LIKE:
      return assign({}, initialState, {
        entries: incrementLikes(state.entries, action.id)
      });
    default:
      return state;
  }
}

const incrementLikes = (posts, postId) => {
  const updateIndex = posts.findIndex(post => post.key == postId);
  let updatedPosts;

  if (updateIndex > -1) {
    const updatedPost = posts[updateIndex];
    updatedPost.details.likes += 1;

    updatedPosts =
      posts
        .slice(0, updateIndex)
        .concat(updatedPost)
        .concat(posts.slice(updateIndex + 1));
  }

  // if (updateIndex > -1) {
  //   const post = updatedPosts[updateIndex];
  //   post.details.likes += 1;
  //   updatedPosts[updateIndex] = post;
  // }

  return updatedPosts;
};

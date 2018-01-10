import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

// export function likePost(id) {
//   return {
//     type: types.INCREMENT_LIKE,
//     id
//   };
// }

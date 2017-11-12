import request from 'superagent';
import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_ROOT } from 'constants/API';
//import { map } from 'lodash/collection';
//import { postsPaths } from 'helpers/routes/posts';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  console.log('AC fetchPosts is called');
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_ROOT}/`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
      });
  };
}

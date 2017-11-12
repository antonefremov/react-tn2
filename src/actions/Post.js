import request from 'superagent';
import * as types from 'constants/actionTypes/PostActionTypes';
import { API_ROOT } from 'constants/API';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

export function fetchPost(id) {
  console.log('AC fetchPost is called with id = ' + id);
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${API_ROOT}/posts/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(response.body));
      });
  };
}

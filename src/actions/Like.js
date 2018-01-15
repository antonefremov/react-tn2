import { API_CALL } from 'middleware/API';
import * as types from 'constants/actionTypes/LikeActionTypes';
//import { postsPath } from 'helpers/routes/posts';

export const likePost = (id, likes) => ({
  id,
  likes,
  [API_CALL]: {
    method: 'PATCH',
    endpoint: `/posts/${id}`,
    payload: { likes },
    types: [
      types.LIKE_REQUEST,
      types.LIKE_SUCCESS,
      types.LIKE_ERROR
    ],
  },
});

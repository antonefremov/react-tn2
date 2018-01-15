import {assign} from 'lodash/object';

import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

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
    case likeTypes.LIKE_REQUEST:
      return {
        ...state,
        entries: state.entries.map(post => {
          if (post.key !== action.id) return post;
          return { ...post,
            details: {
              ...post.details,
              likes: action.likes
            }
          };
        })
      };
    default:
      return state;
  }
}

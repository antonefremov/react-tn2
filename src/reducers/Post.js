import {assign} from 'lodash/object';

import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case likeTypes.LIKE_REQUEST:
      if (state.entry)
      return {
        ...state,
        entry: {
          ...state.entry,
          details: {
            ...state.entry.details,
            likes: state.entry.key === action.id ?
              action.likes : state.entry.details.likes,
            }
        }};
        return state;
    default:
      return state;
  }
}

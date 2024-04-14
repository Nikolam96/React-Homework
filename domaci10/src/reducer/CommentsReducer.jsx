import {
  COMMENTS_REJECT,
  COMMENTS_RESOLVE,
  COMMENTS_DELETE_REJECT,
  COMMENTS_DELETE_RESOLVE,
} from "../constants/CommentsConstant";

const InitialState = {
  comments: [],
  error: undefined,
};

const CommentsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case COMMENTS_REJECT:
      return {
        ...state,
        error: action.payload,
      };

    case COMMENTS_RESOLVE:
      return {
        ...state,
        comments: action.payload,
        error: undefined,
      };

    case COMMENTS_DELETE_RESOLVE:
      return {
        ...state,
        comments: state.comments.filter((v) => v.id !== action.payload),
        error: undefined,
      };

    case COMMENTS_DELETE_REJECT:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default CommentsReducer;

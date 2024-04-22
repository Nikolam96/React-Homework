import {
  FETCH_PHOTOS_FAILED,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
} from "./constants";

const initialState = {
  photos: [],
  error: null,
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case FETCH_PHOTOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photos: action.payload,
      };
    default:
      return state;
  }
}

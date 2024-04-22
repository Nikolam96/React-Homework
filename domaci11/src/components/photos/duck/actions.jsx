import {
  FETCH_PHOTOS_FAILED,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
} from "./constants";

export const fetchPhotosRequest = (reqParams) => {
  return {
    type: FETCH_PHOTOS_REQUEST,
    payload: reqParams,
  };
};

export const fetchPhotosSuccess = (photos) => {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos,
  };
};

export const fetchPhotosFailed = (error) => {
  return {
    type: FETCH_PHOTOS_FAILED,
    payload: error,
  };
};

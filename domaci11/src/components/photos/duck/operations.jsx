import {
  fetchPhotosFailed,
  fetchPhotosRequest,
  fetchPhotosSuccess,
} from "./actions";

import { getPhotos } from "../../../api/photosApi";

export const fetchPhotos = (reqParams) => {
  return (dispatch) => {
    dispatch(fetchPhotosRequest(reqParams));
    return getPhotos(reqParams)
      .then((res) => {
        dispatch(fetchPhotosSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(fetchPhotosFailed(err));
        return err;
      });
  };
};

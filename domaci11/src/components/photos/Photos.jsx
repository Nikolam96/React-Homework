import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "./duck/operations";
import { useEffect, useState } from "react";
import { Popup } from "./Popup";
import "./css/photos.css";

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photosReducer.photos);
  const loading = useSelector((state) => state.photosReducer.isLoading);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <div id="gallery">
      {loading && <h1>Loading...</h1>}
      {photos.slice(0, 50).map((photo) => {
        return (
          <div
            key={photo.id}
            className="image-holder"
            onClick={() => {
              setSelectedPhoto(photo.url);
            }}
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        );
      })}
      {selectedPhoto !== "" && (
        <Popup
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
        />
      )}
    </div>
  );
};
export default Photos;

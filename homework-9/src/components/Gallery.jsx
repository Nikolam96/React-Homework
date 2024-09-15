import PropTypes from "prop-types";
import { Popup } from "./Popup";
import { GalleryContext } from "../utils/GalleryContext";
import { useContext } from "react";

export const Gallery = ({ listOfPhotos }) => {
  const { selectedImage, setSelectedImage } = useContext(GalleryContext);
  return (
    <div id="gallery">
      {listOfPhotos.slice(0, 50).map((photo) => {
        return (
          <div
            onClick={() => {
              setSelectedImage(photo.url);
            }}
            className="image-holder"
            key={photo.id}
          >
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        );
      })}
      {selectedImage !== "" && <Popup />}
    </div>
  );
};

Gallery.propTypes = {
  listOfPhotos: PropTypes.arrayOf(PropTypes.object),
};

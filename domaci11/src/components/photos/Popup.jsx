import PropTypes from "prop-types";
import "./css/photos.css";

export const Popup = ({ selectedPhoto, setSelectedPhoto }) => {
  return (
    <div id="popup">
      <button
        className="close-popup"
        onClick={() => {
          setSelectedPhoto("");
        }}
      >
        &times;
      </button>
      <div className="popup-container">
        <img src={selectedPhoto} alt={"Image"} />
      </div>
    </div>
  );
};

Popup.propTypes = {
  selectedPhoto: PropTypes.string,
  setSelectedPhoto: PropTypes.func,
};

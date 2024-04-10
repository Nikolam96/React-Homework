import { useContext } from "react";
import { Contex } from "../utils/GalleryContex";

const Pop = () => {
  const { image, setImage, deleteImg } = useContext(Contex);

  return (
    <div id="popup">
      <button
        className="close-popup"
        onClick={() => {
          setImage({ ...image, url: "" });
        }}
      >
        &times;
      </button>
      <button
        className="delete-popup"
        onClick={() => {
          deleteImg(image.id);
          setImage({ ...image, url: "" });
        }}
      >
        Delete
      </button>
      <div className="popup-container">
        <img src={image.url} alt={"Image"} />
      </div>
    </div>
  );
};
export default Pop;

import { useContext } from "react";
import { Contex } from "../utils/GalleryContex";
import Pop from "./Pop";
import "../css/gallery.css";

const Gallery = () => {
  const { images, image, setImage } = useContext(Contex);

  return (
    <div id="gallery">
      {images.slice(150, 200).map((v) => {
        return (
          <div
            className="wrapper"
            key={v.id}
            onClick={() => setImage({ id: v.id, url: v.url })}
          >
            <div className="gallery__item">
              <h4>{v.title}</h4>
              <img src={v.thumbnailUrl} />
            </div>
          </div>
        );
      })}
      {image.url !== "" && <Pop />}
    </div>
  );
};
export default Gallery;

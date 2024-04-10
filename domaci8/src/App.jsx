import { useState, useEffect } from "react";
import axios from "axios";
import { Contex } from "./utils/GalleryContex.js";
import Gallery from "./components/Gallery.jsx";
import Home from "./components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Loading from "./components/Loading.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState({ url: "", id: "" });
  const [loading, setLoading] = useState(false);

  function deleteImg(id) {
    setImages(images.filter((v) => v.id !== id));
  }

  useEffect(() => {
    async function getImageGallery() {
      setLoading(true);
      try {
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setImages(responce.data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }
    getImageGallery();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <Contex.Provider
        value={{ images, setImages, image, setImage, deleteImg }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Contex.Provider>
    </>
  );
}

export default App;

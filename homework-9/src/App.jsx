//! Za domasna:
//? Da se dodade ushte eden context za Albums (prevzemeni od https://jsonplaceholder.typicode.com vo App.jsx fajlot ) i preku context preneseni i mapirani vo Album.jsx fajl.
//* Da se dodade button za brishenje na selektiranata slika od popup koj ke ja izbrise slikata od array-ot i ke go zatvori popup-ot isto da bide napraveno koristejki context.

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Gallery } from "./components/Gallery";
import { Albums } from "./components/Albums";
import { API_URL } from "./utils/constants";
import { GalleryContext } from "./utils/GalleryContext";
import { AlbumContext } from "./utils/AlbumContext";
import axios from "axios";

import "./css/App.css";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    axios(`${API_URL}/photos`)
      .then((res) => setPhotos(res.data))
      .catch((err) => alert(err.message));
  }, []);

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios(`${API_URL}/albums`)
      .then((res) => setAlbums(res.data))
      .catch((err) => alert(err.message));
  }, []);

  const deleteImage = () => {
    if (selectedImage) {
      const updatedPhotos = photos.filter(
        (photo) => photo.url !== selectedImage
      );
      console.log("Image deleted successfully");
      setPhotos(updatedPhotos);
      setSelectedImage("");
    }
  };
  return (
    <div id="app">
      <Nav />
      <GalleryContext.Provider
        value={{ selectedImage, setSelectedImage, deleteImage }}
      >
        <AlbumContext.Provider value={{ albums }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/gallery"
              element={<Gallery listOfPhotos={photos} />}
            />
            <Route path="/albums" element={<Albums albums={albums} />} />
          </Routes>
        </AlbumContext.Provider>
      </GalleryContext.Provider>
    </div>
  );
};

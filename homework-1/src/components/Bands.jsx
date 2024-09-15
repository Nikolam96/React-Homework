//! koga pravime funkcionalna komponenta nema potreba da go importirame react

import './../css/Bands.css'

export const Bands = () => {
  const bands = [
    {
      name: "The Ramones",
      formed: 1974,
      genre: "Punk Rock",
      imgSrc: "/images/ramones.jpg"
    },
    {
      name: "The Beatles",
      formed: 1960,
      genre: "Rock",
      imgSrc: "/images/beatles.jpg"
    },
    {
      name: "Led Zeppelin",
      formed: 1968,
      genre: "Rock",
      imgSrc: "/images/led_zeppelin.jpg"
    },
    {
      name: "Pink Floyd",
      formed: 1965,
      genre: "Progressive Rock",
      imgSrc: "/images/pink_floyd.jpg"
    },
    {
      name: "Nirvana",
      formed: 1987,
      genre: "Grunge",
      imgSrc: "/images/nirvana.jpg"
    }
  ]; 
  return (
    <div>
      <table border={1} cellSpacing={5} cellPadding={5}>
        <thead>
          <tr>
            <th>Band</th>
            <th>Formed</th>
            <th>Genre</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {bands.map(band => (
            <tr key={band.name}>
              <td>{band.name}</td>
              <td>{band.formed}</td>
              <td>{band.genre}</td>
              <td><img src={band.imgSrc} width="100px" height="100px"/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Bands;
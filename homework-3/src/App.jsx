//! Za domasna: 
//? Da se prikaze vo dopolnitelen fajl lista od filmovi (minimum 5 po vash izbor).
//* Izdefinirana vo app so atributi { name, date, genre, plot, imdbLink, imgUrl }.
//? Listata na atributi prikaz i slika za filmot (slikata ne mora da bide od imdb).
//* Dopolnitelno da se koristi proptypes za definiranje na prenesenite properties.
//? imdb.com e stranata za filmovite.

import { Movies } from './components/Movies';

let movies = [
  {
    name: "Inception",
    date: "2010",
    genre: "Action, Adventure, Sci-Fi",
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    imdbLink: "https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Inception",
    imgUrl: "https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg"
  },
  {
    name: "Shutter Island",
    date: "2010",
    genre: "Mystery, Thriller",
    plot: "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    imdbLink: "https://www.imdb.com/title/tt1130884/?ref_=fn_al_tt_1",
    imgUrl: "https://images.justwatch.com/poster/254274473/s718/shutter-island.jpg"
  },
  {
    name: "Se7en",
    date: "1995",
    genre: "Crime, Drama, Mystery",
    plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    imdbLink: "https://www.imdb.com/title/tt0114369/?ref_=fn_al_tt_1",
    imgUrl: "https://images.justwatch.com/poster/74767974/s718/se7en.jpg"
  },
  {
    name: "Black Swan",
    date: "2010",
    genre: "Drama, Thriller",
    plot: "Nina is a talented but unstable ballerina on the verge of stardom. Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.",
    imdbLink: "https://www.imdb.com/title/tt0947798/?ref_=fn_al_tt_1",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/60d14461bda95c2f2f300e9e/1628563068617-QDG2DYK8V0KTXPH1H00T/Black+Swan+poster+v3+7.29.21.png"
  },
  {
    name: "Fight Club",
    date: "1999",
    genre: "Drama",
    plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    imdbLink: "https://www.imdb.com/title/tt0137523/?ref_=fn_al_tt_1",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  }
];

export function App() {
  return(
    <div>
      <h3>Exercising prop types</h3>
      <Movies movies={movies}/>
    </div>
  )
};
//! Za Domasna: 
//? Ke kreirate 4 useri so atributi { ime, prezime, adresa, godini } vo App.jsx fajlot definirani kako varijabli
//* Koristejki props vo 2 posebni fajla ke gi prfrlite userite. 
//? Vo edniot fajl (Age.jsx) ke gi prikazete userite koi se postari od 18 god.
//* Za ostanatite ke prikazete paragraf "Less then 18".
//? Vo drugiot fajl (Address.jsx) ke gi prikazete userite koi imaat adresa Skopje.
//* Atributite na userite gi zadavate vie.

import { Address } from './components/Address';
import { Age } from './components/Age';

const users = [
  { ime: "Ivan", prezime: "Ivanovski", adresa: "Kumanovo", godini: 30 },
  { ime: "Stefan", prezime: "Stefanovski", adresa: "Skopje", godini: 16 },
  { ime: "Pero", prezime: "Perovski", adresa: "Bitola", godini: 17 },
  { ime: "Petar", prezime: "Petrovski", adresa: "Stip", godini: 26 }
];

const App = () => {
  return(
  <div>
    <h2>Users:</h2>
    <Age users={users}/>
    <Address users={users}/>
  </div>
  )
};

export default App;
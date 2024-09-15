//! importiranje na virtuelniot dom
import ReactDOM from 'react-dom/client';

//? importiranje na glavnata komponenta na aplikacijata
import { App } from './App.jsx';

//* kreiranje na nova instanca od root
const root = ReactDOM.createRoot(document.getElementById("root"));

//! renderiranje na glavnata komponenta na aplikacijata
root.render(<App/>);
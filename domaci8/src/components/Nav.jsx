import { Link } from "react-router-dom";
import "../css/nav.css";

const Nav = () => {
  return (
    <ul id="nav">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/gallery"}>Gallery</Link>
      </li>
    </ul>
  );
};
export default Nav;

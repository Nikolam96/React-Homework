import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/cakes"> Cakes</Link>
      </li>
      <li>
        <Link to="/comments"> Comments </Link>
      </li>
      <li>
        <Link to="/todos"> Todos </Link>
      </li>
    </ul>
  );
};
export default Nav;

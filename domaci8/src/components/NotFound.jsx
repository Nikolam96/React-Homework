import Home from "./Home";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page doesent exist</h2>
      <Link to={"/"}>Go back Home</Link>
    </div>
  );
};
export default NotFound;

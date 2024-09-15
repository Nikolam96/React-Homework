import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div id="not-found">
      <h2>Error!!! No Routes match this URL</h2>
      <h3>
        Go{" "}
        <Link to="/">
          <u>back</u>
        </Link>{" "}
        to Home Page
      </h3>
    </div>
  );
};

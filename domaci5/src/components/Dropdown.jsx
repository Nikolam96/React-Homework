import propTypes from "prop-types";

const Dropdown = () => {
  return (
    <div>
      {elements.map((v, i) => {
        return (
          <option value="v" key={i}>
            {v}
          </option>
        );
      })}
    </div>
  );
};
export default Dropdown;

Dropdown.propTypes = {
  elements: propTypes.arrayOf(propTypes.object),
};

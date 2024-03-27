import PropTypes from "prop-types";

const Select = ({ elements, onChange }) => {
  return (
    <select onChange={onChange}>
      <option>Select an option</option>
      {elements.map((element) => (
        <option key={element.value} value={element.value}>
          {element.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

Select.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

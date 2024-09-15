import PropTypes from "prop-types";

export const Dropdown = ({ elements, selectedOption, onChange }) => {
  return (
    <select value={selectedOption} onChange={onChange}>
      <option>Select an option</option>
      {elements.map((element) => (
        <option key={element.value} value={element.value}>
          {element.name}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

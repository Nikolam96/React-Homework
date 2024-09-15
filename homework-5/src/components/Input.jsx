import PropTypes from "prop-types";
import { useState } from "react";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  onToggle,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const togglePassword = () => {
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <p>
      <input
        type={type === "password" ? (isMouseOver ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {name === "password" && (
        <button
          type="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={togglePassword}
          className="eye-button"
        >
          <i className={isMouseOver ? "fa fa-eye" : "fa fa-eye-slash"}></i>
        </button>
      )}
    </p>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  onToggle: PropTypes.func,
};

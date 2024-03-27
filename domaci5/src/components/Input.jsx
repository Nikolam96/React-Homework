import { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ value, type, onChange, placeholder, name, onClick }) => {
  const [textarea, settextarea] = useState(false);

  return (
    <p>
      {textarea ? (
        <>
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            cols="20"
            rows="3"
          ></textarea>
        </>
      ) : (
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
        />
      )}
      {name === "password" && (
        <button
          type="button"
          className="eye-button"
          onMouseEnter={onClick}
          onMouseLeave={onClick}
        >
          <i
            className={type === "password" ? "fa fa-eye" : "fa fa-eye-slash"}
          ></i>
        </button>
      )}

      {name === "comment" && (
        <button
          type="button"
          className="eye-button"
          onClick={() => settextarea(!textarea)}
        >
          <i className={"fa fa-comment"}></i>
        </button>
      )}
    </p>
  );
};

export default Input;

Input.propTypes = {
  value: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

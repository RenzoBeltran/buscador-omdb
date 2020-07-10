import React from "react";
import PropTypes from "prop-types";

function Button({ className, type }) {
  return (
    <button className={className} type={type}>
      Login
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Button;

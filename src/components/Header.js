import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "Contact Manager"
};

Header.PropTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;

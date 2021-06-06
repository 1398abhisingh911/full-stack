import React from "react";

const Navbar = ({ dark, children, className }) => {
  return (
    (dark = !!dark ? "dark" : "light"),
    (
      <nav
        className={
          `navbar navbar-${dark} bg-${dark}` +
          (className ? " " + className : "")
        }
      >
        <span className="navbar-brand mb-0 h1">{children}</span>
      </nav>
    )
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  width: "100%",
  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
  paddingLeft : '50px'
};

const linkStyle = {
    color : 'white',
    textDecoration : 'none',
    padding : '20px 25px'
}
function Navbar() {
  return (
    <div>
      <div style={navbarStyle}>
          <Link to={"/"} style={linkStyle}>Home</Link>
          <Link to={"/about"} style={linkStyle}>About</Link>
          <Link to={"/to-do"} style={linkStyle}>To Do Page</Link>
      </div>
    </div>
  );
}

export default Navbar;

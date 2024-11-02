import React from "react";

const pageStyle = {
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const headingStyle = {
  fontWeight: "800",
  fontSize: "50px",
};

const paraStyle = {
    maxWidth : '60vw',
    textAlign : 'center',
    fontSize : '20px'
}

function About() {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>About the To Do App</h1>
      <p style={paraStyle}>
        Welcome to my to do app, this to do app is a part of the learning MERN
        Stack, Currently I am on React and made this page to learn about the
        react router, how it works and what are the benefits of using react
        router over the traditional anchor tags <br /> Currently a user can add
        or remove a task, later on will be adding more features
      </p>
    </div>
  );
}

export default About;

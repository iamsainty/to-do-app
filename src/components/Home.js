import React from 'react'
import { Link } from 'react-router-dom'

const pageStyle = {
    minHeight : '80vh',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
}

const headingStyle = {
    fontWeight : '800',
    fontSize : '50px'
}

const paraStyle = {
    textAlign : 'center',
    fontSize : '20px'
}

const linkStyle = {
    color : 'black'
}

const buttonStyle = {
    backgroundColor : 'black',
    color : 'white',
    padding : '10px 20px',
    fontSize : '17.5px',
    borderRadius : '25px'
}

function Home() {
  return (
    <div style={pageStyle}>
        <h1 style={headingStyle}>Welcome to To Do app</h1>
        <p style={paraStyle}>This to do app is a project I have made while learning the MERN stack <br />
        You can explore the <Link to={'/to-do'} style={linkStyle}>/to-do page</Link> to add and remove tasks</p>
        <Link to={'/to-do'} style={buttonStyle}>Explore To-Do Page</Link>
    </div>
  )
}

export default Home

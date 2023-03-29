import React from 'react'
import styled from 'styled-components'
import "../Style.css"

const MainHeader = () => {
  return (
    <Container> 
      <CustomNavBar>
        <ul>
          <li><a href="Stuff">Stuff</a></li>
          <li><a href="Students">Students</a></li> 
          <li><a href="Partners">Partners</a></li>
          <li><a href="Contact">Contact Us</a></li>
        </ul>
      </CustomNavBar>
      {/* <img src="logo.png" alt="Smart Campus Project"/> */}
      <h1>Welcome to the Smart Campus Project</h1>
    </Container>
  )
}

export default MainHeader


const Container = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #ffffff;
padding: 20px;
border-bottom: 1px solid #dddddd;
`
const CustomNavBar = styled.nav`
display:flex;
margin-bottom: 20px;
width:100%;
justify-content:center;
text-align: center;
ul {
  list-style: none;
  display: flex;
}
li {
  margin-right: 20px;
}
a {
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
}

`
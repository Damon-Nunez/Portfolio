import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');

  li{
    padding: 18px 30px;
    font-size:1.2rem;
    font-family: 'Oswald';
    border-radius: 35%;
    transition:0.3s ease-in;
    color:white;
    text-shadow:0px 0px 20px #fff,0px 0px 20px white;
    z-index:5;

  }
  li:hover {
    color:red;
    transform:scale(1.2)
  }

  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: transparent;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(30%)' : 'translateX(140%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    margin:0px;
    z-index:1;
    li {
      padding: 3px 30px;
    font-size: 1.2rem;
    font-family: Oswald;
    border-radius: 35%;
    transition: all 0.3s ease-in 0s;
    color: white;
    text-shadow: rgb(255 255 255) 0px 0px 20px, white 0px 0px 20px;
    }
  }

`;

const RightNav = ({ open }) => {


  return (
    <Ul open={open}>
      <a href='#aboutMe'><li>About Me</li></a>
      <a href='#skills'><li>Skills</li></a>
      <a href='#projects'><li>Projects</li></a>
      <a href='#contact'><li>Contact</li></a>
    </Ul>
  )
}

export default RightNav
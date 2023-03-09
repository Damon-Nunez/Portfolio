import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items:center;

`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Navbar
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #6aa84f;
  height: 150px;
  width: 100%;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader />
    )
  }
}

export default Header;
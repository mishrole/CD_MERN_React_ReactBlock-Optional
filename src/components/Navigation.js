import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.div`
  height: 400px;
  width: 30%;
`;

const StyledBlock = styled.div`
  margin-right: 1em;
  background-color: #61a8dc;
  width: 95%;
  height: 100%;
`;

class Navigation extends Component {
  render() {
    return (
      <StyledNavigation>
      <StyledBlock />
      </StyledNavigation>
    )
  }
}

export default Navigation;
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAdvertisement = styled.div`
  background-color: #b4a7d6;
  width: 100%;
  height: 25%;
  margin: 0 1em 1em 1em;
`;

class Advertisement extends Component {
  render() {
    return (
      <StyledAdvertisement />
    )
  }
}

export default Advertisement;
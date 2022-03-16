import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSubContent = styled.div`
  background-color: #ffd966;
  height: 65%;
  width: 50px;
  flex-basis: 50px;
  flex-grow: 1;
  margin: 1em;
`;

class SubContent extends Component {
  render() {
    return (
      <StyledSubContent />
    )
  }
}

export default SubContent;
import React, { Component } from 'react';
import styled from 'styled-components';
import Advertisement from './Advertisement';
import SubContent from './SubContent';

const StyledMain = styled.div`
  background-color: #e06666;
  height: 600px;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

class Main extends Component {
  render() {
    return (
      <StyledMain>
        <SubContent />
        <SubContent />
        <SubContent />
        <Advertisement />
      </StyledMain>
    )
  }
}

export default Main;
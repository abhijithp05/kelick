import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  padding: 8px;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const Card = (props) => (
  <StyledDiv {...props}>{props.children}</StyledDiv>
);

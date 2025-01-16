import styled from 'styled-components';

export const StyledHiddenScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

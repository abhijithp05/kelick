import styled from 'styled-components';
import Image from 'next/image';

export const StyledIcon = styled(Image)`
  width: 100%;
  height: 100%;
  transition: fill 0.2s ease;

  // Apply styles to the child <path> element(s)
  & path {
    fill: ${(props) => props?.fill || ''};

    transition: fill 0.2s ease, stroke 0.2s ease;
  }
`;

import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  color: text-black; /* Tailwind red-600 */
  &:hover {
    color: text-gray-700; /* Tailwind gray-700 */
  }
  border-radius: 0.25rem; /* Tailwind rounded */
`;

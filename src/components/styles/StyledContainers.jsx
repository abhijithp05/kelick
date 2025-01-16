import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

export const MainBodyContainer = styled.main`
  margin-top: 95px;
  margin-left: 14rem;
  background-color: #f2f5f5;
  height: 100%;
  width: 100%;
`;

export const SideNavContainer = styled.div`
  background-color: white;
  width: 14rem;
  padding: 1rem 1rem 0.5rem 1rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-right-width: thin;
  @media (min-width: 1024px) {
    display: block;
  }
  @media (max-width: 1024px) {
    margin-top: 110px;
    width: 100%;
  }
`;

export const TopNavContainer = styled.header`
  background-color: white;
  color: white;
  width: 85%;
  height: 95px;
  border-bottom: solid 1px #e5e7eb;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  padding-left: 1rem;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 14rem;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

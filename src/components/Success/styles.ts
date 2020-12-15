import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 99999999999;
  background-color: var(--primary);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img:first-child {
    width: 450px;
    margin-bottom: 32px;
  }

  h1 {
    color: var(--light);
    margin-bottom: 32px;
  }

  @media (max-width: 550px) {
    img:first-child {
      width: 300px;
    }

    h1 {
      font-size: 24px;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70vw;
  height: 80vh;
  border-radius: 10px;
  img {
    width: 50px;
  }
`;

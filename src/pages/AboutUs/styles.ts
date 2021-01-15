import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 0 16px 0 16px;
  background-color: var(--background);
  border-bottom: 4px solid #8651b5;
`;

export const Team = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--primary);
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    row-gap: 32px;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 250px;
      border-radius: 16px;
    }

    h3 {
      margin-top: 8px;
      text-align: center;
    }

    span {
      text-align: center;
      font-weight: normal;
    }
  }
  @media (max-width: 800px) {
    div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    div {
      grid-template-columns: 1fr;
    }
  }
`;

export const Technologies = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 64px;
    color: var(--primary);
    margin-bottom: 16px;
  }

  div {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    justify-items: center;
    align-content: center;
    img {
      width: 250px;
      border-radius: 16px;
    }
  }
  @media (max-width: 600px) {
    div {
      grid-template-columns: 1fr;
    }
  }
`;

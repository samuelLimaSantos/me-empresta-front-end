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
    margin-top: 5%;
    margin-bottom: 32px;
    text-align: center;
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
      height: 15vh;
      width: 8vw;
      border-bottom: 2px solid var(--primary);
      border-radius: 16px;
    }

    h3 {
      font-size: 14pt;
      margin-top: 8px;
      text-align: center;
    }

    span {
      font-size: 10pt;
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
        height: 10vh;
        width: 20vw;
        border-radius: 16px;
      }

      h3 {
        margin-top: 8px;
        font-size: 10pt;
        text-align: center;
      }

      span {
        font-size: 6pt;
        text-align: center;
        font-weight: normal;
      }
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
    margin-top: 10%;
    margin-bottom: 32px;
  }

  div {
    width: 100%;
    margin-left: 50%;
    margin-right: 10%;
    margin-bottom: 4%;
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    justify-items: center;
    align-content: center;
    img {
      height: 10vh;
      width: 5vw;
      border-radius: 16px;
      margin-left: 5%;
    }
  }

  @media (max-width: 600px) {
    h1 {
      margin-top: 20%;
      margin-bottom: 32px;
      color: var(--primary);
    }

    div {
      width: 100%;
      display: flex;
      margin-right: 50%;
      margin-bottom: 22vh;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      align-content: center;

      img {
        height: 8vh;
        width: 15vw;
        border-radius: 16px;
        margin-left: 5%;
      }
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 15% 85%;
  padding: 0 16px 0 16px;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-self: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const Description = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    width: 50px;
    font-size: 56px;
    color: var(--light);
    margin-bottom: 16px;
  }

  h1 > span {
    display: block;
    color: var(--dark);
    background-color: var(--secondary-details);
    width: 274px;
  }

  p {
    color: var(--light);
    font-weight: 400;
    line-height: 150%;
  }

  p > span {
    color: var(--secondary-details);
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 40px;
    }

    h1 > span {
      width: 200px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 780px) {
    h1 {
      width: 100%;
      text-align: center;
    }

    h1 > span {
      margin: 8px auto;
    }

    p {
      text-align: center;
    }
  }
`;

export const ButtonContainer = styled.a`
  margin-top: 32px;
  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light);
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  font-size: 32px;
  color: var(--primary);
  transition: opacity 0.6s;

  svg {
    position: relative;
    right: -30px;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 780px) {
    & {
      margin: 40px auto;
    }
  }
`;

export const ImageContainer = styled.div`
  justify-self: center;
  align-self: center;

  img {
    width: 640px;
  }

  @media (max-width: 1000px) {
    & img {
      width: 450px;
    }
  }

  @media (max-width: 780px) {
    & img {
      display: none;
    }
  }
`;

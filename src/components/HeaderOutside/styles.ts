import styled from 'styled-components';

export const Container = styled.nav`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLogo = styled.section`
  a {
    display: flex;
    align-items: center;
    margin-left: -25px;
    text-decoration: none;
  }

  a h1 {
    color: var(--light);
    margin-left: -30px;
  }

  @media (max-width: 500px) {
    & a h1 {
      display: none;
    }
  }
`;

export const ContainerMenu = styled.section`
  display: flex;
  justify-content: space-between;
  width: 200px;

  article {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.6s;
  }

  .purple a,
  .purple svg {
    color: var(--primary);
  }

  article a {
    text-decoration: none;
    color: var(--light);
    margin-right: 8px;
  }

  article svg {
    color: var(--light);
  }

  article:hover {
    opacity: 0.8;
  }

  @media (max-width: 500px) {
    & {
      width: 170px;
    }

    article a {
      font-size: 14px;
    }
  }
`;

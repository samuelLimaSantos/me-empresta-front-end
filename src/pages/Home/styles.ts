import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background);
`;

export const Content = styled.div`
  margin-bottom: 64px;
  .banner img {
    width: 100%;
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  margin-top: 32px;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 638px) {
    grid-template-columns: 1fr;
  }
`;

export const Product = styled.div`
  img {
    width: 100%;
    max-height: 195px;
    object-fit: cover;
  }

  .description {
    background-color: var(--light);
    padding: 16px;
    border-radius: 0 0 8px 8px;
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    p {
      font-weight: 400;
      margin-bottom: 32px;
    }

    a {
      text-decoration: none;
      color: var(--primary);
    }
  }
`;

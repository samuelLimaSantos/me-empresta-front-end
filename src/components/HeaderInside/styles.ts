import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 50px;
  background-color: #8651b5;

  @media (max-width: 837px) {
    grid-template-rows: 170px 60px;
  }
`;

export const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  section:nth-child(2) {
    width: 400px;
    height: 40px;
    background-color: var(--background);
    display: flex;
    align-items: center;
    border-radius: 8px;

    input {
      width: 370px;
      height: 40px;
      background-color: var(--background);
      padding: 8px;
      border: none;
      outline: none;
      border-radius: 8px;
      font-weight: 400;
    }

    svg {
      margin-right: 10px;
      color: var(--primary);
      cursor: pointer;
    }
  }

  section:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 120px;
    cursor: pointer;

    span {
      font-weight: 400;
      width: 100px;
      font-size: 12px;
      color: var(--light);
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid var(--light);
    }

    &:hover {
      span {
        font-weight: bold;
      }

      img {
        width: 52px;
        height: 52px;
      }
    }
  }

  @media (max-width: 837px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .input-search {
      order: 3;
      grid-column: auto / span 2;
      justify-self: center;
      margin-bottom: 16px;
      width: 90% !important;

      input {
        width: 95% !important;
      }
    }

    .box-perfil {
      justify-self: flex-end;
    }
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 120px;
    cursor: pointer;

    span {
      font-weight: 400;
      width: 100px;
      font-size: 12px;
      color: var(--light);
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid var(--light);
    }

    &:hover {
      span {
        font-weight: bold;
      }

      img {
        width: 52px;
        height: 52px;
      }
    }
  }
`;

export const Menu = styled.nav`
  background-color: var(--primary);
`;

export const MenuContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 50px;
  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 2fr 1fr;

  ul {
    cursor: pointer;

    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 17px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 16px;
    color: var(--light);

    li:hover {
      opacity: 0.8;
    }
  }

  .anunciar {
    text-decoration: none;
    align-self: center;
    justify-self: flex-end;
    padding-right: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      margin-right: 8px;
      font-weight: 400;
      color: var(--light);
    }

    svg {
      color: var(--light);
      stroke-width: 3;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 837px) {
    height: 60px;
  }

  @media (max-width: 640px) {
    & {
      grid-template-columns: 1fr;
    }

    & > div {
      display: none;
    }

    ul {
      display: none;
    }

    .anunciar {
      justify-self: center;
      padding-right: 0;
    }
  }
`;

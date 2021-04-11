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

  .box-perfil {
    text-align: center;
    width: 10vw;
    justify-self: flex-end;
  }

  .box-perfil span:hover {
    text-align: center;
    font-weight: 400;
  }

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
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid var(--light);
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

    img {
      height: 6vh;
      width: 18vw;
    }

    .box-perfil {
      width: 75vw;
    }

    .box-perfil span {
      width: 100%;
    }

    .box-perfil img {
      margin-left: 5%;
      margin-right: 5%;
      display: block;
      height: 5vh;
      width: 12vw;
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

    &:hover {
      span {
        color: yellow;
        font-size: 9pt;
      }
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid var(--light);
    }
  }
`;

export const Menu = styled.nav`
  background-color: var(--primary);
`;

export const MenuContent = styled.div`
  max-width: 1300px;
  display: flex;
  margin: 0 auto;
  height: 50px;
  align-items: center;

  .box-localizacao {
    display: flex;
    align-items: center;
    width: 17vw;
  }

  .box-localizacao img {
    height: 2vh;
    width: 2vw;
  }

  .box-localizacao section {
    color: white;
    font-size: 10pt;
    font-weight: 400;
  }

  nav {
    margin-left: 1%;
    margin-right: 1%;
    display: flex;
    width: 30vw;
    align-items: center;
  }

  nav p {
    font-size: 14pt;
    margin-left: 3%;
    margin-right: 3%;
    color: white;
    transition: 200ms;
  }

  nav p:hover {
    cursor: pointer;
    color: yellow;
    transition: 200ms;
  }

  .anunciar {
    width: 6vw;
    text-decoration: none;
    margin-right: 2%;
    margin-left: 6%;
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      font-size: 2vh;
      margin-right: 8px;
      font-weight: 500;
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

  .carrinho {
    text-decoration: none;
    font-size: 14pt;
    color: white;
    font-weight: 500;
    align-items: center;
    margin-right: 0;
    margin-left: 2%;
    transition: 200ms;
  }

  .carrinho:hover {
    transition: 200ms;
    color: yellow;
  }

  .carrinho img {
    width: 2vw;
    height: 2vh;
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

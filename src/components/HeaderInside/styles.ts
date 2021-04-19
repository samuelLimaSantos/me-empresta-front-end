import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 55px;
  background-color: #8651b5;

  .local-container {
    display: none;
  }

  @media (max-width: 600px) {
    grid-template-rows: 100px 30px;
    padding-top: 10px;

    .local-container {
      display: flex;
      margin-bottom: 2%;
      justify-content: center;
      align-items: center;
      width: 100vw;
    }

    .local-container img {
      height: 3vh;
      width: 3vw;
      margin-right: 1%;
    }

    .local-container p {
      font-size: 8pt;
      color: white;
    }

    .local-container strong {
      font-size: 8pt;
      color: white;
    }
  }

  @media (max-width: 900px) {
    grid-template-rows: 100px 30px;

    .local-container {
      display: flex;
      margin-bottom: 2%;
      justify-content: center;
      align-items: center;
      width: 100vw;
    }

    .local-container img {
      height: 2vh;
      width: 2vw;
      margin-right: 1%;
    }

    .local-container p {
      font-size: 8pt;
      color: white;
    }

    .local-container strong {
      font-size: 8pt;
      color: white;
    }
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

  @media (max-width: 900px) {
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
      height: 3%;
      width: 16vw;
    }

    .box-perfil {
      height: 3%;
      width: 75vw;
    }

    .box-perfil span {
      width: 100%;
    }

    .box-perfil img {
      margin-left: 5%;
      margin-right: 5%;
      display: block;
      height: 4vh;
      width: 10vw;
    }
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .input-search {
      order: 3;
      grid-column: auto / span 2;
      justify-self: center;
      margin-bottom: 16px;
      width: 70% !important;

      input {
        width: 95% !important;
      }
    }

    img {
      height: 3%;
      width: 16vw;
    }

    .box-perfil {
      height: 3%;
      width: 75vw;
    }

    .box-perfil span {
      width: 100%;
    }

    .box-perfil img {
      margin-left: 5%;
      margin-right: 5%;
      display: block;
      height: 4vh;
      width: 10vw;
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
        color: white;
        font-size: 9.5pt;
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
  @media (max-width: 900px) {
  }
`;

export const MenuContent = styled.div`
  max-width: 1300px;
  display: flex;
  margin: 0 auto;
  height: 50px;
  align-items: center;

  .local-container {
    display: block;
    display: flex;
    align-items: center;
    width: 20vw;
    margin-right: 3%;
  }

  .local-container img {
    height: 2vh;
    width: 2vw;
  }

  .local-container section {
    color: white;
    font-size: 10pt;
    font-weight: 400;
  }

  nav {
    margin-left: 1%;
    margin-right: 1%;
    display: flex;
    width: 25vw;
    align-items: center;
  }

  nav p {
    font-size: 12pt;
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

  @media (max-width: 900px) {
    display: flex;
    margin: 0 auto;
    height: 50px;
    align-items: center;

    .local-container {
      display: none;
    }

    nav {
      width: 100%;
      display: flex;
      align-items: center;
    }

    nav p {
      font-size: 8pt;
      color: white;
      margin-left: 4%;
      margin-right: 4%;
      transition: 200ms;
    }

    nav p:hover {
      cursor: pointer;
      color: yellow;
      transition: 200ms;
    }

    .anunciar {
      text-decoration: none;
      margin-right: 8%;
      margin-left: 0;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 1.5vh;
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
      display: flex;
      text-decoration: none;
      font-size: 1.5vh;
      color: white;
      font-weight: 500;
      margin-right: 4%;
      margin-left: 4%;
      transition: 200ms;
    }

    .carrinho:hover {
      transition: 200ms;
      color: yellow;
    }

    .carrinho img {
      width: 2.5vw;
      height: 2.5vh;
    }
  }

  @media (max-width: 600px) {
    nav p {
      font-size: 7.5pt;
      color: white;
      margin-left: 5%;
      margin-right: 4%;
      transition: 200ms;
    }

    nav p:hover {
      cursor: pointer;
      color: yellow;
      transition: 200ms;
    }

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

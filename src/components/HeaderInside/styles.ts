import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-right: 20px;
  background-color: #8651b5;
`;

export const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
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

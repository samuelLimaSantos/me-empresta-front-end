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
  max-width: 1300px;
  width: 60%;
  border-radius: 10px;
  background-color: #efefef;
  padding: 16px;
  margin-top: 32px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;

    img {
      width: 200px;
      height: 200px;
      margin-bottom: 16px;
      border-radius: 50%;
      object-fit: cover;
    }

    h2 {
      color: var(--primary);
    }
  }

  .description {
    margin-top: 64px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .options-buttons {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      a {
        text-decoration: none;
        color: var(--primary);
        margin-bottom: 12px;
      }

      a:hover {
        opacity: 0.8;
      }
    }
    .feedback {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        margin-bottom: 8px;
      }

      .stars {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 6px;

        svg {
          color: var(--primary);
          margin-bottom: 16px;
        }
      }

      a {
        text-decoration: none;
        color: var(--primary);
      }

      a:hover {
        opacity: 0.8;
      }
    }
  }
  button {
    background-color: var(--primary);
    padding: 8px 16px;
    color: var(--light);
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 50px;
    font-size: 24px;
    border-radius: 8px;
    border: none;
    outline: none;
    margin-bottom: 32px;
    cursor: pointer;
    transition: opacity 0.6s;
    margin: 40px auto;
  }

  button:hover {
    opacity: 0.8;
  }

  @media (max-width: 650px) {
    header {
      img {
        width: 150px;
      }
    }

    .description {
      flex-direction: column;

      .options-buttons {
        align-items: center;
      }

      .feedback {
        margin-top: 32px;
      }
    }
    button {
      width: 150px;
      font-size: 18px;
    }
  }
`;

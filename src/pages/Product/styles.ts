import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background);
`;

export const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 60px;
  padding-bottom: 30px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  img {
    width: 500px;
    max-width: 500px;
    align-self: center;
    justify-self: center;
    border-radius: 12px;
    object-fit: cover;
  }

  .data {
    .initial-information {
      h1 {
        color: var(--primary);
        margin-bottom: 8px;
      }
      .feedback {
        margin-bottom: 16px;

        .stars {
          margin-bottom: 8px;
        }
        svg {
          color: var(--primary);

          margin-right: 6px;
        }
      }

      .days-and-price {
        span {
          font-weight: 400;
          span {
            font-weight: 600;
            font-size: 30px;
            color: var(--primary);
          }
        }

        border-bottom: 1px solid #adadad;
        padding-bottom: 8px;
      }
    }
    .description {
      margin-top: 40px;
      margin-bottom: 16px;
      padding-bottom: 40px;
      border-bottom: 1px solid #adadad;
    }

    .about-user {
      .information {
        display: flex;
        p {
          font-weight: 400;
          margin-bottom: 3px;
        }
      }

      h1 {
        color: var(--primary);
        font-weight: 600;
        font-size: 24px;
        margin-bottom: 30px;
      }

      button {
        width: 200px;
        height: 70px;
        border-radius: 8px;
        background-color: rgba(154, 92, 209, 0.3);
        color: var(--primary);
        border: 2px solid var(--primary);
        margin-bottom: 30px;
        margin-right: 8px;
      }
    }

    button.emprest {
      background-color: var(--primary);
      padding: 8px 16px;
      color: var(--light);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      width: 200px;
      height: 50px;
      font-size: px;
      border-radius: 8px;
      border: none;
      outline: none;
      margin-bottom: 32px;
      cursor: pointer;
      transition: opacity 0.6s;
      margin: 40px auto;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      button.emprest:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    padding: 8px;

    img {
      width: 100%;
    }

    .data {
      margin-top: 16px;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 30% 4fr;
  max-width: 1300px;
  margin: 0 auto;

  img {
    height: 100%;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    img {
      display: none;
    }
  }
`;

export const Form = styled.form`
  background-color: var(--background);
  padding: 110px 16px 32px 16px;

  fieldset {
    border: none;
    max-width: 640px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }

  fieldset legend {
    font-size: 30px;
    color: var(--primary);
    text-align: center;
  }

  fieldset .container-dropzone {
    display: flex;
    justify-content: center;
  }

  .group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 32px;

    input {
      margin-top: 8px;
      background-color: #fff;
      height: 48px;
      border: 2px solid var(--primary);
      border-radius: 8px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      padding: 8px;
      height: 36px;
      outline: none;
      font-weight: 300;
      border-radius: 8px;
      flex: 1;
    }

    textarea {
      margin-top: 8px;
      background-color: #fff;
      height: 100px;
      border: 2px solid var(--primary);
      border-radius: 8px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      resize: none;
      padding: 8px;
      outline: none;
      font-weight: 300;
    }
  }

  .delivery_way {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    justify-items: center;
    margin-top: 8px;
    width: 100%;

    button {
      height: 70px;
      background-color: var(--background);
      border: 2px solid var(--primary);
      color: var(--primary);
      width: 100%;
    }

    button.active {
      background-color: rgba(154, 92, 209, 0.3);
      color: var(--primary);
      border: 2px solid var(--primary);
    }
  }

  a {
    text-decoration: none;
    color: var(--primary);
    font-weight: 400;
  }

  a:hover {
    font-weight: bold;
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

  @media (max-width: 900px) {
    & {
      border-radius: 0;
    }

    .logo-mobile {
      display: flex;
    }
  }
`;

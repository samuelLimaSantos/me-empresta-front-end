import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: none;
  }
`;

export const ImageContainer = styled.section`
  justify-self: center;
  align-self: center;
  img {
    width: 85%;
  }

  @media (max-width: 900px) {
    & {
      display: none;
    }
  }
`;

export const Form = styled.form`
  background-color: var(--background);
  height: 110vh;
  display: flex;
  align-content: center;
  padding: 110px 16px 32px 16px;
  margin-top: -80px;
  border-radius: 32px 0 0 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  z-index: 9999999;

  .logo-mobile {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    display: none;
  }

  .logo-mobile img {
    width: 190px;
  }

  fieldset {
    border: none;
    max-width: 640px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }

  fieldset legend {
    font-size: 30px;
    color: var(--primary);
    text-align: center;
    margin-bottom: 20px;
  }

  section {
    margin-bottom: 32px;
    width: 100%;
    max-width: 500px;
  }

  section label {
    color: var(--primary);
  }

  section .input {
    margin-top: 8px;
    background-color: #fff;
    height: 48px;
    width: 95%;
    display: flex;
    align-items: center;
    border: 2px solid var(--primary);
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }

  section .input input {
    width: 95%;
    border: none;
    padding: 8px;
    height: 36px;
    outline: none;
    font-weight: 300;
    border-radius: 8px;
  }

  section .input svg {
    margin-right: 15px;
    color: var(--primary);
  }

  a {
    text-decoration: none;
    color: var(--primary);
    font-weight: 400;
  }

  a:hover {
    font-weight: bold;
  }

  .terms {
    margin: 0 auto 40px;
    width: 100%;
    max-width: 500px;
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
  }

  button:hover {
    opacity: 0.8;
  }

  @media (max-width: 900px) {
    margin-top: -67px;
    & {
      border-radius: 0;
      flex-direction: column;
    }

    legend {
      margin-bottom: 32px;
    }

    .logo-mobile {
      margin-top: -20%;
      display: flex;
    }

    section {
      margin-bottom: 32px;
      width: 100%;
      max-width: 500px;
    }

    section label {
      color: var(--primary);
    }

    section .input input {
      width: 70%;
      border: none;
      padding: 8px;
      height: 36px;
      outline: none;
      font-weight: 300;
      border-radius: 8px;
    }

    section .input svg {
      margin-left: 20%;
    }
  }

  @media (max-height: 700px) {
    & {
      height: 105vh;
    }
  }
`;

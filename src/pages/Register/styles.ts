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
  margin-top: 100px;
  justify-self: center;
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
  padding: 110px 16px 32px 16px;
  margin-top: -90px;
  border-radius: 32px 0 0 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);

  fieldset {
    border: none;
    max-width: 640px;
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
  }

  fieldset .container-dropzone {
    margin-bottom: 32px;
  }

  section {
    margin-bottom: 32px;
    width: 100%;
    max-width: 500px;
  }

  section .input {
    margin-top: 8px;
    background-color: #fff;
    height: 48px;
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
    & {
      border-radius: 0;
    }
  }
`;

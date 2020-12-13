import React from 'react';
import errorImage from '../../assets/error.svg';
import logo from '../../assets/Logo.png';
import { Container, Content } from '../Success/styles';

interface IErrorScreenProps {
  text: string;
}

const ErrorScreen: React.FC<IErrorScreenProps> = ({
  text,
}: IErrorScreenProps) => {
  return (
    <Container>
      <Content>
        <img src={errorImage} alt="Imagem de erro" />
        <h1>{text}</h1>
        <img src={logo} alt="Logo" />
      </Content>
    </Container>
  );
};

export default ErrorScreen;

import React from 'react';
import successImage from '../../assets/success.svg';
import logo from '../../assets/Logo.png';
import { Container, Content } from './styles';

interface ISuccessProps {
  text: string;
}

const Success: React.FC<ISuccessProps> = ({ text }: ISuccessProps) => {
  return (
    <Container>
      <Content>
        <img src={successImage} alt="Imagem de sucesso" />
        <h1>{text}</h1>
        <img src={logo} alt="Logo" />
      </Content>
    </Container>
  );
};

export default Success;

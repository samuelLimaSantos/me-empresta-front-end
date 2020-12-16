import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import HeaderOutside from '../../components/HeaderOutside';
import backgroundImage from '../../assets/background-image-landing.svg';
import {
  Container,
  Content,
  Description,
  ImageContainer,
  ButtonContainer,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <HeaderOutside />
      <Content>
        <Description>
          <h1>
            ALUGUE RECEBA
            <span>REUTILIZE</span>
          </h1>
          <p>
            A sua plataforma para
            <span> aluguel</span> inteiramente <span>gratuíta</span>. Aqui você
            encontra diversos produtos para <span>emprestar</span> ou{' '}
            <span>pegar emprestado</span>. Conheça nossa plataforma,{' '}
            <span>escolha seus produtos</span>, e <span>alugue-os</span>.
          </p>
          <ButtonContainer to="/home">
            <div>Conheça</div>
            <FiArrowRight />
          </ButtonContainer>
        </Description>
        <ImageContainer>
          <img src={backgroundImage} alt="Imagem de background" />
        </ImageContainer>
      </Content>
    </Container>
  );
};

export default Landing;

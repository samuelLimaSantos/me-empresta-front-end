import React from 'react';
import { FiLogIn, FiUsers } from 'react-icons/fi';
import Logo from '../../assets/Logo.png';
import { Container, ContainerLogo, ContainerMenu } from './styles';

const HeaderOutside: React.FC = () => {
  return (
    <Container>
      <ContainerLogo>
        <img src={Logo} alt="logo" />
        <h1>ME EMPRESTA</h1>
      </ContainerLogo>
      <ContainerMenu>
        <article>
          <a href="/">Sobre nós</a>
          <FiUsers />
        </article>

        <article>
          <a href="/">Login</a>
          <FiLogIn />
        </article>
      </ContainerMenu>
    </Container>
  );
};

export default HeaderOutside;

import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiUsers } from 'react-icons/fi';
import Logo from '../../assets/Logo.png';
import { Container, ContainerLogo, ContainerMenu } from './styles';

interface HeaderProps {
  menuPurple?: boolean;
}

const HeaderOutside: React.FC<HeaderProps> = ({ menuPurple }: HeaderProps) => {
  return (
    <Container>
      <ContainerLogo>
        <Link to="/">
          <img src={Logo} alt="logo" />
          <h1>ME EMPRESTA</h1>
        </Link>
      </ContainerLogo>
      <ContainerMenu>
        <article className={menuPurple ? 'purple' : 'white'}>
          <Link to="/register">Sobre nós</Link>
          <FiUsers />
        </article>

        <article className={menuPurple ? 'purple' : 'white'}>
          <Link to="/login">Login</Link>
          <FiLogIn />
        </article>
      </ContainerMenu>
    </Container>
  );
};

export default HeaderOutside;

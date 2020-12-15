import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import Logo from '../../assets/Logo.png';
import { Container, Content, LinkContainer } from './styles';
import UserImage from '../../assets/user.png';

interface HeaderInsideProps {
  imagePath?: string;
  name?: string;
}

const HeaderInside: React.FC<HeaderInsideProps> = ({
  imagePath,
  name,
}: HeaderInsideProps) => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={Logo} alt="Logo do me empresta" />
        </Link>

        <section>
          <input type="text" placeholder="Pesquise algo.." />
          <FiSearch />
        </section>

        {name ? (
          <section>
            <span>Bem-vindo {name}</span>
            <img src={imagePath} alt="Imagem do usuário" />
          </section>
        ) : (
          <LinkContainer to="login">
            <section>
              <span>Faça o login</span>
              <img src={UserImage} alt="Imagem do usuário" />
            </section>
          </LinkContainer>
        )}
      </Content>
    </Container>
  );
};

export default HeaderInside;

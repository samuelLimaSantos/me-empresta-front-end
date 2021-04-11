import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlusSquare } from 'react-icons/fi';
import Logo from '../../assets/Logo.png';
import { Container, Content, LinkContainer, Menu, MenuContent } from './styles';
import UserImage from '../../assets/user.png';
import Loading from '../Loading';
import api from '../../services/api';

interface UserProps {
  name: string;
  photo_id: string;
}

const HeaderInside: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({} as UserProps);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const Authorization = `Bearer ${token}`;
    setIsLoading(true);
    api
      .get(`/user/${id}`, {
        headers: {
          Authorization,
        },
      })
      .then(response => {
        setUserData(response.data);
        setIsLoading(false);
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Content>
        <Link to="/home">
          <img src={Logo} alt="Logo do me empresta" />
        </Link>

        <section className="input-search">
          <input type="text" placeholder="Pesquise algo.." />
          <FiSearch />
        </section>

        {userData.name ? (
          <LinkContainer to="/profile">
            <section className="box-perfil">
              <span>Bem-vindo, {userData.name}</span>
              <img
                src={`https://upload-meempresta.s3.amazonaws.com/${userData.photo_id}`}
                alt="Imagem do usuário"
              />
            </section>
          </LinkContainer>
        ) : (
          <LinkContainer to="/login">
            <section className="box-perfil">
              <span>Faça o login</span>
              <img src={UserImage} alt="Imagem do usuário" />
            </section>
          </LinkContainer>
        )}
      </Content>
      <Menu>
        <MenuContent>
          <div />
          <ul>
            <li>Categorias</li>
            <li>Novos</li>
            <li>Mais alugados</li>
            <li>Meu carrinho</li>
          </ul>

          <Link to="/new-product" className="anunciar">
            <span>Emprestar</span>
            <FiPlusSquare width="3" size="28px" />
          </Link>
        </MenuContent>
      </Menu>
    </Container>
  );
};

export default HeaderInside;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlusSquare } from 'react-icons/fi';
import Logo from '../../assets/Logo.png';
import { Container, Content, LinkContainer, Menu, MenuContent } from './styles';
import UserImage from '../../assets/user.png';
import MapIcon from '../../assets/map.svg';
import CartIcon from '../../assets/cart.svg';
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
      <section className="box-localizacao">
        <img src={MapIcon} alt="Icone-localizacao" />
        <p>Enviar para Jonisson Gomes da Silva </p>
        <strong>, Recife - 53610</strong>
      </section>
      <Menu>
        <MenuContent>
          <section className="box-localizacao">
            <img src={MapIcon} alt="Icone-localizacao" />
            <section>
              <p>Enviar para Jonisson Gomes da Silva</p>
              <strong>Recife - 53610</strong>
            </section>
          </section>
          <nav>
            <p>Novos</p>
            <p>Bombando</p>
            <p>Categorias</p>
            <p>Ajuda</p>
          </nav>

          <Link to="/new-product" className="anunciar">
            <span>Emprestar</span>
            <FiPlusSquare width="3" size="32px" />
          </Link>

          <Link to="/new-product" className="carrinho">
            <span>Carrinho</span>
            <img src={CartIcon} alt="Icone-carrinho" />
          </Link>
        </MenuContent>
      </Menu>
    </Container>
  );
};

export default HeaderInside;

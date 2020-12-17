import React from 'react';
import { Link } from 'react-router-dom';
import HeaderInside from '../../components/HeaderInside';
import { Container, Content } from './styles';

// Importações de imagens
import iconProfile from '../../assets/user.png';

const Profile: React.FC = () => {
  return (
    <Container>
      <HeaderInside />

      <Content>
        <img src={iconProfile} alt="Profile" />
        <h2>Jhonny Quest</h2>
        <h4>Recife-PE</h4>
        <button type="button" className="edit-btn">
          Editar perfil
        </button>

        <div className="feedback">
          <h3>Avaliação</h3>

          <Link to="/profile"> Ver meu feedback</Link>
        </div>

        <section className="Options-buttons">
          <Link to="/profile/">
            <button type="button"> Meus itens alugados </button>
          </Link>

          <Link to="/profile/">
            <button type="button"> Meus itens anunciados </button>
          </Link>
        </section>
        <button type="button" className="Logout">
          Sair da conta
        </button>
      </Content>
    </Container>
  );
};
export default Profile;

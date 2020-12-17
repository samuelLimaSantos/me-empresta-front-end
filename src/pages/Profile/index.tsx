import React, { useEffect, useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import api from '../../services/api';
import HeaderInside from '../../components/HeaderInside';
import { Container, Content } from './styles';
import { Context } from '../../context';

import Loading from '../../components/Loading';

interface UserData {
  id: string;
  photo_id: string;
  name: string;
}

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { handleLogout } = useContext(Context);

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

  function handleSetLogout() {
    handleLogout();
    history.push('/');
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderInside />

      <Content>
        <header>
          <img
            src={`https://upload-meempresta.s3.amazonaws.com/${userData.photo_id}`}
            alt="Foto de perfil"
          />
          <h2>{userData.name}</h2>
          <h4>Recife-PE</h4>
        </header>
        <section className="description">
          <section className="options-buttons">
            <Link to="/profile/">Meus itens alugados</Link>

            <Link to="/profile/">Meus itens anunciados</Link>
          </section>
          <div className="feedback">
            <h3>Avaliação</h3>
            <div className="stars">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </div>
            <Link to="/profile"> Ver meu feedback</Link>
          </div>
        </section>
        <button type="button" className="Logout" onClick={handleSetLogout}>
          Sair da conta
        </button>
      </Content>
    </Container>
  );
};
export default Profile;

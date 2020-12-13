import React, { useState, useEffect } from 'react';
import api, { environment } from '../../services/api';
import { Container } from './styles';

interface UserProps {
  name: string;
  photo_id: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState({} as UserProps);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    api.get(`/user/${id}`).then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Seja bem vindo seu puto {data.name}</h1>
      <img src={`${environment}/uploads/${data.photo_id}`} alt="" />
    </Container>
  );
};

export default Home;

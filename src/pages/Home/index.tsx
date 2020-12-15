import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import api, { environment } from '../../services/api';
import HeaderInside from '../../components/HeaderInside';
import { Container } from './styles';

interface UserProps {
  name: string;
  photo_id: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState({} as UserProps);
  const [isLoading, setIsLoading] = useState(false);

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
        setData(response.data);
        setIsLoading(false);
      });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderInside
        imagePath={`${environment}/uploads/${data.photo_id}`}
        name={data.name}
      />
    </Container>
  );
};

export default Home;

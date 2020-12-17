import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import api from '../../services/api';
import HeaderInside from '../../components/HeaderInside';
import BannerImage from '../../assets/Banner.svg';
import { Container, Content, Products, Product } from './styles';

interface ProductProps {
  id: string;
  photo_id: string;
  title: string;
  description: string;
  price: string;
  quantity_days: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api.get(`/product`).then(response => {
      setProducts(response.data);
      setIsLoading(false);
    });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderInside />
      <Content>
        <div className="banner">
          <img src={BannerImage} alt="Banner da Black Friday" />
        </div>

        <Products>
          {products?.map(product => (
            <Product key={product.id}>
              <img
                src={`https://upload-meempresta.s3.amazonaws.com/${product.photo_id}`}
                alt="Foto do produto"
              />

              <div className="description">
                <h1>{product.title}</h1>
                <p>
                  {product.description.length > 25
                    ? `${product.description.substr(0, 25)}...`
                    : product.description}
                </p>
                <h1>
                  R${product.price} por {product.quantity_days} dias
                </h1>
                <Link to={`product/${product.id}`}>Saber mais</Link>
              </div>
            </Product>
          ))}
        </Products>
      </Content>
    </Container>
  );
};

export default Home;

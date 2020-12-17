import React, { useEffect, useState } from 'react';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import HeaderInside from '../../components/HeaderInside';
import Loading from '../../components/Loading';
import { Container, Content } from './styles';

interface ProductProps {
  id: string;
  photo_id: string;
  title: string;
  description: string;
  price: string;
  quantity_days: number;
  delivery_way: string;
  delivery_point: string;
  uf: string;
  city: string;
}

const Product: React.FC = () => {
  const { id } = useParams() as { id: string };
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(`product/${id}`).then(response => {
      setProduct(response.data);
      setIsLoading(false);
    });
    setIsLoading(false);
  }, [id]);

  return (
    <Container>
      {isLoading && <Loading />}
      <HeaderInside />
      <Content>
        <img
          src={`https://upload-meempresta.s3.amazonaws.com/${product.photo_id}`}
          alt="Foto do produto"
        />

        <div className="data">
          <div className="initial-information">
            <h1>{product.title}</h1>

            <div className="feedback">
              <div className="stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>

              <span>5 pessoas avaliaram o alugador</span>
            </div>

            <div className="days-and-price">
              <span>
                {product.quantity_days} dias por <span>R${product.price}</span>
              </span>
            </div>
          </div>

          <div className="description">
            <p>{product.description}</p>
          </div>

          <div className="about-user">
            <h1>Sobre entrega</h1>
            <div className="information">
              <button type="button">
                {product.delivery_way === 'presential'
                  ? 'Presencial'
                  : 'Correios'}
              </button>

              {product.delivery_way === 'presential' && (
                <div>
                  <p>Ponto de entrega: {product.delivery_point}</p>
                  <p>Cidade: {product.city}</p>
                  <p>Estado: {product.uf}</p>
                </div>
              )}
            </div>
          </div>
          <div className="button">
            <button type="button" className="emprest">
              Pegar emprestado
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Product;

import React, { useEffect, useState } from 'react';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import HeaderInside from '../../components/HeaderInside';
import { Container } from './styles';
import Loading from '../../components/Loading';

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
  user_id: {
    name: string;
    email: string;
    whatsapp: string;
  };
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderInside />
      <div className="content">
        <img
          src={`https://upload-meempresta.s3.amazonaws.com/${product.photo_id}`}
          alt="Foto do produto"
        />

        <div className="data">
          <div className="initial-information">
            <h1>{product.title}</h1>

            <span>Alugado por {product.user_id.name}</span>
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
            <h1>Sobre quem vai emprestar e entrega</h1>
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

              <div>
                <p>Nome: {product.user_id.name}</p>
                <p>Contato: {product.user_id.whatsapp}</p>
              </div>
            </div>
          </div>
          <button type="button">Pegar emprestado</button>
        </div>
      </div>
    </Container>
  );
};

export default Product;

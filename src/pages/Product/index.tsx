import React, { useEffect, useState, useCallback } from 'react';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { useParams, useHistory } from 'react-router-dom';
import api, { imageEnvironment } from '../../services/api';
import HeaderInside from '../../components/HeaderInside';
import Loading from '../../components/Loading';
import { Container, Content } from './styles';
import Success from '../../components/Success';

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
  const [success, setSuccess] = useState(false);
  const [price, setPrice] = useState('');

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    api.get(`product/${id}`).then(response => {
      setPrice(response.data.price.replace('.', ','));
      setProduct(response.data);
      setIsLoading(false);
    });
  }, [id]);

  const handleBoughtProduct = useCallback(() => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      history.push('/home');
    }, 2000);
  }, [history]);

  return (
    <Container>
      {isLoading && <Loading />}
      {success && <Success text="Você pegou emprestado" />}
      <HeaderInside />
      <Content>
        <img
          src={`${imageEnvironment}/${product.photo_id}`}
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
                {product.quantity_days} dias por <span>R${price}</span>
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
            <button
              type="button"
              className="emprest"
              onClick={handleBoughtProduct}
            >
              Pegar emprestado
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Product;

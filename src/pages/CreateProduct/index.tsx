import React, { useState, useCallback, FormEvent } from 'react';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';
import AsideImage from '../../assets/asideImage.svg';
import Dropzone from '../../components/Dropzone';
import HeaderInside from '../../components/HeaderInside';
import { Container, Content, Form } from './styles';
import api from '../../services/api';
import Loading from '../../components/Loading';
import ErrorScreen from '../../components/ErrorScreen';
import Success from '../../components/Success';

const CreateProduct: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity_days, setQuantityDays] = useState(0);
  const [isPresential, setIsPresential] = useState(false);
  const [delivery_point, setDeliveryPoint] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const history = useHistory();

  const handleCreateProduct = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (!userId || !token) {
        history.push('/login');
        return;
      }

      const priceNumbers = price.replace(/([^\d])+/gim, '');

      const newPrice = `${priceNumbers.substr(0, 4)}.${priceNumbers.substr(4)}`;

      const data = new FormData();

      data.append('user_id', userId);
      data.append('title', title);
      data.append('description', description);
      data.append('price', newPrice);
      data.append('quantity_days', quantity_days.toString());
      data.append('delivery_way', isPresential ? 'presential' : 'mail');
      data.append('delivery_point', delivery_point);
      data.append('uf', uf);
      data.append('city', city);

      if (selectedFile) {
        data.append('photo', selectedFile);
      } else {
        alert('Selecione uma foto');
        return;
      }

      try {
        const Authorization = `Bearer ${token}`;
        setLoading(true);
        await api.post('/product', data, {
          headers: {
            Authorization,
          },
        });
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
          history.push('/home');
        }, 2000);
      } catch (err) {
        setLoading(false);
        setError(true);
        setTimeout(() => {
          setError(false);
          history.push('/new-product');
        }, 3000);
      }
    },
    [
      city,
      title,
      description,
      price,
      quantity_days,
      delivery_point,
      uf,
      history,
      isPresential,
      selectedFile,
    ],
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderInside />
      <Content>
        {success && <Success text="Item cadastrado com sucesso!" />}
        {error && <ErrorScreen text="Ocorreu algum erro." />}
        <img src={AsideImage} alt="Imagem de umm astronauta" />
        <Form onSubmit={handleCreateProduct}>
          <fieldset>
            <legend>Cadastrar produto</legend>
            <div className="container-dropzone">
              <Dropzone onFileUploaded={setSelectedFile} name="produto" />
            </div>

            <section>
              <label htmlFor="title">Título</label>

              <input
                type="text"
                id="title"
                required
                value={title}
                onChange={({ target }) => setTitle(target.value)}
              />
            </section>

            <section>
              <label htmlFor="description">Descrição</label>

              <textarea
                id="description"
                value={description}
                onChange={({ target }) => setDescription(target.value)}
                maxLength={500}
                required
              />
            </section>

            <div className="group">
              <section>
                <label htmlFor="price">Preço</label>
                <InputMask
                  id="price"
                  mask="R$9999,99"
                  required
                  value={price}
                  onChange={({ target }) => setPrice(target.value)}
                />
              </section>

              <section>
                <label htmlFor="quantity">Quantidade de dias </label>

                <input
                  type="number"
                  id="quantity"
                  max={50}
                  required
                  value={quantity_days}
                  onChange={({ target }) => {
                    setQuantityDays(Number(target.value));
                  }}
                />
              </section>
            </div>

            <section className="delivery_way">
              <button
                type="button"
                className={isPresential ? 'active' : ''}
                onClick={() => {
                  setIsPresential(true);
                }}
              >
                Presencial
              </button>

              <button
                type="button"
                className={isPresential ? '' : 'active'}
                onClick={() => {
                  setIsPresential(false);
                }}
              >
                Correios
              </button>
            </section>

            {isPresential && (
              <>
                <section>
                  <label htmlFor="delivery_point">Ponto de encontro</label>

                  <input
                    type="text"
                    id="delivery_point"
                    required
                    value={delivery_point}
                    onChange={({ target }) => setDeliveryPoint(target.value)}
                  />
                </section>
                <div className="group">
                  <section>
                    <label htmlFor="UF">Estado</label>

                    <input
                      type="text"
                      id="UF"
                      required
                      maxLength={2}
                      value={uf}
                      onChange={({ target }) => setUf(target.value)}
                    />
                  </section>

                  <section>
                    <label htmlFor="city">Cidade</label>

                    <input
                      type="text"
                      id="city"
                      required
                      value={city}
                      onChange={({ target }) => setCity(target.value)}
                    />
                  </section>
                </div>
              </>
            )}
            <button type="submit">Emprestar</button>
          </fieldset>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateProduct;

import React, { useState, useCallback, FormEvent, useContext } from 'react';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';
import HeaderOutside from '../../components/HeaderOutside';
import LoginImage from '../../assets/login.svg';
import Logo from '../../assets/Logo.png';
import { Form, Container, Content, ImageContainer } from './styles';
import { Context } from '../../context';
import api from '../../services/api';
import Loading from '../../components/Loading';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(Context);

  const history = useHistory();

  const handleLogin = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        setIsLoading(true);
        const { data } = await api.post('/session', {
          email,
          password,
        });
        setIsLoading(false);

        const { token, userId } = data;

        login(token, userId);
        history.push('/home');
      } catch (error) {
        setIsLoading(false);
        alert(error.response.data.message);
      }
    },
    [email, password, login, history],
  );

  return (
    <Container>
      {isLoading && <Loading />}
      <HeaderOutside />
      <Content>
        <ImageContainer>
          <img src={LoginImage} alt="Imagem de login" />
        </ImageContainer>
        <Form onSubmit={handleLogin}>
          <div className="logo-mobile">
            <img src={Logo} alt="logo-mobile" />
          </div>
          <fieldset>
            <legend>Iniciar sessão</legend>

            <section>
              <label htmlFor="email">E-mail</label>
              <div className="input">
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
                <FiMail />
              </div>
            </section>

            <section>
              <label htmlFor="password">Senha</label>
              <div className="input">
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
                <RiLockPasswordLine />
              </div>
            </section>
            <button type="submit">Entrar</button>
            <Link to="/register">Não tem cadastro? Crie sua conta.</Link>
          </fieldset>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;

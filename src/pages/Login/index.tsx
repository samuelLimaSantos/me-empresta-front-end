import React, { useState, useCallback, FormEvent, useContext } from 'react';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import HeaderOutside from '../../components/HeaderOutside';
import LoginImage from '../../assets/login.svg';
import Logo from '../../assets/Logo.png';
import { Form, Container, Content, ImageContainer } from './styles';
import { Context } from '../../context';
import api from '../../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(Context);

  const handleLogin = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        const { data } = await api.post('/session', {
          email,
          password,
        });

        const { token } = data;

        login(token);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    [email, password, login],
  );

  return (
    <Container>
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
            <Link to="/register">Já tem cadastro? Faça login.</Link>
          </fieldset>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;

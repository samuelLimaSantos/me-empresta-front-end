import React, { useState, useCallback, FormEvent } from 'react';
import { FiUser, FiCreditCard, FiMail } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import InputMask from 'react-input-mask';
import Header from '../../components/HeaderOutside';
import RegisterImage from '../../assets/register.svg';
import Dropzone from '../../components/Dropzone';
import api from '../../services/api';
import Logo from '../../assets/Logo.png';
import { Container, Content, ImageContainer, Form } from './styles';
import Success from '../../components/Success';
import ErrorScreen from '../../components/ErrorScreen';
import Loading from '../../components/Loading';

const Register: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmitData = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const data = new FormData();

      data.append('name', name);
      data.append('cpf', cpf);
      data.append('whatsapp', whatsapp);
      data.append('email', email);
      data.append('password', password);

      if (selectedFile) {
        data.append('photo', selectedFile);
      } else {
        return;
      }

      try {
        setLoading(true);
        await api.post('/user', data);
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
          history.push('/login');
        }, 2000);
      } catch (err) {
        if (err.response.status === 400) {
          setError(true);
          setLoading(false);
          setTimeout(() => {
            setError(false);
            history.push('/register');
          }, 3000);
        }
      }
    },
    [name, cpf, whatsapp, email, password, selectedFile, history],
  );

  return (
    <Container>
      <Header menuPurple />
      {isLoading && <Loading />}
      <Content>
        {success && <Success text="Cadastro feito com sucesso!" />}
        {error && <ErrorScreen text="Ocorreu algum erro." />}
        <ImageContainer>
          <img src={RegisterImage} alt="Imagem de registro" />
        </ImageContainer>

        <Form onSubmit={handleSubmitData}>
          <div className="logo-mobile">
            <img src={Logo} alt="logo-mobile" />
          </div>
          <fieldset>
            <legend>Registrar-se</legend>
            <div className="container-dropzone">
              <Dropzone onFileUploaded={setSelectedFile} name="perfil" />
            </div>

            <section>
              <label htmlFor="name">Nome</label>
              <div className="input">
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
                <FiUser />
              </div>
            </section>

            <section>
              <label htmlFor="cpf">CPF</label>
              <div className="input">
                <InputMask
                  id="cpf"
                  mask="999.999.999-99"
                  required
                  value={cpf}
                  onChange={({ target }) => setCpf(target.value)}
                />
                <FiCreditCard />
              </div>
            </section>

            <section>
              <label htmlFor="contact">Whatsapp</label>
              <div className="input">
                <InputMask
                  id="contact"
                  mask="(99) 9 9999-9999"
                  required
                  value={whatsapp}
                  onChange={({ target }) => setWhatsapp(target.value)}
                />
                <AiOutlineWhatsApp />
              </div>
            </section>

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

            <div className="terms">
              <a href="/">Termos de compromisso</a>
            </div>

            <button type="submit">Cadastrar-se</button>

            <Link to="/login">Já tem cadastro? Faça login.</Link>
          </fieldset>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;

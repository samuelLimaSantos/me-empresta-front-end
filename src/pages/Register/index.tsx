import React, { useState, useCallback, FormEvent } from 'react';
import { FiUser, FiCreditCard, FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import InputMask from 'react-input-mask';
import Header from '../../components/HeaderOutside';
import RegisterImage from '../../assets/register.svg';
import Dropzone from '../../components/Dropzone';
import api from '../../services/api';
import { Container, Content, ImageContainer, Form } from './styles';

const Register: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        alert('Imagem é obrigatória');
        return;
      }

      console.log(data);

      await api.post('/user', data);
    },
    [name, cpf, whatsapp, email, password, selectedFile],
  );

  return (
    <Container>
      <Header menuPurple />
      <Content>
        <ImageContainer>
          <img src={RegisterImage} alt="Imagem de registro" />
        </ImageContainer>

        <Form onSubmit={handleSubmitData}>
          <fieldset>
            <legend>Registrar-se</legend>
            <div className="container-dropzone">
              <Dropzone onFileUploaded={setSelectedFile} />
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

            <button type="submit">Cadastra-se</button>

            <a href="/">Já tem cadastro? Faça login.</a>
          </fieldset>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;

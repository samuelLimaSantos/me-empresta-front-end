import React from 'react';
import HeaderOutside from '../../components/HeaderOutside';
import { Container, Content, Technologies, Team } from './styles';
import ReactImage from '../../assets/about/react-logo.png';
import NodeImage from '../../assets/about/nodejs-1-logo.png';
import TypeScriptImage from '../../assets/about/ts.png';
import PostgresImage from '../../assets/about/postgres.png';
import AnaImage from '../../assets/about/julia.jpeg';
import GabrielImage from '../../assets/about/gabriel.jpeg';
import JoniImage from '../../assets/about/joni.jpeg';
import JeffImage from '../../assets/about/jeff.jpeg';
import LeonImage from '../../assets/about/leon.jpeg';
import SamuelImage from '../../assets/about/samuel.jpeg';

const AboutUs: React.FC = () => {
  return (
    <Container>
      <HeaderOutside />
      <Content>
        <Team>
          <h1>Nosso time</h1>
          <div>
            <article>
              <img src={AnaImage} alt="Imagem de Ana" />
              <h3>Ana Júlia</h3>
              <span>Scrum Master</span>
            </article>
            <article>
              <img src={GabrielImage} alt="Imagem de Gabriel" />
              <h3>Gabriel Antônio</h3>
              <span>Front-end Developer</span>
            </article>
            <article>
              <img src={JoniImage} alt="Imagem de Joni" />
              <h3>Jonisson Gomes</h3>
              <span>Product Owner</span>
            </article>
            <article>
              <img src={JeffImage} alt="Imagem de Jeff" />
              <h3>Jefferson Ezequiel</h3>
              <span>Data Analyst</span>
            </article>
            <article>
              <img src={LeonImage} alt="Imagem de Leon" />
              <h3>Leon Douglas</h3>
              <span>Software Engineering Back-End</span>
            </article>
            <article>
              <img src={SamuelImage} alt="Imagem de Samuel" />
              <h3>Samuel Santos</h3>
              <span>Fullstack Developer</span>
            </article>
          </div>
        </Team>
        <Technologies>
          <h1>Tecnologias utilizadas</h1>
          <div>
            <img src={ReactImage} alt="Logo do React" />
            <img src={NodeImage} alt="Logo Nodejs" />
            <img src={TypeScriptImage} alt="Logo Typescript" />
            <img src={PostgresImage} alt="Logo Postgres" />
          </div>
        </Technologies>
      </Content>
    </Container>
  );
};

export default AboutUs;

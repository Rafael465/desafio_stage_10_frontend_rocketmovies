import { Container, Links, Content } from './styles';
import { FiStar, FiArrowLeft, FiClock } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';


import { Link } from "react-router-dom";
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/">
            <FiArrowLeft />
            <p>Voltar</p>
          </Link>
          
          <div id='title'>
            <h1>A Fuga das Galinhas</h1>
            <div id="icon">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FiStar />
            </div>
          </div>

          <div id='profile'>
            <img
              src="https://github.com/Rafael465.png" 
              alt="Foto do usuário" 
            />

            <span>Por Rafael Penner</span>
            <FiClock id='icon'/>
            <span>13/11/2023 às 19:30</span>
          </div>

          <Section>
            <Tag title="animação"/>
            <Tag title="drama"/>
          </Section>          
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt eius, vero sapiente libero magnam temporibus ab non cumque officia officiis aliquam dolores repellendus cum consectetur dignissimos enim. 
            At, facere odit!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt eius, vero sapiente libero magnam temporibus ab non cumque officia officiis aliquam dolores repellendus cum consectetur dignissimos enim. 
            At, facere odit!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Nesciunt eius, vero sapiente libero magnam temporibus ab non cumque officia officiis aliquam dolores repellendus cum consectetur dignissimos enim. 
            At, facere odit!
          </p>
        </Content>
      </main>
    </Container>
  )
}
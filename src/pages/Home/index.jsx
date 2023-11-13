import { FiPlus, FiStar } from 'react-icons/fi';
import { Container, Content, NewNote } from './styles';

import { Note } from '../../components/Note';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
    return (
        <Container>
            
            <Header />

            <Content>
                <div id="top">
                    <h2>Meus filmes</h2>
                    <NewNote to="/new">
                        <FiPlus />
                        Criar nota
                    </NewNote>
                </div>
                <Section>
                    <Note data={{
                        title: 'A Fuga das Galinhas',
                        tags: [
                            {id: '1', name: 'animação'},
                            {id: '2', name: 'drama'}
                        ]
                    }} />
                    <Note data={{
                        title: 'A Fuga das Galinhas',
                        tags: [
                            {id: '1', name: 'animação'},
                            {id: '2', name: 'drama'}
                        ]
                    }} />
                    <Note data={{
                        title: 'A Fuga das Galinhas',
                        tags: [
                            {id: '1', name: 'animação'},
                            {id: '2', name: 'drama'}
                        ]
                    }} />
                    <Note data={{
                        title: 'A Fuga das Galinhas',
                        tags: [
                            {id: '1', name: 'animação'},
                            {id: '2', name: 'drama'}
                        ]
                    }} />
                    <Note data={{
                        title: 'A Fuga das Galinhas',
                        tags: [
                            {id: '1', name: 'animação'},
                            {id: '2', name: 'drama'}
                        ]
                    }} />
                </Section>
            </Content>

        </Container>
    );
}
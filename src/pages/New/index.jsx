import { FiArrowLeft } from 'react-icons/fi';
import { Link } from "react-router-dom";

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <div id="back">
                            <FiArrowLeft />
                            <Link to="/">Voltar</Link>
                        </div>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="title">
                            <Input placeholder="Título" />
                            <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <Textarea placeholder="Observações" />

                    <h2>Marcadores</h2>

                    <div className="tags">
                        <NoteItem value="React"/>
                        <NoteItem isNew placeholder="Novo marcador" />
                    </div>
                    <footer>
                        <Button id="delete" title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </footer>
                </Form>
            </main>
        </Container>
    );
}
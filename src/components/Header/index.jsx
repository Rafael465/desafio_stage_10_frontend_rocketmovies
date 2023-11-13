import { Container, Profile, Search, Brand } from "./styles";

import { Input } from '../Input';

export function Header(){

    return(
        <Container>

            <Brand to="/">
                <h1>Rocketmovies</h1>
            </Brand>
            
            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Rafael Penner</strong>
                    <button>sair</button>
                </div>
                <img 
                    src="https://github.com/Rafael465.png"
                    alt="Foto do usuário" 
                />
            </Profile>

        </Container>
    );
}
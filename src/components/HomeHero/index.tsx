import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import logo from "../../assets/NewLogo2.png"; 

function HomeHero() {
    return (
        <Container>
            <img src={logo} alt="Minha foto" />
            
            <div>
                <TextContainer>
                    <h1>Olá</h1>
                    <h2>Me chamo Neto</h2>
                </TextContainer>
                <InfosContainer>
                    <CodeItem>
                        <span className='coment'>//Minha apresentação</span>
                        <span className='purple'>Infos</span> {'\u007B'}
                        <div>
                            Nome: <span className='blue'>Neto,</span>
                        </div>
                        <div>
                            Sobrenome: <span className='blue'>Sousa</span>
                        </div>
                        {'\u007B'}
                    </CodeItem>

                    <CodeItem>
                        <span className='purple'>Cargo</span> {'\u007B'}
                        <div>
                            Função: <span className='blue'>Dev Front-end,</span>
                        </div>
                        <div>
                            cidade: <span className='blue'>Fortaleza-CE</span>
                        </div>
                        {'\u007B'}
                    </CodeItem>
                </InfosContainer>
            </div>
        </Container>
    );
}

export default HomeHero;
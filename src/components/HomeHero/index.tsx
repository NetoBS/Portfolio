import { Container, TextContainer } from './styles';
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
            </div>
        </Container>
    );
}

export default HomeHero;
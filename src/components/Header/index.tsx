import { link } from 'fs';
import NavLink from './NavLink';
import { Container } from './styles';


function Header() {
    return (
        <Container>
            <ul>
                <NavLink title="Home" path="/" />
                <NavLink title="Projects" path="/projectos" />
                <NavLink title="Contact" path="/contato" />
            </ul>
        </Container>
    );
}

export default Header;
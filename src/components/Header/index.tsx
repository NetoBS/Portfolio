
import NavLink from './NavLink';
import { Container } from './styles';


function Header() {
    return (
        <Container>
            <ul>
                <NavLink title="Home" path="/" />
                <NavLink title="Projects" path="/projetos" />
            </ul>
        </Container>
    );
};

export default Header;
import {
    AiOutlineTwitter,
    AiOutlineGithub,
    AiFillLinkedin
  } from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
    function handleRedirect(url: string) {
        window.open(url);
    }

    function handleScrollTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Container>
            <div className='container'>
                <button type="button" onClick={handleScrollTop}>
                    Voltar ao topo
                </button>

                <section>
                    <AiOutlineTwitter 
                        onClick={() => handleRedirect("https://twitter.com/home")}
                    />
                    <AiOutlineGithub 
                        onClick={() => handleRedirect("https://github.com/NetoBS")}
                    />
                    < AiFillLinkedin
                        onClick={() => handleRedirect("https://www.linkedin.com/in/neto-sousa-086948247/")}
                    />
                </section>
            </div>
        </Container>
    )
}

export default Footer;
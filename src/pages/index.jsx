import { FaArrowRight } from 'react-icons/fa'
import { 
  Container, 
  Content, 
  Infos, 
  NameAndRole, 
  Intro, 
  LinkProjects, 
  Logo, 
  Img 
} from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Logo>
            <img src="/image/NewLogo2.png" alt="logo" />
          </Logo>
          <NameAndRole 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
          >
            <h1>Neto Sousa</h1>
            <p>FullStack Developer</p>
          </NameAndRole>
          <Intro
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 2, duration: 1 }}
          >
            Oi! Meu nome é neto e sou um estudante de Análise e Desenvolvimento de Sistemas.
            No momento me encontro fazendo além da faculdade um curso de programação fullstack.😃
            Gosto muito de front-end mais minha meta é me tornar fullstack! Nesse portfólio
            estarei passando um pouco do meu conhecimento em desenvolvimento de aplicações
            web e mobile :)
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        
      </Content>
    </Container>
  )
}

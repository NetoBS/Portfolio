import { FaArrowRight } from 'react-icons/fa'
import { 
  Container, 
  Content, 
  Infos, 
  Name, 
  Function, 
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
          <Name>Olá, sou Neto Sousa</Name>
          <Function>FullStack Developer</Function>
          <Intro>
            Graduação em Sistema de Informação,
            tenho experiência em desenvolvimento Web
            (React, JS e outros), mobile e criação de
            conteúdo para o YouTube
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <img src="/image/logo.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}

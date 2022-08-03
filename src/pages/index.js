
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
        </Infos>
      </Content>
    </Container>
  )
}

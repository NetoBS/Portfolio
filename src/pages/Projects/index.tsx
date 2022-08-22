import Header from "../../components/Header";
import ProjectItem from "../../components/PageProjectItem";
import { ProjectsContainer } from "../../styles/ProjectsStyles";

export default function Projects() {
    return (
        <ProjectsContainer>
            <Header />
            
            <main className="container">
                <ProjectItem 
                    title="Projeto 01"
                    type="Website"
                    slug="teste"
                    imgUrl="https://media.moneytimes.com.br/uploads/2022/03/img-2-nuivestreclamacao.jpg"
                />
                <ProjectItem 
                    title="Projeto 02"
                    type="Website"
                    slug="teste"
                    imgUrl="https://extra.globo.com/incoming/25545783-8a4-705/w488h275-PROP/nubank.jpg"
                />
                <ProjectItem 
                    title="Projeto 03"
                    type="Website"
                    slug="teste"
                    imgUrl="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp"
                />
                <ProjectItem 
                    title="Projeto 04"
                    type="Website"
                    slug="teste"
                    imgUrl="https://www.falandodeviagem.com.br/imagens19/CartaoNext.jpg"
                />
            </main>
        </ProjectsContainer>
    );
}
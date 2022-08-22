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
                    imgUrl="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp"
                />
                <ProjectItem 
                    title="Projeto 01"
                    type="Website"
                    slug="teste"
                    imgUrl="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp"
                />
                <ProjectItem 
                    title="Projeto 01"
                    type="Website"
                    slug="teste"
                    imgUrl="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp"
                />
                <ProjectItem 
                    title="Projeto 01"
                    type="Website"
                    slug="teste"
                    imgUrl="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp"
                />
            </main>
        </ProjectsContainer>
    );
}
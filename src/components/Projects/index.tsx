import Link from 'next/link';

import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectsItem";

import { Container } from './styles';

function Projects() {
    return (
        <Container>
            <SectionTitle title="Ultimos Projetos" />

            <section>
                <ProjectItem 
                    img="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp"
                    title="Projeto 01"
                    type="Website"
                    slug="teste"
                />
                <ProjectItem 
                    img="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp"
                    title="Projeto 01"
                    type="Website"
                    slug="teste"
                />
                <ProjectItem 
                    img="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp"
                    title="Projeto 01"
                    type="Website"
                    slug="teste"
                />
            </section>

            <button type="button">
                <Link href="/Projects">
                    <a>Ver todos os projetos</a>
                </Link>
            </button>
        </Container>
    );
}

export default Projects
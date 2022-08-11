import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectsItem";
import { Container } from './styles';

function Projects() {
    return (
        <Container>
            <SectionTitle title="Ultimos Projetos" />

            <section>
                <ProjectItem />
            </section>
        </Container>
    );
}

export default Projects
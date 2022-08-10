import { Container } from './styles';

import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';

function Experience() {
    return (
        <Container>
            <SectionTitle title="Minhas" description="Experiências" />

            <section>
                <ExperienceItem
                    title="Web Design"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. maxime!"
                />
                <ExperienceItem
                    title="Web Developer"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. maxime!"
                />
                <ExperienceItem
                    title="Developer Mobile"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. maxime!"
                />
            </section>
        </Container>
    )
}

export default Experience;
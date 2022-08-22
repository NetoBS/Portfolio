import Link from 'next/link';
import { Container } from './styles';

interface ProjectItemProps {
    title: string;
    type: string;
    imgUrl: string;
    slug: string;
}

function ProjectItem ({ title, type, imgUrl, slug }: ProjectItemProps) {
    return (
        <Container>
            <Link href={`/Project/${slug}`}>
                <a>
                    <div className='overlay' />
                    <section>
                        <h1>{title}</h1>
                        <h1>{type}</h1>
                    </section>
                </a>
            </Link>
        </Container>
    )
}

export default ProjectItem;
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai'
import { ProjectContainer } from './styles';

export default function ProjectItem() {
    return (
        <ProjectContainer>
            <section>
                <div className='overlay' />
                <div className='text'>
                    <h1>Projeto 01</h1>
                    <h2>- Website</h2>
                </div>
            </section>

            <button type="button">
                <Link href="/projetos">
                    <a>
                        Ver mais <AiOutlineRightCircle />
                    </a>
                </Link>
            </button>
        </ProjectContainer>
    )
}
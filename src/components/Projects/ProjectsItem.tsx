import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai'
import { ProjectContainer } from './styles';

export default function ProjectItem() {
    return (
        <ProjectContainer imgUrl="https://nubank.com.br/images-cms/1649856968-people-working-together-lg.jpg?w=1152&dpr=1&auto=compress&fm=webp">
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
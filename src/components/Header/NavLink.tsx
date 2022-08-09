import Link from 'next/link';
import  { NavLinkContainer } from './styles'

interface Props {
    title: string;
    path: string;
}

export default function NavLink({ title, path }: Props) {
    const isActive = true;


    return (
        <NavLinkContainer isActive={isActive}>
            <Link href={path}>
                <a>{title}</a>
            </Link>
        </NavLinkContainer>
            
        
    )
}
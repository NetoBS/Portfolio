import { ItemContainer } from './styles';

interface ExperienceProps {
    title: string;
    description: string;
}

export default function ExperienceItem({ title, description }: ExperienceProps) {
    return (
        <ItemContainer>
            <div>
               <h1>{title}</h1>
               <p>{description}</p>
            </div>
        </ItemContainer>
    );
}
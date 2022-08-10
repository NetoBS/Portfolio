import styled from "styled-components"

export const Container = styled.section`
    width: 100%;

    > section {
        width: 100%;
        margin-top: 5rem;
        display: flex;
        gap: 1.5rem;

        padding-bottom: 8rem;
        border-bottom: 3px solid ${({ theme }) => theme.primary};

        @media(max-width: 1000px) {
            gap: 1rem;
        }

        @media(max-width: 700px) {
            flex-direction: column;
            margin-top: 5rem;
            gap: 2rem;
        }
    }
`;

export const ItemContainer = styled.div`
    > div {
        background: ${({ theme }) => theme.gradient};
        padding: 1rem;
        padding-top: 2.5rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        transition: 0.5s;

        h1 {
            color: ${({ theme }) => theme.secondary};
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 1rem;
            margin-top: 2rem;
        }

        p {
            color: ${({ theme }) => theme.textLight};
            font-size: 1rem;
            font-weight: 300;
        }
    }

    &:hover > div {
        filter: brightness(1.3);
        transform: translateY(-20px);
    }

    &:nth-child(even) > div {
        margin-top: 2rem;
    }

    @media(max-width: 1000px) {
        > div {
            height: 18rem;
            padding-top: 1.5rem;

            h1 {
            font-size: 1rem;
            margin-bottom: 1rem;
            }

            p {
                font-size: 0.9rem;
            }
        }
    }

    @media(max-width: 700px) {
        &:nth-child(even) > div {
            margin-top: 0;
        }
        
        > div {
            height: auto;
            padding: 2rem;

            &:hover > div {
            transform: translateY(0);
            }

            h1 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }
`;
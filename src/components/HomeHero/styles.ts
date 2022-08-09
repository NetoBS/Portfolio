import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 8rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  
  > img {
    width: 40rem;
    flex: 1;
  }
  
  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }
  @media (max-width: 1450px) {
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;
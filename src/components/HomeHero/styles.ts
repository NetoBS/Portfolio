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
    margin-left: 10rem;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }
    > div {
      flex: 1;
    }
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

export const InfosContainer = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s;

  &:hover {
    filter: brightness(1.2);
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3
  }

  span.coment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
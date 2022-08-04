import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 80%;
  display: grid;
  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const NameAndRole = styled(motion.div)`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
  @media (max-width: 760px) {
    font-size: 25px;
  }

  p {
    font-size: 30px;
    color: lightgray;
    margin-bottom: 10px;
  }
`;

export const Intro = styled(motion.div)`
  color: lightgray;
  text-align: justify;
  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;
  svg {
    font-size: 20px;
  }
`;

export const Logo = styled(motion.div)`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 25rem;
    height: 25rem;
  }
  @media (max-width: 760px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Img = styled.img``
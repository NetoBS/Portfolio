import { HomeContainer } from "../styles/HomeStyles";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";


import GlobalStyles from '../styles/global';

function Home() {
  return (
    <HomeContainer>
       <Header />
      <HomeHero />
      
      <GlobalStyles />
  
    </HomeContainer>
  );
}
export default Home;
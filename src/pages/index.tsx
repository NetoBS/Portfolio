import { HomeContainer } from "../styles/HomeStyles";

import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import AboutMe from "../components/AboutMe";


function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <AboutMe />
      </main>
  
    </HomeContainer>
  );
}
export default Home;
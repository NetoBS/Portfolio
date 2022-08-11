import { HomeContainer } from "../styles/HomeStyles";

import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Experience from "../components/Experiences";
import Projects from "../components/Projects";


function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
        <Projects />
      </main>
  
    </HomeContainer>
  );
}
export default Home;
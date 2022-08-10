import { HomeContainer } from "../styles/HomeStyles";

import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Experience from "../components/Experiences";


function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
      </main>
  
    </HomeContainer>
  );
}
export default Home;
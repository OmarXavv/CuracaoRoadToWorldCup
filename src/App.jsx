import Hero from "./Sections/Hero.jsx"
import WhereIsCuracao from "./Sections/WhereIsCuracao.jsx"
import TeamHistory from "./Sections/TeamHistory.jsx"
import RoadToTheWorldCup from "./Sections/RoadToTheWorldCup.jsx"
import TheSquad from "./Sections/TheSquad.jsx"
import Navbar from "./Components/Navbar.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhereIsCuracao />
      <TeamHistory />
      <RoadToTheWorldCup />
      <TheSquad />
    </>
  )
}

export default App
import Header from "./components/Header/Header";
import './assets/styles/css/style.css'
import MainSection from "./components/MainSection/MainSection";
import ResultsSection from "./components/ResultsSection/ResultsSection";
import StagesSection from "./components/StagesSection/StagesSection";


function App() {
  return (
      <div className="App">
        <Header/>
        <MainSection/>
        <ResultsSection/>
        <StagesSection/>
      </div>
  );
}

export default App;
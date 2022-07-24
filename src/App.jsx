import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import PAS from "./components/PAS";
import Projects from "./components/Projects";
import WhyMe from "./components/WhyMe";
import Work from "./components/Work";

function App() {
  return (
    // bg-[#f9f9fb]
    <div className="App w-full md-flex md:items-center md:justify-center bg-[#f9f9fb]">
      <div className=" md:w-[75vw] md:mx-auto">
        <Header className="Header" />
        <Banner className="Banner" />
        <Work className="Work" />
        <Projects className="Casestudy" />
        <WhyMe />
        <PAS />
      </div>
    </div>
  );
}

export default App;

import Profile from "./sections/profile";
import AboutMe from "./sections/aboutMe";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Quote from "./sections/quote";
// import Grid from "./sections/grid";

function App() {
  return (
    <div className="App">
      <Profile/>
      {/* <Grid/> */}
      <div className="display">
        
        <Quote/>
        <AboutMe />
        <Experience />
        <Education />
        <div id="skills" className="target"></div>
        <Skills />
      </div>
    </div>
  );
}

export default App;

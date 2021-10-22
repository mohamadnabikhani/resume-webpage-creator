import Profile from "./sections/profile";
import AboutMe from "./sections/aboutMe";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Quote from "./sections/quote";

function App() {
  return (
    <div className="App">
      <Profile/>
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

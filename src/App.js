import Profile from "./sections/profile";
import AboutMe from "./sections/aboutMe";
import Quote from "./sections/quote";
import Grid from "./sections/grid";

function App() {
  return (
    <div className="App">
      <Profile/>
      <Grid/>
      <div className="display">
        
        <Quote/>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

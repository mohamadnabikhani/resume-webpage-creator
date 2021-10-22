export default function Skills() {
  const mainTechSkills = [ "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
    "Nestjs", "React", "ReactNative", "BlockChain", "Solidity", "HyperLedger Fabric"];

  const overallCirSkills = ["Web Development", "Database Management", "OOP", "TDD"];

  const softSkills = [
    "TeamWork",
    "Problem Solving Skills",
  ];

  return (
    <section className="container">

      <div className="containerCont sectionCont  sectionContSkills">
        <header>
          <h2>Specialties / interests</h2>
        </header>
        <div className="rowFlexRes breakMainTechOverall">
          <div className="cardContainer">

            <div className="card skill-card">

              <div className="skill-section">
                <h3>Main Tech, FrameWork</h3>
                <p>{mainTechSkills.join(' - ')}</p>
              </div>

              <div className="skill-section">
                <h3>Overall</h3>
                <p>{overallCirSkills.join(' - ')} - {softSkills.join(' - ')}</p>
              </div>

              <div className="skill-section">
                <h3>Software</h3>
                <p></p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

import Calender from '../svg/calender';

export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
            <div className="timeline"> 
              <h5>
                <Calender/>
                  {" 2013 - 2018 "}
              </h5>
              </div>
              <h3>Bachelor of Software Engineering</h3>
              <h4>iran university of science and technology (IUST)</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Software Engineering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

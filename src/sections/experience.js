import Calender from '../svg/calender';
import { renderDiffDate } from '../utils'
export default function Experience() {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <div className="timeline"> 
                <h5>
                <Calender/>
                  {/* <span> */}
                  {" Aug 2018 - Present "} 
                  {renderDiffDate(Date.parse('01 Aug 2018 00:00:00 GMT'), Date.now())}
                  {/* </span> */}
                </h5>
              </div>
              <h3>Software developer</h3>
              <h4>Rastak Media Sepehr</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Developing Restful web services APIs and Web Sockets APIs with NodeJs</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Developing an Android/ios App with ReactNative</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Developing Smart Contract with Golang</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Coordinating ReactNative development processes and assigned tasks</span>
                </li>
              </ul>
            </div>
            <div className="cardCont">
            <div className="timeline"> 
              <h5>
              <Calender/>
                <span>
                {" May 2018 - Aug 2018 "}
                {renderDiffDate(Date.parse('01 May 2018 00:00:00 GMT'), Date.parse('01 Aug 2018 00:00:00 GMT'))}
                </span>
              </h5>
              </div>
              <h3>Web Developer</h3>
              <h4>AtiNegar Engineering Co.</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Developing Restful web services APIs for online presentation video generator service with NodeJs</span>
                </li>
                <li>
                  <span className="colorRed">- </span>{' '}
                  <span>Developing Frontend with React framework</span>
                </li>
              </ul>
            </div>

            <div className="cardCont">
            <div className="timeline"> 
              <h5>
              <Calender/>
                <span>
                {" July 2017 - Nov 2017 "}
                {renderDiffDate(Date.parse('01 Jul 2017 00:00:00 GMT'), Date.parse('01 Nov 2017 00:00:00 GMT'))}
                </span>
              </h5>
              </div>
              <h3>Intern Backend Developer</h3>
              <h4>SystemNegar Saina</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Developing Restful web services APIs with Django</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <div className="timeline"> 
                <h5>
                <Calender/>
                  {/* <span> */}
                  {" Sep 2019 - Dec 2020 "} 
                  {renderDiffDate(Date.parse('01 Sep 2019 00:00:00 GMT'), Date.parse('01 Dec 2020 00:00:00 GMT'))}
                  {/* </span> */}
                </h5>
              </div>
              <h3>Freelance Frontend Developer</h3>
              <h4>Fadak Trains</h4>
              <ul>
                <li>
                  <span className="colorRed">- </span>
                  <span>Participating in a freelance frontend team with a junior frontEnd developer to write responsive code and support multi-language (RTL and TLR languages) in AngularJs framework.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


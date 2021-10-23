import styles from '../styles/profile.module.css';
import Linkedin from '../svg/linkedin.js';
import Github from '../svg/github.js';
import Resume from '../svg/resume.js';

export default function Profile() {
  const name = 'Mohammad Nabikhani';
  const email = 'mohamadnabikhani@gmail.com';

  return (
    <div className={`${styles.profile}`}>
        <figure className={styles.profileUp}>
            <img alt="Mohammad Nabikhani" src="../profile.jpg" />
          </figure>
        <section className={styles.profileDown}>
          <h1>{name}</h1>
          <h2>
            Software Developer
            <span className={styles.brH2}>
              <br />
            </span>{' '}

          </h2>
          <h3>JS / TS / React</h3>
          <h3>
            <a href={`mailto:${email}`}>{email}</a>
          </h3>


          <div className={`${styles.buttons}`}>
            <div>
              <button className={`${styles.svgBut}`}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mohamadnabikhani"
                >
                  <Linkedin/>
                </a>
              </button>

              <button className={`${styles.svgBut}`}>
                <a target="_blank" href="https://github.com/mohamadnabikhani">
                <Github/>
                </a>
              </button>
              
              <button className={`${styles.svgBut}`}>
                <a target="_blank" href="/pdf/resume.pdf" className="tooltip">
                  <span className="tooltiptext">Download Resume</span>
                  <Resume/>
                </a>
              </button>
            </div>
          </div>
        </section>
    </div>
  );
}

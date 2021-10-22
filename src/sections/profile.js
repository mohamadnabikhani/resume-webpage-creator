import styles from '../styles/profile.module.css';
import Linkedin from '../svg/linkedin.js';
import Github from '../svg/github.js';

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
            Web Developer |
            <span className={styles.brH2}>
              <br />
            </span>{' '}
            Bachelor of Engineering
          </h2>
          <h3>HTML / CSS / JS / React</h3>
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
              
              <button className={`${styles.but}`}>
                <a target="_blank" href="/pdf/resume_francisco_pantoja.pdf">
                  DOWNLOAD RESUME
                </a>
              </button>
            </div>
          </div>
        </section>
    </div>
  );
}

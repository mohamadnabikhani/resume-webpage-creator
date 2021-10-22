export default function AboutMe() {
  const email = 'mohamadnabikhani@gmail.com';
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>about me</h2>
          <h3>
            Hi! My name is Mohammad Nabikhani,{' '}
            <span className="colorRed">Web Developer</span>
          </h3>
        </header>

        <p>
          I am a software developer, focused on web technologies. I
          have experience using some programming languages such as JavaScript
          and Python, in collaboration with HTML and CSS to build amazing and
          complex web sites; involving beautiful interfaces, client side logic
          (front-end), and server side logic (back-end). I have knowledge in
          Computer Science, Responsive Web Design, Object Oriented Programming,
          APIs and Microservices, Database Management, graphic design, video
          editing, among others. For the projects in which I was involved, I've
          used the version control system Git, together with Github and Gitlab.
        </p>
        <p>
          I am very passionate and dedicated to my work, i have plenty of
          problem solving, communication and leadership skills; and I'm very
          good at teamwork. You can get in touch with me by filling this{' '}
          <strong>
          </strong>
          , or you can send me an email to
          <br />
          <strong>
            <a href={`mailto:${email}`}>📧{email}</a>
          </strong>
          ; also you are more than welcome to follow my work on my{' '}
          <strong>
            <a target="_blank" href="https://github.com/mohamadnabikhani">
              github
            </a>
          </strong>{' '}
          and visit my{' '}
          <strong>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohamadnabikhani"
            >
              linkedin
            </a>
          </strong>{' '}
          profile.
        </p>
      </div>
    </section>
  );
}

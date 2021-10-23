export default function AboutMe() {
  const email = 'mohamadnabikhani@gmail.com';
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>about me</h2>
        </header>

        <p>
          I am a software developer, focused on web and BlockChain technologies. I
          have experience using some programming languages such as JavaScript, TypeScript, 
          Solidity, Golang, and Python, in collaboration with HTML and CSS to build 
          innovative and complex web sites and web3 application. I have knowledge in
          Computer Science, Responsive Web Design, Object Oriented Programming, Test Driven Development,
          APIs and Microservices, Database Management among others. 
          My main goal in participating in projects is to achieve <b><i>reliability, scalability, and maintainability</i></b> 
          using test-driven development and system design principles. 
        </p>
        <p>
          I am very passionate and dedicated to my work; and I'm very good at teamwork.
          You can send me an email to <strong> <a href={`mailto:${email}`}>{ email};</a> </strong>
          also you are more than welcome to visit my{' '}
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

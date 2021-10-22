export default function Quote() {
    const quote = `“From this distant vantage point, the Earth might not seem of particular interest. But for us, it's different. Consider again that dot. That's here, that's home, that's us... .”`;
    const author = `Carl Sagan`;

    return (
      <section className="container quote">
          <div className="quote-container">
              <p>{quote}</p>
                <span>{author}</span>
          </div>
      </section>
    );
  }
  
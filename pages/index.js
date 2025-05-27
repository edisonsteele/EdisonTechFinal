import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Edison Tech</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Spark your genius. Edison Tech delivers clear insights, practical tools, and expert services to help you build, launch, and maintain what's next.</h2>
          <p>Brief value proposition goes here.</p>
          <button>Get a Custom Quote</button>
          <button>Book a Support Hour</button>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <div className="service-columns">
            <div>
              <h3>Web Development Services</h3>
              <p>Brief description of web development services.</p>
              <a href="/services">Learn More</a>
            </div>
            <div>
              <h3>Tech Support Services</h3>
              <p>Brief description of tech support services.</p>
              <a href="/services">Learn More</a>
            </div>
          </div>
        </section>
        <section className="case-studies">
          <h2>Success Stories</h2>
          <div className="case-study-grid">
            {/* Placeholder for case studies */}
            <div>
              <h3>Project/Client Name</h3>
              <p>Brief description of the case study.</p>
              <a href="/portfolio">View Case Study</a>
            </div>
          </div>
        </section>
        <section className="about">
          <h2>Why Edison Tech?</h2>
          <p>Brief paragraph highlighting our unique approach (innovative, empowering, accessible).</p>
          <a href="/about">About Us</a>
        </section>
      </main>
      <footer>
        <p>Contact information (email, phone)</p>
        <p>Social media links</p>
        <p>Newsletter signup form</p>
        <p>Copyright notice</p>
      </footer>
    </div>
  );
};

export default Home; 
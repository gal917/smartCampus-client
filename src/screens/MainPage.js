import React from 'react'
import "../Style.css"
const mainPage = () => {
  return (<>
    <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li> 
        <li><a href="#">Features</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
    {/* <img src="logo.png" alt="Smart Campus Project"/> */}
    <h1>Welcome to the Smart Campus Project</h1>
    <button>Learn More</button>
  </header>
  
  <section id="hero">
    <h2>Transforming Higher Education</h2>
    <p>Our Smart Campus Project utilizes cutting-edge technology to create a more connected, efficient, and sustainable campus environment. With features such as smart buildings, real-time energy management, and personalized student experiences, our project is revolutionizing the way we think about higher education.</p>
    {/* <img src="hero-image.jpg" alt="Smart Campus Project"/> */}
  </section>
  
  <section id="about">
    <h2>About the Project</h2>
    <p>The Smart Campus Project is a collaborative initiative between our university and several industry partners. Our goal is to create a more sustainable and efficient campus environment that benefits everyone who studies, works, and lives on campus.</p>
    <p>Our team is made up of experienced professionals from a variety of fields, including technology, education, and sustainability. Together, we are committed to creating a better future for our campus community.</p>
  </section>
  
  <section id="features">
    <h2>Key Features</h2>
    <ul>
      <li>Smart buildings with energy-efficient systems</li>
      <li>Real-time energy management and monitoring</li>
      <li>Personalized student experiences through smart devices and applications</li>
      <li>Seamless campus navigation and wayfinding</li>
      <li>Integration with existing campus systems and infrastructure</li>
    </ul>
  </section>
  
  <section id="testimonials">
    <h2>What People are Saying</h2>
    <blockquote>
      "The Smart Campus Project has completely transformed the way I interact with my campus environment. I can easily navigate the campus using my smart device, and the personalized student experiences have made my college experience so much more engaging and enjoyable." - Jane Doe, Student
    </blockquote>
  </section>
  
  <section id="call-to-action"> 
    <h2>Join the Revolution</h2>
    <p>Interested in learning more about the Smart Campus Project? Sign up for our newsletter to stay up-to-date on our progress and receive exclusive updates and offers.</p>
    <form>
      <label for="email">Enter your email address:</label>
      <input type="email" id="email" name="email"/>
      <button type="submit">Sign Up</button>
    </form>
  </section>
  
  <footer>
    <p>&copy; 2023 Smart Campus Project</p>
  </footer>
  </>)
}

export default mainPage



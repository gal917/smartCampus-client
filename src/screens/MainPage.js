import React from 'react'
import MainHeader from '../components/MainHeader'
import "../Style.css"
import styled from 'styled-components'
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'

const mainPage = () => {
  return (
  <MainContainer>
      <MainHeader/>
      <MainBody/>
      <Footer/>
   
 
{/*     
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
    </section> */}
    
    <footer>
      <p>&copy; 2023 Smart Campus Project</p>
    </footer>
  </MainContainer>)
}

export default mainPage

const MainContainer = styled.div`
width:100%;
`


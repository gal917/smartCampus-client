import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      setSuccessMessage('Thank you for submitting the form!');
      setName('');
      setEmail('');
  };

  return (
    <ContactUsWrapper>
      <ContactDetailsWrapper>
        <h2>Contact Us</h2>
        <p>If you're interested in joining the Smart Campus project or have any questions, please don't hesitate to contact us using the form below or through the following channels:</p>
        <ul>
          <li>Email: <a href="mailto:info@smartcampushit.com">info@smartcampushit.com</a></li>
          <li>Phone: +1 (555) 123-4567</li>
        </ul>
      </ContactDetailsWrapper>
      <ContactFormWrapper>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" />
          <button type="submit">Submit</button>
        </form>
      </ContactFormWrapper>
      {successMessage && <successMessage>{successMessage}</successMessage>}
    </ContactUsWrapper>
  )
}

const ContactUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactDetailsWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 18px;
    li {
      margin-bottom: 10px;
    }
    a {
      color: #333;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ContactFormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 18px
      ;
      margin-bottom: 10px;
    }
    input,
    textarea {
      font-size: 18px;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }
    }
    button[type="submit"] {
      font-size: 18px;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      background-color: #333;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #555;
      }
    }
}
@media screen and (max-width: 768px) {
form {
max-width: 80%;
margin: 0 auto;
}
}
`;

export default ContactUs;

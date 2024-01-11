import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    // Simple client-side validations
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setResult('');
      return;
    }
    console.log(import.meta.env.TEMPLATE_ID);
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name:fullName,
        to_name:"Kashyap Mamidipalli",
        from_email:email,
        to_email:'kashyapmrc@gmail.com',
        message:message
      },
      import.meta.env.VITE_PUBLIC_KEY
    ).then(()=>{
      window.alert('Email Sent Successfully');
        setResult('')
    }).catch((error)=>{
      console.log(error);
      setResult(
        'An error occurred while trying to send email for inquiry. Please try again.'
      );
    })   
  };
    return (
      <div className="contact-page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="custom-card sm:text-xl sm:leading-snug text-center neo-brutalism-white py-4 px-8 text-black mx-5 info-Box"  style={{ width: '36rem' }}>
            <h1  className="custom-title">Contact Me</h1>
            <p>If you have any questions or want to get in touch:</p>
            <br/>
            <Form className="contact" id="contactUs" onSubmit={handleOnSubmit}>
        {result && (
          <p className={result.includes('successfully') ? 'success' : 'error'}>
            {result}
          </p>
        )}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button className="custom-button" type="submit">
          Let's Talk
        </Button>
      </Form>
      <br/>
            <ul><li><a href="mailto:kashyapmrc@gmail.com" title="Email"><FontAwesomeIcon icon={faEnvelope} size="2x" />  </a>
             <a href="tel:+18576547546" title="Phone"><FontAwesomeIcon icon={faPhone} size="2x"/>  </a>
             <a href="https://github.com/kashyap0729" target="_blank" rel="noopener noreferrer" title="Github"><FontAwesomeIcon icon={faGithub} size="2x"/>  </a> 
             <a href="https://www.linkedin.com/in/kashyapmrc" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} size="2x"/>  </a>
             <a href="https://drive.google.com/file/d/10fAerybj36_SI0X33aXt7nv1TlVTOiU5/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Download Resume"><FontAwesomeIcon icon={faFileDownload} size="2x"/>  </a>
             </li></ul>
        </div>
        </div>
    );
}

export default ContactPage;

import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';


const Contact = () => {

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();
    // Implement your email sending logic using emailjs or any other service
    // Example using emailjs:
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
    // e.target.reset();
  };

  return (
    <section id='contact'>

    <h2></h2>

    <div className="container contact__container">
      <div className='contact__options'>


        {/* Kaggle Profile Preview */}
        <article className='contact__option'>
          <h4>Kaggle Profile</h4>
          <p>View my Kaggle achievements and competitions.</p>
          <a href="https://www.kaggle.com/clementka" target='_blank' rel="noopener noreferrer">View Profile</a>
        </article>

        {/* LeetCode Profile Preview */}
        <article className='contact__option'>
          <h4>LeetCode Profile</h4>
          <p>Check out my LeetCode submissions and rankings.</p>
          <a href="https://leetcode.com/u/kclem0712/" target='_blank' rel="noopener noreferrer">View Profile</a>
        </article>
      </div>
    </div>
      <article>
        
        {/* Carousel of favourite books here*/}



      </article>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className='contact__options__2'>

         {/* LinkedIn Section */}
         <article className='contact__option'>
          <BsLinkedin className='contact__option-icons' />
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/clementka/" target='_blank' rel="noopener noreferrer">Let's get in touch !</a>
        </article>
      </div>
    </div>

  </section>
  );
};

export default Contact;

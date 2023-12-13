
import React, { useState } from 'react';
import logo from '../Assets/1.webp';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleClick() {
    try {
      // Send form data to the JSON Server
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show an alert to the user
        alert("Message sent!");

        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        // Handle error
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  return (
    <div className="contact-container">
      <div>
        <h1>Welcome to liquer world</h1>
        <p className="pombe">
          Your Ultimate Destination for All Things Alcohol! Step into a world
          where passion for spirits, wines, and brews converges with knowledge,
          appreciation, and a touch of elegance. We are thrilled to have you
          here, where the art of enjoying fine beverages meets the science
          behind the perfect pour. feel free to browse, discover, and engage
          with our content. Whether you're seeking recommendations for your next
          bottle, tips on perfecting your mixology skills, or simply looking to
          expand your knowledge, we've got you covered.
        </p>
        <img  className="logo1"src={logo} alt="Logo" />
      </div>
        <div className='Footer'>
          <h1>
          Time to spill the tea! Leave us a message
          </h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} />

        <button type="submit" onClick={handleClick}>Contact US</button>
      </form>
      </div>
    </div>
  );
}

export default Contacts;

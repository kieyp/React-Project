import React from 'react';
import logo from '../Assets/1.webp';


function Contacts() {

  function handleClick(){
    alert("Message sent!")
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
        <img src={logo} alt="Logo" />
      </div>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />
                    <button onClick={handleClick}>Contact US</button>
      </form>
    </div>
  );
}

export default Contacts;

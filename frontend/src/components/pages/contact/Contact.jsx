import React from 'react'
import '../contact/contact.css'
const Contact = () => {
  return (
<div className="container-contact">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Are you looking for any kind of help and assistance? Send us a message or give us a call. We are here to provide you with more information and deal with your queries.</p>
          <p>Talk to our customer representative to inquire about the process of selling / buying properties on Realestateinnov.com .</p>
          <div className="contact-detail">
            <span className="font-bold">Call us:</span> <a href="tel:9703808523" className="link">9703808523</a> 
            {/* <span className="font-bold"> Whatsapp:</span> <a href="https://wa.me/9703808523" className="link">9703808523</a> */}
          </div>
          <div className="contact-detail">
            <span className="font-bold">Email us:</span> <a href="realestateinnovations2212@gmail.com" className="link">realestateinnovations2212@gmail.com</a>
          </div>
          <div className="address">
            <span className="font-bold">Address:</span>
            <p>Khumaltar, Lalitpur, Nepal</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" placeholder="Full Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="number">Number</label>
              <input id="number" type="text" placeholder="Number"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <div className="form-actions">
              <button type="button">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  )
}

export default Contact
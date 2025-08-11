import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaSuitcase, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="container py-5" id="contact">
      <h2 className="section-heading">Contact Me</h2>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <input className="form-control" rows="4" placeholder="Your Message"/>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://github.com/pandhivamsi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/pandhi-vamsi-a7a21a220/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://x.com/PandhiVams42085" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="mailto:pvamsi3010@gmail.com"><FaEnvelope /></a>
        <a href="tel:+918688033887"><FaPhone /></a>
      </div>
    </div>
  );
}

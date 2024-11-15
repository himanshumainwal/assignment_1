import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../css/footer.css'

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-section about">
                <div className='footer_logo'>
                    <img src="./logo.jpeg" width={50} alt="logo" />
                    <h2>Brainy Sensei</h2>
                </div>
                <p>Better insights drive smarter decisions, stronger relationships, and new growth opportunities for long-term success.</p>
                <div className="social-icons">
                    <FaLinkedin className="social-icon" />
                    <FaInstagram className="social-icon" />
                    <FaTwitter className="social-icon" />
                </div>
            </div>

            <div className="footer-section services">
                <h3>Services</h3>
                <ul>
                    <li>Software Development</li>
                    <li>Generative AI</li>
                    <li>LLM and Chatbot Development</li>
                    <li>AI Customization</li>
                    <li>Tech Team for Your Company</li>
                    <li>Edutech Solution</li>
                </ul>
            </div>

            <div className="footer-section links">
                <h3>Quick Link</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="footer-section contact">
                <h3>Get in Touch</h3>
                <p>Better Insights For Business Growth</p>
                <form>
                    <input type="email" placeholder="Email" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};


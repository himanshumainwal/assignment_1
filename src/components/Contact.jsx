import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../css/contact.css'

export default function Contact() {
    return (
        <>
            <div className='big_container'>
                <div className='container_contact'>
                    <h3>Get in Touch</h3>
                    <h2>Hey! Let's Talk</h2>
                </div>
                <div className='contacts_detail'>
                    <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Phone' />
                        <textarea name="" placeholder='Your Massage' id="" rows="7"></textarea>
                        <button>Send Now</button>
                    </form>

                    
                    <div className="contact-card">
                        <div className="contact-item">
                            <div className="icon-container"><FaPhoneAlt className="icon" /></div>
                            <div>
                                <h3>Call Anytime</h3>
                                <p>+91 8130587803</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-container"><FaEnvelope className="icon" /></div>
                            <div>
                                <h3>Send Email</h3>
                                <p>support@brainysensei.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-container"><FaMapMarkerAlt className="icon" /></div>
                            <div>
                                <h3>Visit Us</h3>
                                <p>59-60, Block E, Noida Sector 3<br />Noida, Uttar Pradesh 201301</p>
                            </div>
                        </div>

                        <div className="follow-us">
                            <h3>Follow us</h3>
                            <div className="social-icons">
                                <FaLinkedin className="social-icon" />
                                <FaInstagram className="social-icon" />
                                <FaTwitter className="social-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

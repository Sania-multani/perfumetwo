import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
     
        <footer className="footer-section  mt-5">
          
                  
            <div className="footer-content">
              {/* Left Side */}
                  <div className='row'>
                      <div className='col-lg-6'>
              <div className="footer-left">
                <div className="footer-logo">
                  <img src="assets/images/logo.png" alt="odora logo" className="logo-icon" />
                  {/* <h2 className="brand-name">odora</h2> */}
                </div>
                <p className="footer-description">
                  Odora Shopify is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.
                </p>
                <div className="social-icons">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </div>
              </div>
      
              {/* Right Side */}
              <div className='col-lg-6'>
              <div className="footer-right">
                <h4>Our Store:</h4>
                <p>123 Fragrance Avenue, Sydney, NSW 2000</p>
      
                <h4>Tel:</h4>
                <p>+(61) 2 1234 5678</p>
      
                <h4>Email:</h4>
                <p>example@example.com</p>
              </div>
              </div>
            </div>
            </div>
          </footer>
      

    </>
  )
}

export default Footer
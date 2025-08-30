import React from 'react'

const Contact = () => {
  return (
    <>
    <div  className='mt-5 cstm-con-div'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d85326.576651073!2d77.092979!3d28.6723666!3m2!1i1024!2i768!4f13.1!2m1!1sKD-3%2C%20Third%20Floor%2C%20near%20Kohat%20Enclave%20metro%20station%2C%20Delhi%20-%20110034!5e1!3m2!1sen!2sin!4v1756366282358!5m2!1sen!2sin"  height="450"  style={{ width:"100vw"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className='cstm-cont-sec'>
          <p>OUR STORE</p>
          <p>Copely</p>
          <p>Mon-Fri, 10am-9am</p>
          <p>Saturday, 11am-9am</p>
            <p>Sunday, 11am-9am</p>
             <button type="button">GET DIRECTIONS</button>
        </div>
    </div>



      <section className="contact-section">
      <div className="contact-header">
        <p className="sub-title">QUESTIONS?</p>
        <h2>Send us an email</h2>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email *" required />
        </div>
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Message" rows="5"></textarea>

        <button type="submit" className="submit-btn">
          SEND <span>&#8250;</span>
        </button>
      </form>
    </section>
    </>
  )
}

export default Contact
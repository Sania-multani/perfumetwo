import React from 'react'

const features = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "From all orders over $100",
  },
  {
    icon: "🎩",
    title: "Quality Support",
    description: "24/7 online feedback",
  },
  {
    icon: "📦",
    title: "Return & Refund",
    description: "Return money within 30 days",
  },
  {
    icon: "🎟️",
    title: "Gift Voucher",
    description: "20% off when you shop online",
  },
];



const About = () => {
  return (
   <>
       <section className="fragran-sec py-5 mt-5">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-6 text-center text-lg-start ">
            <p className="text-uppercase text-pink small mb-2  cstm-sec-b ms-5">Our Fragrance Journey</p>
            <h2 className="fw-bold mb-3 ms-5">Crafting Scents With<br />Passion And Precision</h2>
            <p className="text-muted ms-5 ">
              At Odora, we believe that every fragrance tells a story. Our journey begins with a passion
              for creating unique and memorable scents that capture the essence of life's special moments.
              Quality is at the heart of everything we do at Odora. We are dedicated to offering a curated
              selection of the world's finest perfumes sourced from renowned creators.
            </p>
            <button  type="button" className="btn cstm-btn-about mt-3 ms-5">Discover Now</button>
          </div>

          {/* Right Images */}
          <div className="col-lg-6 position-relative text-center  cstm-a">
            <div className="image-layer position-relative d-inline-block">
                 <img src="assets/images/per27.jpg" alt="Model" className=" perfume-back" />
              <img src="assets/images/per25.jpg" alt="Perfume Pink" className=" perfume-front" />
             
            </div>
          </div>
        </div>
      </div>
    </section>

  


     

    <section className="comfort-section mt-5">
      {/* Left Images */}
      <div className="comfort-images">
        {/* Background image */}
        <img
          src="assets/images/per29.jpg"
          alt="Background"
          className="bg-image"
        />

        {/* Foreground image */}
        <img
          src="assets/images/per28.jpg"
          alt="Foreground"
          className="fg-image"
        />

        {/* Play button overlay */}
        <div className="play-button">
          <span>▶</span>
        </div>
      </div>

      {/* Right Content */}
      <div className="comfort-content">
        <p className="comfort-subtitle ms-5">LUXE COMFORT, EVERYDAY GLAM</p>
        <h2 className="comfort-title ms-5">
          Style that Speaks Comfort <br /> and Glamour
        </h2>
        <p className="comfort-text ms-5 ">
          Experience the luxury of comfort without compromising on glamour. Our
          fashion pieces seamlessly blend style and ease, ensuring you feel
          confident every day. Enjoy special discounts on chic and comfy looks.
        </p>
        <button className="comfort-btn">Discover Now</button>
      </div>
    </section>




     <section className="features-section mt-5">
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">
              <span className="feature-icon">{feature.icon}</span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
   </>
  )
}

export default About
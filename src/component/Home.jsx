import React from 'react'
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaRegComments } from 'react-icons/fa';




const categories = [
    {
        title: 'DIAMOND',
        icon: '💎',
        image: '/assets/images/cat1.jpg',
        description: '',
    },
    {
        title: 'RINGS',
        icon: '💍',
        image: '/assets/images/cat2.jpg',
        description: 'We bring you the best values, come to us and experience',
    },
    {
        title: 'NECKLACE',
        icon: '🔷',
        image: '/assets/images/cat3.jpg',
        description: '',
    },
    {
        title: 'BANGLES',
        icon: '🧴',
        image: '/assets/images/cat4.jpg',
        description: '',
    },
];


const products = [
  {
    id: 1,
    name: "Sweet Scents",
    image: "assets/images/per21.jpg",
    discount: null,
    price:"Rs.25",
    // countdown: { days: 43, hours: 21, mins: 34, secs: 19 },
  },
  {
    id: 2,
    name: "Luxurious Scents",
    image: "assets/images/per22.jpg",
    discount: 21,
       price:"Rs.25",
  },
  {
    id: 3,
    name: "Floral Essence",
    image:"assets/images/per21.jpg",
    discount: null,
       price:"Rs.25",
  },
  {
    id: 4,
    name: "Woodsy Wonders",
    image: "assets/images/per21.jpg",
    discount: null,
       price:"Rs.25",
  },

    {
    id: 1,
    name: "Sweet Scents",
    image: "assets/images/per21.jpg",
    discount: null,
       price:"Rs.25",
  },

    {
    id: 1,
    name: "Sweet Scents",
    image: "assets/images/per21.jpg",
    discount: null,
       price:"Rs.25",
   
  },
];




const testimonials = [
  {
    name: "Sarah Johnson",
    title: "A Signature Scent Found",
    role: "Satisfied Customer",
    review: "I've been searching for the perfect signature scent for years, and I finally found it at Odora. The variety and quality of fragrances are exceptional!",
  },
  {
    name: "David Miller",
    title: "Impressive Selection",
    role: "Fragrance Enthusiast",
    review: "The curated selection at Odora is truly impressive. I found a fragrance that perfectly matches my style and personality!",
  },
  {
    name: "Emma Roberts",
    title: "Exceptional Quality",
    role: "Loyal Customer",
    review: "The quality of perfumes at Odora is unparalleled. Each scent is unique and long-lasting. I love how the fragrances evolve over time.",
  },
  {
    name: "Alex Moore",
    title: "Perfect Gift Choice",
    role: "Gift Buyer",
    review: "Bought a fragrance gift set from Odora and it was beautifully packaged. My friend loved it!",
  },
  {
    name: "Lily Evans",
    title: "Lovely Packaging",
    role: "Style Blogger",
    review: "Not just the fragrance but the presentation is top-notch. Makes for a great vanity piece.",
  },
];

const blogPosts = [
  {
    id: 1,
    date: "July 01, 2024",
    comments: 0,
    title: "The Art Of Layering Perfumes: Creating Your Unique Scent",
    image: "/assets/images/per23.jpg",
  },
  {
    id: 2,
    date: "July 01, 2024",
    comments: 0,
    title: "Top 10 Fragrances For Spring: Refresh Your Scent Wardrobe",
    image: "/assets/images/per24.jpg",
  },
];


const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };





    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);





    return (
        <>


{/* 
<div className="banner">
  <img src="assets/images/per2.png" alt="Smoothie" />
  <div className="banner-content">
    <h2>Fresh &amp; Organic<br /><span>Kiwi Smoothie</span></h2>
    <a href="#">Learn More →</a>
  </div>
</div> */}



            {/* <div className="topBar">
                <div className="leftText">
                    Welcome to our online store!
                </div>
                <div className="rightMenu">
                    <div className="languageSelector">English (USD) ▼</div>
                    <div className="divider" />
                    <div className="loginRegister">Login or Register</div>
                </div>
            </div> */}

            {/* <header className="header">
                <div className="logo">
                    <div>
                        <img src="assets/images/logo.png" className='cstm-img-logo'></img>
                    </div>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="search-input"
                    />
                    <select className="category-select">
                        <option>Accessories</option>
                        <option>Perfume</option>
                        <option>Gift Sets</option>
                    </select>
                    <button className="search-button">
                        <FiSearch />
                    </button>
                </div>
                <div className="icons">
                    <div className="cart">
                        <FiShoppingCart className='cstm-icon' />
                        <span className="cart-badge">0</span>
                    </div>
                    <FiUser className='cstm-icon user-icon' />
                </div>
            </header> */}

            {/* <div className='container-fluid'>
                <nav className="nav-container">
                    <div className="all-categories">
                        <FiMenu className="menu-icon" />
                        <span>All Categories</span>
                    </div>

                    <ul className="nav-links">
                        <li>Home <span className="dropdown-icon"></span></li>
                        <li>Shop <span className="dropdown-icon"></span></li>
                        <li>About <span className="dropdown-icon"></span></li>
                        <li>Blogs <span className="dropdown-icon"></span></li>
                        <li>About</li>
                    </ul>
                </nav>
            </div> */}

            <section className="promo-section">
                <div className="promo-left " data-aos="fade-right">
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div className="slide-content">
                            <p className="subtitle mt-4" data-aos="fade-down">STELINA BEST COLLECTION</p>
                            <h2 className="title" data-aos="fade-up">A Range Of Perfume</h2>
                            <p className="price-label" data-aos="zoom-in">
                                New Price: <span className="price">RS.250.00</span>
                            </p>
                            <button className="shop-btn" data-aos="fade-up" data-aos-delay="200">SHOP NOW</button>
                            <img src="assets/images/per8.png" alt="Green Perfume" className="promo-img" />
                        </div>

                        {/* Slide 2 */}
                        <div className="slide-content">
                            <p className="subtitle mt-4" data-aos="fade-down">LIMITED TIME OFFER</p>
                            <h2 className="title" data-aos="fade-up">Luxury Perfume Set</h2>
                            <p className="price-label" data-aos="zoom-in">
                                Now Only: <span className="price">RS.299.00</span>
                            </p>
                            <button className="shop-btn" data-aos="fade-up" data-aos-delay="200">SHOP NOW</button>
                            <img src="assets/images/per11.png" alt="Blue Perfume" className="promo-img" />
                        </div>
                    </Slider>
                </div>

                {/* Right Small Promos */}
                <div className="promo-right" data-aos="fade-left">
                    <div className="mini-promo" data-aos="zoom-in" data-aos-delay="200">
                        <div>
                            <h3>Pick Your Items</h3>
                            <p>Adipiscing elit curabitur senectus sem</p>
                            <button className="shop-btn small">SHOP NOW</button>
                        </div>
                        <img src="assets/images/per9.png" alt="Heel Perfume" data-aos="zoom-in-left" />
                    </div>
                    <div className="mini-promo" data-aos="zoom-in" data-aos-delay="400">
                        <div>
                            <h3>Best Of Products</h3>
                            <p>Cras pulvinar loresum dolor conse</p>
                            <button className="shop-btn small">SHOP NOW</button>
                        </div>
                        <img src="assets/images/per10.png" alt="Blue Perfume" data-aos="zoom-in-left" />
                    </div>
                </div>
            </section>

            {/* <section className="nomad-banner">
      <div className="nomad-content">
        <h1 className="nomad-title">NOMAD 13<br />EAU DE PARFUM</h1>
        <p className="nomad-subtitle">Discover the original fragrance</p>
        <button className="nomad-button">Shop Now</button>
      </div>
      <div className="nomad-image-container">
        <img
          src="assets/images/per12.jpg" 
          alt="Nomad 13 Perfume"
          className="nomad-image"
        />
      </div>
    </section> */}


            <section className="nomad-banner">
                <div className="nomad-content" data-aos="fade-in">
                    <h1 className="nomad-title">NOMAD 13<br />EAU DE PARFUM</h1>
                    <p className="nomad-subtitle">Discover the original fragrance</p>
                    <button className="nomad-button">Shop Now</button>
                </div>
                <div className="nomad-image-container" data-aos="fade-left">
                    <img
                        src="assets/images/per12.jpg"
                        alt="Nomad 13 Perfume"
                        className="nomad-image"
                    />
                </div>
            </section>


            <section className="parallax-section mb-5">
                <div className="parallax-content" data-aos="fade-in">
                    <h1 className="parallax-title" data-aos="fade-up" >WOMEN'S PERFUME</h1>
                    <p className="parallax-subtitle" data-aos="fade-up">Jewelry that suits you helps you feel more confident</p>
                    <button className="parallax-button">SHOP NOW</button>
                </div>
            </section>

            <div className="jewellery-heading text-center">
                <p className="sub-heading">GET READY TO SPARKLE</p>
                <h2 className="main-heading">Categories</h2>
            </div>





            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-lg-3'  data-aos="fade-left"   data-aos-delay="400">

                        <div className="hover-card">
                            <div className="box-img">
                                <img
                                    src="assets/images/per14.jpg"
                                    alt="Perfume"
                                    className="hover-card-image"
                                />
                            </div>

                            <div className="hover-card-overlay">
                                <div className="hover-card-content">
                                    {/* <div className="icon">🍶</div> */}
                                    <h3>DIAMOND</h3>
                                    <p>We bring you the best values, come to us and experience</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-lg-3'  data-aos="fade-left" data-aos-delay="500">
                        {/* <img src="assets/images/per15.jpg" className='img-fluid'></img> */}
                        <div className="hover-card">
                            <div className="box-img">
                                <img
                                    src="assets/images/per15.jpg"
                                    alt="Perfume"
                                    className="hover-card-image"
                                />
                            </div>

                            <div className="hover-card-overlay">
                                <div className="hover-card-content">
                                    {/* <div className="icon">🍶</div> */}
                                    <h3>DIAMOND</h3>
                                    <p>We bring you the best values, come to us and experience</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-lg-3' data-aos="fade-right" data-aos-delay="600">
                        {/* <img src="assets/images/per17.jpg" className='img-fluid'></img> */}
                        <div className="hover-card">
                            <div className="box-img">
                                <img
                                    src="assets/images/per17.jpg"
                                    alt="Perfume"
                                    className="hover-card-image"
                                />
                            </div>

                            <div className="hover-card-overlay">
                                <div className="hover-card-content">
                                    {/* <div className="icon">🍶</div> */}
                                    <h3>DIAMOND</h3>
                                    <p>We bring you the best values, come to us and experience</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-lg-3'  data-aos="fade-right" data-aos-delay="700">
                        {/* <img src="assets/images/per18.jpg" className='img-fluid'></img> */}
                        <div className="hover-card">
                            <div className="box-img">
                                <img
                                    src="assets/images/per18.jpg"
                                    alt="Perfume"
                                    className="hover-card-image"
                                />
                            </div>

                            <div className="hover-card-overlay">
                                <div className="hover-card-content">
                                    {/* <div className="icon">🍶</div> */}
                                    <h3>DIAMOND</h3>
                                    <p>We bring you the best values, come to us and experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



            <div className='container-fluid cstm-sec-margn'>
                <div   className='row '>
                <div className='col-lg-6 '   data-aos="fade-right" data-aos-delay="400">
                      <div className="perfume-banner women">
                    <div className="banner-content">
                        <h2>Women's Perfume</h2>
                        <p>SHINE CONFIDENTLY EVERYWHERE</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>

                </div>
                <div className='col-lg-6'>
                      <div className="perfume-banner men"  data-aos="fade-left" data-aos-delay="500">
                    <div className="banner-content">
                        <h2>Men's Perfume</h2>
                        <p>SHINE CONFIDENTLY EVERYWHERE</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                </div>
                </div>
            </div>

          






   <div className='cstm-bg-img-sec d-flex justify-content-center align-items-center  mr-5  mt-5'>
      <div className="promo-content ">
        <h4 className="subtitle">Summer Fragrance Fiesta</h4>
        <h2 className="main-title">
          Get Upto <span className="highlight">25% Off</span><br />
          Summer Fragrances
        </h2>
        <p className="description">
          Perfect for day or night, these scents will keep you feeling fresh and invigorated all summer long.
        </p>
        <button className="shop-button">Shop Now</button>
      </div>
   </div>



   {/* <div className='container-fluid'>
    <div>
     
    </div>
   </div> */}

   <div   className='text-center mt-5'>
         <h1>Products</h1>
   </div>
 

    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              {product.discount && (
                <span className="discount-badge">-{product.discount}%</span>
              )}
              {/* <button className="wishlist-btn">♡</button> */}
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="prodt-cart mt-3">
                        {/* <FiShoppingCart className='cstm-icon' /> */}
                        <button type="button" className='cstm-add'>Add to Cart</button>
                         <button type="button"  className='cstm-add'>Buy Now</button>
                    </div>
               
              {product.countdown && (
                <div className="countdown">
                  <div><strong>{product.countdown.days}</strong><span>Days</span></div>
                  <div><strong>{product.countdown.hours}</strong><span>Hours</span></div>
                  <div><strong>{product.countdown.mins}</strong><span>Mins</span></div>
                  <div><strong>{product.countdown.secs}</strong><span>Secs</span></div>
                </div>
              )}
              <p className="product-name">{product.name}</p>
                <p className="product-name">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>



       <section className="testimonial-section">
      <h2 className="testimonial-title "></h2>
      <p className=' cstm-cmre'>Customer Reviews</p>
      <div className='cstm-sec-div container'>
      <Swiper
        modules={[Pagination,Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={30}
         autoplay={{
    delay: 2000,         // 3 seconds between slides
    disableOnInteraction: false, // Keeps autoplay after user swipe
  }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >

        
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <h3 className="testimonial-heading">{t.title}</h3>
              <p className="testimonial-text">"{t.review}"</p>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-role">{t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>




      <section className="blog-section py-5"   data-aos="fade-up">
      <div className="container text-center">
        <p className="section-subtitle text-uppercase text-pink fw-bold">Latest Insights</p>
        <h2 className="section-title mb-5 fw-bold">News & Blog Updates</h2>

        <div className="row justify-content-center">
          {blogPosts.map((post,i) => (
            <div className="col-md-6 mb-4" key={post.id}    data-aos="fade-up"
          data-aos-delay={300 + i * 100}>
              <div className="blog-card position-relative text-start text-white">
                <img src={post.image} alt={post.title} className="img-fluid w-100 rounded shadow" />
                <div className="blog-overlay position-absolute bottom-0 start-0 p-4 w-100">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-3">{post.date}</span>
                    <FaRegComments className="me-1" />
                    <span>{post.comments} Comments</span>
                  </div>
                  <h5 className="blog-title fw-bold">{post.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </>
    )
}

export default Home
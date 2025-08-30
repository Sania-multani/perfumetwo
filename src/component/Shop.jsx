import React, { useState } from 'react'
import { FaTh, FaBars } from "react-icons/fa";






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

    {
    id: 2,
    name: "Luxurious Scents",
    image: "assets/images/per22.jpg",
    discount: 21,
       price:"Rs.25",
  },
    {
    id: 2,
    name: "Luxurious Scents",
    image: "assets/images/per22.jpg",
    discount: 21,
       price:"Rs.25",
  },
    {
    id: 2,
    name: "Luxurious Scents",
    image: "assets/images/per22.jpg",
    discount: 21,
       price:"Rs.25",
  },
    {
    id: 2,
    name: "Luxurious Scents",
    image: "assets/images/per22.jpg",
    discount: 21,
       price:"Rs.25",
  },
    {
    id: 2,
    name: "Luxurious Scents",
    image: "assets/images/per22.jpg",
    discount: 21,
       price:"Rs.25",
  },
    {
    id: 2,
    name: "Luxurious Scents",
    image: "assets/images/per22.jpg",
    discount: 21,
       price:"Rs.25",
  },
];



const Shop = () => {
     const [viewMode, setViewMode] = useState("grid");

  return (
   <>
        <div className="container-fluid bg-light py-3 mt-5">
      <div className="row align-items-center justify-content-between">
        {/* Sort Controls */}
        <div className="col-md-9 d-flex flex-wrap gap-3 align-items-center">
          <div className=" ms-4 d-flex align-items-center">
            <span className="me-2 fw-bold">Sort</span>
            <select className="form-select">
              <option>9 Products/Page</option>
              <option>12 Products/Page</option>
              <option>24 Products/Page</option>
            </select>
          </div>

          <div className=" ms-5 d-flex align-items-center">
            <span className=" fw-bold">Sort by</span>
            <select className=" ms-2 form-select">
              <option>Sort by newness</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popularity</option>
            </select>
          </div>
        </div>

        {/* View Toggle */}
        <div className="col-md-3 d-flex justify-content-end">
          <button
            className={`btn me-3 ${viewMode === "list" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => setViewMode("list")}
          >
            <FaBars />
          </button>
          <button
            className={`btn me-5  ${viewMode === "grid" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => setViewMode("grid")}
          >
            <FaTh />
          </button>
        </div>
      </div>
    </div>



    <div className='container mt-5'>
     <div className='row'>
     {products.map((product) => (
        <div className='col-lg-3'>
              <div key={product.id}>
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
              </div>
              </div>
            ))}
               </div>
               </div> 
   </>
  )
}

export default Shop
import React, { useEffect, useRef, useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("login");
    const menuRef = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);



      const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    quantity: 2,
    image: "assets/images/per9.png", // Replace with real image
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    quantity: 1,
    image: "assets/images/per9.png", // Replace with real image
  },
];


 const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );



    return (
        <>
            <div className="topBar">
                <div className="leftText">
                    Welcome to our online store!
                </div>
                <div className="rightMenu">
                    <div className="languageSelector">English (USD) ▼</div>
                    <div className="divider" />
                    <div className="loginRegister">Login or Register</div>
                </div>
            </div>

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
                 

                    <div className="user-menu-container" ref={menuRef}>

      <div className="user-icon" onClick={() => setOpen(!open)}>
        <FaUser size={22} />
      </div>

 
      {open && (
        <div className="dropdown-box">
          <div className="tab-header">
            <button className="active">Login</button>
            <button>Register</button>
          </div>

          <form className="login-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="login-btn">
              LOGIN
            </button>

            <p className="lost-password">Lost your password?</p>
          </form>
        </div>
      )}
    </div>


                </div>
            </header> */}



            <header className="header">
                {/* Logo */}
                <div className="logo">
                    <img src="assets/images/logo.png" alt="Logo" className="cstm-img-logo" />
                </div>

                {/* Search Bar */}
                <div className="search-container">
                    <input type="text" placeholder="Search here" className="search-input" />
                    <select className="category-select">
                        <option>Accessories</option>
                        <option>Perfume</option>
                        <option>Gift Sets</option>
                    </select>
                    <button className="search-button">
                        <FiSearch />
                    </button>
                </div>

                {/* Icons */}
                {/* <div className="icons"></div>
      <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">

        
        <div className="cart">
          <FiShoppingCart className="cstm-icon" />
          <span className="cart-badge">0</span>
        </div>
      </button> */}

                <div className="icons">
                    <div className="cart">
                        <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">    <FiShoppingCart className="cstm-icon" /></button>
                    </div>

                    {/* User Dropdown */}
                    <div className="user-menu-container" ref={menuRef}>
                        {/* User Icon */}
                        <div className="user-icon" onClick={() => setOpen(!open)}>
                            <FaUser size={22} />
                        </div>

                        {/* Dropdown */}
                        {open && (
                            <div className="dropdown-box">
                                {/* Tabs */}
                                <div className="tab-header">
                                    <button
                                        className={activeTab === "login" ? "active" : ""}
                                        onClick={() => setActiveTab("login")}
                                    >
                                        Login
                                    </button>
                                    <button
                                        className={activeTab === "register" ? "active" : ""}
                                        onClick={() => setActiveTab("register")}
                                    >
                                        Register
                                    </button>
                                </div>

                                {/* Login Form */}
                                {activeTab === "login" && (
                                    <form className="login-form">
                                        <input type="email" placeholder="Email" required />
                                        <input type="password" placeholder="Password" required />

                                        <div className="remember">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember " className='cstm-rem-me'>Remember me</label>
                                        </div>

                                        <NavLink to="/profile">
                                            <button type="submit" className="login-btn w-100">
                                                LOGIN
                                            </button>
                                        </NavLink>

                                        <p className="lost-password">Lost your password?</p>
                                    </form>
                                )}

                                {/* Register Form */}
                                {activeTab === "register" && (
                                    <form className="login-form">
                                        <input type="text" placeholder="Full Name" required />
                                        <input type="email" placeholder="Email" required />
                                        <input type="password" placeholder="Password" required />
                                        <input type="password" placeholder="Confirm Password" required />

                                        <button type="submit" className="login-btn">
                                            REGISTER
                                        </button>
                                    </form>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className='container-fluid'>
                <nav className="nav-container">
                    <div className="all-categories">
                        <FiMenu className="menu-icon" />
                        <span>All Categories</span>
                    </div>

                    <ul className="nav-links">
                        <NavLink to="/" className="cstm-navlink-decor"> <li>Home <span className="dropdown-icon"></span></li> </NavLink>
                        <NavLink to="/shop" className="cstm-navlink-decor">   <li>Shop <span className="dropdown-icon"></span></li> </NavLink>
                        <NavLink to="/about" className="cstm-navlink-decor"><li>About <span className="dropdown-icon"></span></li></NavLink>
                        <NavLink to="/blog" className="cstm-navlink-decor"><li>Blogs <span className="dropdown-icon"></span></li> </NavLink>
                        <NavLink to="/contact" className="cstm-navlink-decor"><li>Contact</li></NavLink>
                    </ul>
                </nav>
            </div>


            {/* <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  
                </div>
            </div> */}




            
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart Page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   {/* Sample Cart Items */}
            {cartItems.map((item) => (
            <div className="cart-item d-flex mb-3" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-img me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">{item.name}</h6>
                <p className="mb-0 text-muted">
                  Qty: {item.quantity} × Rs.{item.price.toFixed(2)}
                </p>
                <p className="mb-0 fw-bold">
                  Total: Rs.{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="cstm-cros-btn">
                x
              </button>
            </div>
          ))}

          <hr />
          <h5 className="text-end">Grand Total: Rs.{total.toFixed(2)}</h5>
         <NavLink to="/cart">
          <button className="btn cstm-check-cart w-100  mt-3">Checkout</button>
          </NavLink>
  </div>
</div>



        </>
    )
}

export default Header
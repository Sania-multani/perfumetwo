import React from 'react'
import { FaRegComments } from 'react-icons/fa';


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

    {
    id: 2,
    date: "July 01, 2024",
    comments: 0,
    title: "Top 10 Fragrances For Spring: Refresh Your Scent Wardrobe",
    image: "/assets/images/per24.jpg",
  },

    {
    id: 2,
    date: "July 01, 2024",
    comments: 0,
    title: "Top 10 Fragrances For Spring: Refresh Your Scent Wardrobe",
    image: "/assets/images/per23.jpg",
  },
];

const Blog = () => {
  return (
    <>
     <section className="blog-banner mt-5">
      <div className="overlay">
        <h1 className="banner-title">
          The Art of Layering Perfumes: Creating Your Unique Scent
        </h1>
        <div className="banner-meta">
          <span>
            <i className="far fa-calendar-alt"></i> Jul 01 2024
          </span>
          <span>
            <i className="far fa-user"></i> Qodex Web
          </span>
          <span>
            <i className="far fa-comments"></i> 0 Comments
          </span>
        </div>
      </div>
    </section>

    

       <section className="blog-section py-5 mt-5"   >
          <div className="container text-center">
            <p className="section-subtitle text-uppercase text-pink fw-bold">Latest Insights</p>
            <h2 className="section-title mb-5 fw-bold">News & Blog Updates</h2>
    
            <div className="row justify-content-center">
              {blogPosts.map((post,i) => (
                <div className="col-md-6 mb-4" key={post.id}    
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

export default Blog
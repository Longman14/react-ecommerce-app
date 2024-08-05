import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
 
        <div className="blog-card">
            <div className="card-image">
                <img src="assets/images/blog-1.jpg" alt="blog" className="img-fluid w-100"/>
            </div>
            <div className="blog-content">
                <p className="date">3 Jul, 2024</p>
                <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                <p className="desc">Lorem ipsum dolor sit amet consectetur, quam ullam dignissimos?</p>
                <Link to="/" className='button'>Read More</Link>
            </div>
        </div>
  )
}

export default BlogCard
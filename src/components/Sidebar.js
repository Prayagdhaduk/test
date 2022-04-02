import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link aria-current="page" className="nav-link active" to="/">
              <img
                src="testimonials/testimonials-3.jpg"
                className="testimonial-img"
                alt=""
              />
              <p>Sasuke</p>
            </Link>
          </li>
          <li>
            <Link aria-current="page" className="nav-link active" to="display2">
              <img
                src="testimonials/testimonials-2.jpg"
                className="testimonial-img"
                alt=""
              />
              <p>
              Naruto
              </p>
            </Link>
          </li>
          <li>
            <Link aria-current="page" className="nav-link active" to="display3">
              <img
                src="testimonials/testimonials-1.jpg"
                className="testimonial-img"
                alt=""
              />
              <p>
              Itachi
              </p>
            </Link>
          </li>
          <li>
          <Link aria-current="page" className="nav-link active" to="display4">
              <img
                src="testimonials/testimonials-1.jpg"
                className="testimonial-img"
                alt=""
              />
              <p>
              Itachi
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;

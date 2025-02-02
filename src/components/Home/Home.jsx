

import React from 'react'
import style from './home.module.css';
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={style.home_container}>
      <div className=''>
        <p id={style.headline}>
          Hi, I'm <strong> CHANDAN KUMAR</strong>, a passionate <strong>MERN Stack Developer</strong>  with a Bachelor's degree in <strong>BCA</strong>  from <strong>Ram Lakhan Singh Yadav College Ranchi</strong>. I specialize in creating seamless and responsive web applications.
        </p>
        <p id={style.keyPoint} className='d-md-none'>
          Over the past few months, I've worked on diverse projects ranging from e-commerce platforms to dynamic product management systems. I thrive in collaborative environments and enjoy solving challenging problems through clean, maintainable code.
        </p>

      </div>
      <section className={`col-xl-6 col-lg-6 p-lg-3 ${style.carousel_container}`}>
        <h1>Project Glims</h1>
        <Link to="/project">
        <Carousel interval={2000} controls={false} indicators={false} className={style.carousel}>
          <Carousel.Item className={style.carousel_item}>
            <img className={`${style.carousel_image} d-block w-100 `}  src="https://res.cloudinary.com/dv53eip2t/image/upload/v1737887540/Screenshot_2025-01-26_160008_dzj2pc.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className={style.carousel_item}>
            <img className={`${style.carousel_image} d-block w-100`}  src="https://res.cloudinary.com/dv53eip2t/image/upload/v1738503273/Screenshot_2025-02-02_190402_pqfoty.png" />
          </Carousel.Item>
          <Carousel.Item className={style.carousel_item}>
            <img className={`${style.carousel_image} d-block w-100`}  src="https://res.cloudinary.com/dv53eip2t/image/upload/v1738397180/Screenshot_2025-02-01_133525_y4nqbx.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className={style.carousel_item}>
            <img className={`${style.carousel_image} d-block w-100 `} src="https://res.cloudinary.com/dv53eip2t/image/upload/v1737888512/Screenshot_2025-01-26_161809_rosb2w.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        </Link>
      </section>

    </div>
  )
}

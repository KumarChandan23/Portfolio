

import React from 'react'
import style from './home.module.css';
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={style.home_container}>
      <div className={style.headline_container}>
        <div id={style.headline}>
          <h1>Hi, I'm <strong> CHANDAN KUMAR</strong></h1>
          <h1>Passionate Frontend Developer</h1>
          <p>Welcome to my official portfolio website where i put all my work related web development and more</p>
          <section className={style.links_container}>
            <a href="https://raw.githubusercontent.com/KumarChandan23/CV/main/chandan-kumar.pdf" download="chandan-kumar.pdf">
              <button className={style.download_cv_button}>Download My CV</button>
            </a>

            <div className={style.social_media_link}>
              <i class="bi bi-linkedin" title="Linkedin"></i>
              <i class="bi bi-whatsapp" title="Whatsapp"></i>
              <i class="bi bi-envelope" title="Emial"></i>
            </div>
          </section>
        </div>
      </div>
      <section className={`col-xl-6 col-lg-6 p-lg-3 ${style.carousel_container}`}>
        <h1>Project Glims</h1>
        <Link to="/project">
          <Carousel interval={2000} controls={false} indicators={false} className={style.carousel}>
            <Carousel.Item className={style.carousel_item}>
              <img className={`${style.carousel_image} d-block w-100 `} src="https://res.cloudinary.com/dv53eip2t/image/upload/v1737887540/Screenshot_2025-01-26_160008_dzj2pc.png" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item className={style.carousel_item}>
              <img className={`${style.carousel_image} d-block w-100`} src="https://res.cloudinary.com/dv53eip2t/image/upload/v1738503273/Screenshot_2025-02-02_190402_pqfoty.png" />
            </Carousel.Item>
            <Carousel.Item className={style.carousel_item}>
              <img className={`${style.carousel_image} d-block w-100`} src="https://res.cloudinary.com/dv53eip2t/image/upload/v1738397180/Screenshot_2025-02-01_133525_y4nqbx.png" alt="Second slide" />
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

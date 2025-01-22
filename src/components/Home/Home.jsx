

import React from 'react'
import style from './home.module.css';
export const Home = () => {
  return (
    <div className='row w-100'>
      <div className='col-xl-6 col-lg-6 col-md-12  p-xl-3 ps-lg-3 p-md- px-5'> 
      <p id={style.headline}>
      Hi, I'm <strong> CHANDAN KUMAR</strong>, a passionate <strong>MERN Stack Developer</strong>  with a Bachelor's degree in <strong>BAC</strong>  from <strong>Ram Lakhan Singh Yadav College Ranchi</strong>. I specialize in creating seamless and responsive web applications using <strong>React.</strong> 
      </p>
      <p id={style.keyPoint} className='d-md-none'>
      Over the past few months, I've worked on diverse projects ranging from e-commerce platforms to dynamic product management systems. I thrive in collaborative environments and enjoy solving challenging problems through clean, maintainable code.
      </p>
    
      </div>
      <div className="col-xl-6 col-lg-6">
              <img src="https://res.cloudinary.com/dv53eip2t/image/upload/v1734344498/samples/coffee.jpg" className='w-100 px-5 rounded'  alt="" />
      </div>
     
    </div>
  )
}

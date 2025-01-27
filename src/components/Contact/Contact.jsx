import React from 'react';

const Contact = () => {
    let style = {
        backgroundColor: 'black',
    }
    return (
        <section id="contact" className="contact p-lg-3 p-3 ">
            <h2>Contact Me</h2>
            <h2>Name: Chandan Kumar</h2>
            <button title='ck368966@gmail.com' id={style} className='btn btn-light'><a href="mailto:ck368966@gmail.com" target='_blank' className='text-decoration-none'>Email</a></button>
            <button className='btn btn-light mx-3'><a href="https://www.linkedin.com/in/chandan-kumar-a930722bb/" target='_blank' className='text-decoration-none'>LinkedIn</a></button>
            <button className='btn btn-light'><a href="https://github.com/" target='_blank' className='text-decoration-none'>GitHub</a> </button>
            <p>Phone Number: 8102888652</p>
        </section>
    );
};

export default Contact;

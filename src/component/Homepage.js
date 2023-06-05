import React from 'react'
import Typed from "react-typed"
import "./css/Homepage.css"
export default function Homepage(props) {
  return (
    <>

      <div className='home-outer-container' id="cont3">
        <div className='home-inner-container' id="cont1">
          <div className='content-main'>
            <h3 style={{color:props.switch_modes==="dark"?"":"#484747"}}><b>Hello, it's Me</b></h3>
            <h1 style={{color:props.switch_modes==="dark"?"":"#484747"}}><b>Abhishek Jain</b></h1>
            <h3 id="my-skill-list" style={{color:props.switch_modes==="dark"?"":"#484747"}}><b>And I'm a <span id="types"><Typed strings={["Student", "Python Developer", "Quick lerner"]} typeSpeed={80} backSpeed={80} loop /></span></b></h3>
            <p style={{color:props.switch_modes==="dark"?"":"#484747"}}>This is my portfolio Developer by me using React, Javascript,
              HTML and CSS.with all infromation about myself hope you will like it.
            </p>
          </div>


          <div className='logos'>
            <a target="_blank" href="https://www.facebook.com/abhishek2234125" style={{ "--i": 6 ,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}><i className='bx bxl-facebook'></i></a>
            <a target="_blank" href="https://github.com/abhishek12234" style={{ "--i": 7,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}><i className='bx bxl-github'></i></a>
            <a target="_blank" href="https://www.instagram.com/abhishek__jain1/" style={{ "--i": 8 ,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}><i className='bx bxl-instagram-alt' ></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/abhishek-jain-59a760210" style={{ "--i": 9,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}><i className='bx bxl-linkedin'></i></a>

          </div>
          <div className="home-button">
            <a href='My_resume.pdf' className='btn' download={"My_resume.pdf"} style={{"--shadow":props.switch_modes==="dark"?"#0ef":"#484747",backgroundColor:props.switch_modes==="dark"?"":"#484747",color:props.switch_modes==="dark"?"":"#0ef"}} id="button1"><b>Download CV</b></a>
          </div>
        </div>


        <div className='home-image' >
          <img src="https://github.com/Ayushkumawat/Facial-Recognition-with-Gender-Detection/assets/76219349/0964e6d3-407a-485f-b20f-bbcfe30a4776" width={340} height={450} />
        </div>
      </div>




    </>

  )
}

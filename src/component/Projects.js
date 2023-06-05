

import React, { Component } from 'react'
import "./css/Projects.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react'

export default function Projects(props) {
  let count_incer
  let count_decre

  const [count_proj, set_count_proj] = useState(0)
  const prev_project = () => {
    count_decre = count_proj
    if (count_proj > 0) {
      set_count_proj(--count_decre)
    }
    console.log(count_proj)


  }
  const next_project = () => {
    count_incer = count_proj
    if (count_proj < 4) {
      set_count_proj(++count_incer)
    }
    console.log(count_proj)


  }

  return (
    <div className='container_project-1'>
      <div className="My_Projects">
        <h3 style={{ color: props.switch_modes === "dark" ? "" : "#484747" }}>My <span style={{color:"#04edfe"}}>Projects</span></h3>
      </div>

      <div className="container">
        

        <div className="project_name_container">
          <div className={`project_name ${count_proj===0?"active_project_name":""}`}>
            <h3 style={{ color: props.switch_modes === "dark" ? "" : "#484747" }}>Advance Attendance</h3>
            <h3 ><span style={{color:"#04edfe"}}> System</span></h3>
          </div>

          <div className={`project_name ${count_proj===1?"active_project_name":""}`}>
            <h3 style={{ color: props.switch_modes === "dark" ? "" : "#484747" }}>Bus Pass Automation</h3>
            <h3 style={{color:"#04edfe"}}>System</h3>
          </div>

          <div className={`project_name ${count_proj===2?"active_project_name":""}`}>
            <h3 style={{ color: props.switch_modes === "dark" ? "" : "#484747" }}>A.I.</h3>
            <h3 style={{color:"#04edfe"}}> MedDiagnos</h3>
          </div>

          <div className={`project_name ${count_proj===3?"active_project_name":""}`}>
            <h3 style={{ color: props.switch_modes === "dark" ? "" : "#484747" }}>React </h3>
            <h3 style={{color:"#04edfe"}}>Portfolio</h3>
          </div>

          <div className={`project_name ${count_proj===4?"active_project_name":""}`}>
            <h3 style={{ color: props.switch_modes === "dark" ? "" : "#484747" }}>Whatsapp Automation </h3>
            <h3 style={{color:"#04edfe"}}>System</h3>
          </div>

        </div>
      
        <div className="main_project_container">

          <div className="prev-project" onClick={prev_project}>
            <span style={{ color: props.switch_modes === "dark" ? "" : "#484747" }}>&#60;</span>
          </div>

          <div className="project_all">
            <div className={`projects ${count_proj === 0 ? "active-project" : ""}`} id="project2" >
              <div className="project-container1">
                <img src="/all_images/face_attendence.png" />

                <div className='project-layer'>
                <div className="assitant_button_container">
                        <div className="overlay_button"></div>

                        <a target="_blank" href="https://github.com/abhishek12234/Attendance_System_App_Using_Face_Recognition_Technology" style={{textDecoration:"None"}} className="assitant_button">
                            <h1>Click</h1>
                            

                        </a>

                    </div>
                  
                  
                </div>
              </div>
            </div>

            <div className={`projects ${count_proj == 1 ? "active-project" : ""}`} id="project3">
              <div className="project-container1">
                <img src="/all_images/bus_project.png" />

                <div className='project-layer'>
                <div className="assitant_button_container">
                        <div className="overlay_button"></div>

                        <a target="_blank" href="https://github.com/abhishek12234/Bus-Passenger-Management-using-Smart-Card-Technology-1" style={{textDecoration:"None"}} className="assitant_button">
                            <h1>Click</h1>
                            

                        </a>

                    </div>
                  
                </div>
              </div>
            </div>

            <div className={`projects ${count_proj == 2 ? "active-project" : ""}`} id="project4">
              <div className="project-container1">
                <img src="/all_images/healthcare_project.png" />

                <div className='project-layer'>
                <div className="assitant_button_container">
                        <div className="overlay_button"></div>

                        <a target="_blank" href="https://github.com/abhishek12234/AI_MedDiagnos" style={{textDecoration:"None"}} className="assitant_button">
                            <h1>Click</h1>
                            

                        </a>

                    </div>

                </div>
              </div>
            </div>

            <div className={`projects ${count_proj == 3 ? "active-project" : ""}`} id="project5">
              <div className="project-container1">
                <img src="/all_images/portfolio_project.png" />

                <div className='project-layer'>
                <div className="assitant_button_container">
                        <div className="overlay_button"></div>

                        <a target="_blank" href="https://github.com/abhishek12234/Face-Recognition-With-Face-Updation-using-Nvidia-Jetson-Nano" style={{textDecoration:"None"}} className="assitant_button">
                            <h1>Click</h1>
                            

                        </a>

                    </div>
                  
                </div>
              </div>
            </div>

            <div className={`projects ${count_proj == 4 ? "active-project" : ""}`} id="project6">
              <div className="project-container1">
                <img src="/all_images/automation.png" width={100} height={100} />

                <div className='project-layer'>
                <div className="assitant_button_container">
                        <div className="overlay_button"></div>

                        <a target="_blank" href="https://github.com/abhishek12234/Whatsapp_Message_Automation_App_Using_Python" style={{textDecoration:"None"}} className="assitant_button">
                            <h1>Click</h1>
                            

                        </a>

                    </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="next-project" onClick={next_project}>
            <span style={{ color: props.switch_modes === "dark" ? "" : "#484747" }}>&#62;</span>
          </div>
        </div>
        <div className="project_dot_container">
          <span onClick={() => set_count_proj(0)} className="project_dot" style={count_proj == 0 ? { textShadow: "0 0 10px #04edfe", color: "#0ef" } : { color: props.switch_modes === "dark" ? "" : "#484747" }}>&#9679;</span>
          <span onClick={() => set_count_proj(1)} className="project_dot" style={count_proj == 1 ? { textShadow: "0 0 10px #04edfe", color: "#0ef" } : { color: props.switch_modes === "dark" ? "" : "#484747" }}>&#9679;</span>
          <span onClick={() => set_count_proj(2)} className="project_dot" style={count_proj == 2 ? { textShadow: "0 0 10px #04edfe", color: "#0ef" } : { color: props.switch_modes === "dark" ? "" : "#484747" }}>&#9679;</span>
          <span onClick={() => set_count_proj(3)} className="project_dot" style={count_proj == 3 ? { textShadow: "0 0 10px #04edfe", color: "#0ef" } : { color: props.switch_modes === "dark" ? "" : "#484747" }}>&#9679;</span>
          <span onClick={() => set_count_proj(4)} className="project_dot" style={count_proj == 4 ? { textShadow: "0 0 10px #04edfe", color: "#0ef" } : { color: props.switch_modes === "dark" ? "" : "#484747" }}>&#9679;</span>
        </div>
      </div>
    </div>

  )
}

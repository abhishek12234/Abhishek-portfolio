import React from 'react'
import "./css/Skills.css"
import { useState, useEffect } from 'react'
export default function Skills(props) {
  const [progressval, set_progressval] = useState(0)
  const [progressval1, set_progressval1] = useState(0)
  const [progressval2, set_progressval2] = useState(0)
  const [progressval3, set_progressval3] = useState(0)
  const [progressval4, set_progressval4] = useState(0)
  const [startcount, setcount] = useState(true)
  const [startcount1, setcount1] = useState(true)
  const [startcount2, setcount2] = useState(true)
  const [startcount3, setcount3] = useState(true)
  const [startcount4, setcount4] = useState(true)


  let func1 = () => {
    if (startcount) {



      let interf = setInterval(() => {
        set_progressval(progressval + 1)
        if (progressval === 90) {
          setcount(false)
        }
        else {
          clearInterval(interf)
        }

      }, 15)
    }
  }


  const func2 = () => {
    if (startcount1) {
      let interf1 = setInterval(() => {
        set_progressval1(progressval1 + 1)
        if (progressval1 === 80) {
          setcount1(false)
        }
        else {
          clearInterval(interf1)
        }

      }, 15)

    }
  }

  const func3 = () => {
    if (startcount2) {
      let interf2 = setInterval(() => {
        set_progressval2(progressval2 + 1)
        if (progressval2 === 80) {
          setcount2(false)
        }
        else {
          clearInterval(interf2)
        }

      }, 15)

    }
  }
  const func4 = () => {
    if (startcount3) {
      let interf3 = setInterval(() => {
        set_progressval3(progressval3 + 1)
        if (progressval3 === 70) {
          setcount3(false)
        }
        else {
          clearInterval(interf3)
        }

      }, 15)

    }
  }


  func1()
  func2()
  func3()
  func4()

  const [skills_curr, set_skills_curr] = useState(0)
  const [skills_curr1, set_skills_curr1] = useState(0)


  return (
    <>

      <div className='outer-container' >

        <div className='container-skill1' id="tech">

          <h3 id="skills" style={{color:props.switch_modes==="dark"?"":"#484747"}}>Techincal<span> Skills</span></h3>



          <div id="my-skills" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
            
            <div className="prev-skills">
            <span onClick={() => set_skills_curr(0)} >&#60;</span>
            </div>
            <div className='container-3'>

              <div className="flip-skills">
                <div className={`skill-box1 ${skills_curr == 0 ? "active" : ""}`} style={{ "--p": 3 }} >

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 3 }}>Python</span>
                    <img src="/all_images/python_icon.png" />
                    

                  </div>

                  <div className="skill-bar">
                    <span className="skill-per python">
                      <span className="tooltip">95%</span>
                    </span>
                  </div>

                </div>

                <div className={`skill-box1 ${skills_curr == 1 ? "active" : ""}`} style={{ position: "absolute" }}>

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 3 }}>NLP</span>
                    <img style={{width:"28px",height:"26px"}} src="/all_images/nlp_icon.png" />

                  </div>

                  <div className="skill-bar">
                    <span className="skill-per NLP">
                      <span className="tooltip">60%</span>
                    </span>
                  </div>

                </div>
              </div>

              <div className="flip-skills">
                <div className={`skill-box ${skills_curr == 0 ? "active" : ""}`} style={{ "--p": 4 }}>

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 4 }}>CSS</span>
                    <img src="/all_images/css_icon.png" />
                  </div>


                  <div className="skill-bar">
                    <span className="skill-per css">
                      <span className="tooltip">80%</span>
                    </span>
                  </div>

                </div>
                <div className={`skill-box ${skills_curr == 1 ? "active" : ""}`} style={{ position: "absolute" }}>

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 3 }}>SQL</span>
                    <img src="/all_images/sql_icon.png" />

                  </div>

                  <div className="skill-bar">
                    <span className="skill-per sql">
                      <span className="tooltip">75%</span>
                    </span>
                  </div>

                </div>
              </div>

              <div className="flip-skills">
                <div className={`skill-box1 ${skills_curr == 0 ? "active" : ""}`} style={{ "--p": 5 }}>

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 5 }}>JavaScript</span>
                    <img src="/all_images/js_icon.png" />
                  </div>


                  <div className="skill-bar">
                    <span className="skill-per javascript">
                      <span className="tooltip">60%</span>
                    </span>
                  </div>

                </div>

                <div className={`skill-box1 ${skills_curr == 1 ? "active" : ""}`} style={{ position: "absolute" }}>

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 3 }}>Microsoft Excel</span>
                    <img style={{width:"22px"}}src="/all_images/excel_icon.png" />

                  </div>

                  <div className="skill-bar">
                    <span className="skill-per sql">
                      <span className="tooltip">75%</span>
                    </span>
                  </div>

                </div>
              </div>

              <div className="flip-skills">
                <div className={`skill-box ${skills_curr == 0 ? "active" : ""}`} style={{ "--p": 6 }}>

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 6 }}>Web Scraping</span>
                    <img src="/all_images/web_icon.png" />
                  </div>

                  <div className="skill-bar">
                    <span className="skill-per webscraping">
                      <span className="tooltip">60%</span>
                    </span>
                  </div>

                </div>
              </div>

              <div className="flip-skills">
                <div className={`skill-box1 ${skills_curr == 0 ? "active" : ""}`} style={{ "--p": 7 }}>

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 7 }}>ReactJS</span>
                    <img style={{width:"25px",height:"25px"}}src="/all_images/react_icon.png" />
                  </div>

                  <div className="skill-bar">
                    <span className="skill-per reactjs">
                      <span className="tooltip">70%</span>
                    </span>
                  </div>

                </div>
              </div>
              <div className="flip-skills">
                <div className={`skill-box ${skills_curr == 0 ? "active" : ""}`} style={{ "--p": 8 }} >

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 8 }}>HTML</span>
                    <img src="/all_images/html_icon.png" />
                  </div>

                  <div className="skill-bar">
                    <span className="skill-per html">
                      <span className="tooltip">75%</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flip-skills">
                <div className={`skill-box1 ${skills_curr == 0 ? "active" : ""}`} style={{ "--p": 9 }}>

                  <div className="page1-title">
                    <span className="title" style={{ "--p": 9 }}>Machine Learning</span>
                    <img src="/all_images/ML_icon.png" />
                  </div>
                  <div className="skill-bar">
                    <span className="skill-per expressjs">
                      <span className="tooltip">75%</span>
                    </span>
                  </div>
                </div>

              </div>

            </div>
            <div className="next-skills">
              
              <span onClick={() => set_skills_curr(1)} >&#62;</span>
            </div>
          </div>
          
        </div>






        <div className='container-skill1' id="prof">

          <h3 id="skills" style={{color:props.switch_modes==="dark"?"":"#484747"}}>Professional<span> Skills</span></h3>

          <div className='container2' id="my-newhav" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>

            <div className={`prev-skills`}>
            <span onClick={() => set_skills_curr1(0)} >&#60;</span>
            </div>
            <div className='row-new-1'>

              <div className="progress-filp">

                <div className="progress-outer-container" >
                  <div className={`progress-container ${skills_curr1 == 0 ? "active1" : ""}`} id="progress1" >
                    <div onClick={func1()} className="circular-progress" style={{ "--progress":props.switch_modes==="dark"?"#151820":"#484747",background: `conic-gradient(#0ef ${progressval * 3.6}deg,#121318 0deg)` }}>
                      <span className="progress-value">{progressval}%</span>
                    </div>
                  </div>

                  <div className={`skill-text-container1 ${skills_curr1 == 0 ? "active1" : ""} `}>
                    <div className="text1">Communication</div>
                  </div>

                </div>

                <div className="progress-outer-container" style={{ position: "absolute" }}>
                  <div className={`progress-container ${skills_curr1 == 1 ? "active1" : ""}`}  >
                    <div onClick={func1()} className="circular-progress" style={{ "--progress":props.switch_modes==="dark"?"#151820":"#484747",background: `conic-gradient(#0ef ${80 * 3.6}deg,#121318 0deg)` }}>
                      <span className="progress-value">{80}%</span>
                    </div>
                  </div>

                  <div className={`skill-text-container1 ${skills_curr1 == 1 ? "active1" : ""} `}>
                    <div className="text1">Problem Solving</div>
                  </div>

                </div>


              </div>

              <div className="progress-filp">

                <div className="progress-outer-container">

                  <div className={`progress-container ${skills_curr1 == 0 ? "active1" : ""}`} id="progress2">
                    <div onClick={func2} className="circular-progress" id="mynew" style={{ "--progress":props.switch_modes==="dark"?"#151820":"#484747",background: `conic-gradient(#0ef ${progressval1 * 3.6}deg,#121318 0deg)` }}>
                      <span className="progress-value">{progressval1}%</span>
                    </div>
                  </div>

                  <div className={`skill-text-container1 ${skills_curr1 == 0 ? "active1" : ""} `}>
                    <div className="text2">Project managment</div>
                  </div>

                </div>

              </div>


            </div>

            <div className='row-new-2'>

              <div className="progress-filp">

                <div className="progress-outer-container">

                  <div className={`progress-container ${skills_curr1 == 0 ? "active1" : ""}`} id="progress3">
                    <div onClick={func3} className="circular-progress" style={{ "--progress":props.switch_modes==="dark"?"#151820":"#484747",background: `conic-gradient(#0ef ${progressval2 * 3.6}deg,#121318 0deg)` }}>
                      <span className="progress-value">{progressval2}%</span>
                    </div>

                  </div>

                  <div className={`skill-text-container2 ${skills_curr1 == 0 ? "active1" : ""} `}>
                    <div className="text3">Team Work</div>
                  </div>

                </div>

              </div>

              <div className="progress-filp">

                <div className="progress-outer-container">

                  <div className={`progress-container ${skills_curr1 == 0 ? "active1" : ""}`} id="progress4">
                    <div onClick={func4} className="circular-progress" style={{ "--progress":props.switch_modes==="dark"?"#151820":"#484747",background: `conic-gradient(#0ef ${progressval3 * 3.6}deg,#121318 0deg)` }}>
                      <span className="progress-value">{progressval3}%</span>
                    </div>
                    
                  </div>

                  <div className={`skill-text-container2 ${skills_curr1 == 0 ? "active1" : ""} `}>
                  <div className="text2">Creativity</div>
                  </div>

                </div>

              </div>


            </div>

            <div className={`prev-skills`}>
            <span onClick={() => set_skills_curr1(1)} >&#62;</span>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

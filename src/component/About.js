import React from 'react'
import "./css/About.css"
import { useState, useEffect } from 'react'
export default function About(props) {
  const [about_popup,set_about_popup]=useState(false)
  const [scroll, set_scroll] = useState(false)

  useEffect(() => {
    document.querySelector(".About-container").style.filter =about_popup? "blur(15px)" : "";

}, [about_popup]);

 
  return (
    <>
    <div className="about-outer-container">
    <div className='About-container' id="about-back" >

      <div className="about-image-container">
        <img id="about-image" src="/all_images/image2.png"/>
        </div>
      
      <div className="About-content">

        <h4 style={{color:props.switch_modes==="dark"?"":"#484747"}}>About<span> Me</span></h4>
        <h3 style={{color:props.switch_modes==="dark"?"":"#484747"}}>B.Tech. Student</h3>
        <div className='about-para'>
          <p className="para" style={{color:props.switch_modes==="dark"?"":"#484747"}}>As an expert in Python programming language with a focus on AI and machine learning, I have built several projects in these areas. Recently, I have also been exploring the world of web development, by learning JavaScript, CSS, HTML and React </p>
        </div>
        
        <button onClick={()=>set_about_popup(about_popup? false : true)} className='btn' style={{display:"flex","--shadow":props.switch_modes==="dark"?"#0ef":"#484747",backgroundColor:props.switch_modes==="dark"?"":"#484747",color:props.switch_modes==="dark"?"":"#0ef"}}><b> Read more</b></button>
      
      </div>

      
    </div>

    <div className={`popup_about ${about_popup?"popup_about_active":""}`}  style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
      <i onClick={()=>set_about_popup(about_popup? false : true)} className="fa-solid fa-circle-xmark"></i>
      <h3>About <span>Me!</span></h3>
      <div className='popup_about_content'>
      <p className="para">As an expert in Python programming language with a focus on AI and machine learning, I have built several projects in these areas. Recently, I have also been exploring the world of web development, by learning JavaScript, CSS, HTML and React where I see a great opportunity to apply my skills and create innovative solutions.<br/><br/>

I am particularly interested in combining my AI and machine learning skills with web development to build intelligent and dynamic web applications that can analyze and respond to user behavior. With my expertise in Python libraries such as TensorFlow and Keras, I can build predictive models that can be integrated into web applications to enhance user experience and improve overall performance.<br/><br/>

Apart from my academic pursuits, I am an active member of several tech communities, where I collaborate with like-minded individuals to exchange ideas and enhance my skills. I am a quick learner, a team player, and possess strong analytical and problem-solving skills. I am always eager to learn new things and stay updated with the latest advancements in the field of computer science and AI. and latest developments in the techskills.<br/><br/>

If you are interested in connecting or have any opportunities to share, please feel free to send me a message. Thank you for stopping by!</p>
      </div>
    </div>
    </div>
    
    </>
  )
}

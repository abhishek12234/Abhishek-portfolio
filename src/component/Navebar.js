import React from 'react'
import "./css/Navebar.css"

import { useState, useEffect } from 'react'

export default function Navebar(props) {
  
  useEffect(() => {
    
    document.querySelector('.fitem1').style.color = props.switch_modes === 'dark' ? '' : '#484747';
    
    
  }, [props.switch_modes]);

  const [open,set_open]=useState(false)
  const open_menu=()=>{
    set_open(open?false:true)
    console.log("open")
  }
  const link1=()=>{
    props.change_link("1")
    props.set_backgound_nav("")
    
  }
  const link2=()=>{
    props.change_link("2")
    props.set_backgound_nav(props.switch_modes==="dark"?"#151820":"#BBBBBB")

  }
  const link3=()=>{
    props.change_link("3")
    props.set_backgound_nav(props.switch_modes==="dark"?"#151820":"#BBBBBB")

  }
  const link4=()=>{
    props.change_link("4")
    props.set_backgound_nav(props.switch_modes==="dark"?"#151820":"#BBBBBB")

  }
  const link5=()=>{
    props.change_link("5")
    props.set_backgound_nav(props.switch_modes==="dark"?"#151820":"#BBBBBB")

  }
  const link6=()=>{
    props.change_link("6")
    props.set_backgound_nav(props.switch_modes==="dark"?"#151820":"#BBBBBB")

  }
  
  const change_modes=()=>{
    props.set_modes(props.switch_modes==="dark"? "light":"dark")
    console.log(props.switch_modes)
    const backgroundColor = ["2", "3", "4", "5", "6"].includes(props.curr_link) ? (props.switch_modes === "dark" ? "#BBBBBB" : "#151820") : "";

   props.set_backgound_nav(backgroundColor);



  }
  return (
    <>
    
    
    <div className='fcontainer' style={{backgroundColor:props.backgound_nav}}>

    <div className='fitem1'><b>Portfolio<span>&#9679;</span></b></div>
    <div className="light_dark" onClick={change_modes}style={{boxShadow:props.switch_modes==="dark"?"":"6px 6px 12px #a1a0a0, -6px -6px 12px #d4d2d2"}}>
    
    <i className="bx bxs-moon" style={{color:props.switch_modes==="dark"?"":"#484747"}}></i>
    <i className="bx bxs-sun" style={{color:props.switch_modes==="dark"?"":"#0ef"}}></i>
    <span className="ball" style={{transform:props.switch_modes==="dark"?"":"translateX(33px)",backgroundColor:props.switch_modes==="dark"?"":"#484747"}}></span>
    </div>

    <div className='nav-items'>
      
      <a onClick={link1}className="fitem" style={{"--i":1,color:(props.curr_link==="1"?"#0ef":props.switch_modes==="dark"?"":"#484747")}}>Home</a>
      <a onClick={link2} aria-current="page" className='fitem' style={{"--i":2,color:(props.curr_link==="2"?"#0ef":props.switch_modes==="dark"?"":"#484747")}} >About</a>
      <a onClick={link3} aria-current="page" className='fitem' style={{"--i":3,color:(props.curr_link==="3"?"#0ef":props.switch_modes==="dark"?"":"#484747")}} >Projects</a>
      <a onClick={link4} aria-current="page" className='fitem' style={{"--i":4,color:(props.curr_link==="4"?"#0ef":props.switch_modes==="dark"?"":"#484747")}}>Contact</a>
      <a  onClick={link5} aria-current="page" className='fitem' style={{"--i":5,color:(props.curr_link==="5"?"#0ef":props.switch_modes==="dark"?"":"#484747")}} >Skills</a>
      <a  onClick={link6} aria-current="page" className='fitem' style={{"--i":6,color:(props.curr_link==="6"?"#0ef":props.switch_modes==="dark"?"":"#484747")}}>Certificates</a>
      </div>
      
      <div onClick={open_menu} className="toggle-button">
      {open ? (
    <i className="fa-solid fa-xmark " style={{ color: props.switch_modes === "dark" ? "white" : "#484747" }}></i>
  ) : (
    <i className="fa fa-solid fa-bars" style={{ color: props.switch_modes === "dark" ? "white" : "#484747" }}></i>
  )}
      </div>




      <div className={`drop-menu ${open?"open":""}`} style={{backgroundColor:props.switch_modes==="dark"?"#f7f3f3":"#484747"}}>
      <a onClick={()=>{link1();open_menu()}}className="fitem" style={{"--i":1,color:(props.curr_link==="1"?"#0ef":props.switch_modes==="dark"?"#151820":"")}} to="/">Home</a>
      <a onClick={()=>{link2();open_menu()}} aria-current="page" className='fitem' style={{"--i":2,color:(props.curr_link==="2"?"#0ef":props.switch_modes==="dark"?"#151820":"")}} to="/about">About</a>
      <a onClick={()=>{link3();open_menu()}} aria-current="page" className='fitem' style={{"--i":3,color:(props.curr_link==="3"?"#0ef":props.switch_modes==="dark"?"#151820":"")}} to="/project">Projects</a>
      <a onClick={()=>{link4();open_menu()}}aria-current="page" className='fitem' style={{"--i":4,color:(props.curr_link==="4"?"#0ef":props.switch_modes==="dark"?"#151820":"")}} to="/contact">Contacts</a>
      <a  onClick={()=>{link5();open_menu()}}aria-current="page" className='fitem' style={{"--i":5,color:(props.curr_link==="5"?"#0ef":props.switch_modes==="dark"?"#151820":"")}} to="/skill">Skills</a>
      <a  onClick={()=>{link6();open_menu()}}aria-current="page" className='fitem' style={{"--i":6,color:(props.curr_link==="6"?"#0ef":props.switch_modes==="dark"?"#151820":"")}} to="/Certificate">Certifacate</a>
      
      </div>
    </div>
    
    
    
    </>
  )
}

import React from 'react'
import "./css/Contacts.css"
import { useState, useEffect } from 'react'
export default function Contacts(props) {


  const [text1,set_text1]=useState("");
  const [text2,set_text2]=useState("");
  const [text3,set_text3]=useState("");
  const [text4,set_text4]=useState("");
  const [text5,set_text5]=useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [correct, set_correct] = useState(false)
  const [correct1, set_correct1] = useState(false)
  const [correct2, set_correct2] = useState(false)
  const [correct3, set_correct3] = useState(false)
  const [correct4, set_correct4] = useState(false)


  const resetForm = () => {
    if(correct && correct1 && correct2 && correct3 && correct4){
    set_text1("")
    set_text2("")
    set_text3("")
    set_text4("")
    set_text5("")
    setIsFocused(false)
    setIsFocused1(false)
    setIsFocused2(false)
    setIsFocused3(false)
    setIsFocused4(false)
    set_correct(false)
    set_correct1(false)
    set_correct2(false)
    set_correct3(false)
    set_correct4(false)
    }
    
    
    
  };
  
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (correct !== true) {
      setIsFocused(false);
    }

  };
  const change_name = (e) => {
    set_text1(e.target.value)
    const value = e.target.value.trim();
    
    
    const words = value.split(' ');
    const isCorrect = words.length === 2;

    set_correct(isCorrect);

  }



  const handleFocus1 = () => {
    setIsFocused1(true);
  };

  const handleBlur1 = () => {
    if (correct1 !== true) {
      setIsFocused1(false);
    }

  };
  const change_name1 = (e) => {
    set_text2(e.target.value)
    const val1 = e.target.value.trim();
    

    
    const isCorrect1 = (/^\d{10}$/).test(val1) && !isNaN(val1);
    
    set_correct1(isCorrect1);

  }



  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur2 = () => {
    if (correct2 !== true) {
      setIsFocused2(false);
    }

  };
  const change_name2 = (e) => {
    set_text3(e.target.value)
    const val2 = e.target.value.trim();
    

    
    const isCorrect2 = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(val2);
    
    set_correct2(isCorrect2);

  }

  const handleFocus3 = () => {
    setIsFocused3(true);
  };

  const handleBlur3 = () => {
    if (correct3 !== true) {
      setIsFocused3(false);
    }

  };
  const change_name3 = (e) => {
    set_text4(e.target.value)
    const val3 = e.target.value.trim();
    

    
    const isCorrect3 = val3.length>2;
    
    set_correct3(isCorrect3);

  }

  const handleFocus4 = () => {
    setIsFocused4(true);
  };

  const handleBlur4 = () => {
    if (correct4 !== true) {
      setIsFocused4(false);
    }

  };
  const change_name4 = (e) => {
    set_text5(e.target.value)
    const val4 = e.target.value.trim();
    
    
    
    const isCorrect = val4.length >3;

    set_correct4(isCorrect);

  }

  return (
    <div className="contact-outer_container">
      <h1 style={{color:props.switch_modes==="dark"?"":"#484747"}}>Contact <span>Me!</span></h1>
      <div className='contact-inner_container'>

        <form className="input-container">
          <div class="form-group">
            <div className="input-with-icon">
              <input  onFocus={handleFocus} onBlur={handleBlur} value={text1} onChange={change_name} type="text" class="form-control  outline-0" id="input-name" placeholder="Full Name" style={{ color: "white", backgroundColor: props.switch_modes==="dark"?'#151820':"#484747", border: "none" }} />


              {isFocused && (correct ? <i className="fa fa-check-circle"></i> : <i class="fa fa-times-circle fa-shake" style={{ color: "red" }}></i>)}

            </div>

            <div className="input-with-icon">
              <input value={text2}  onFocus={handleFocus1} onBlur={handleBlur1} onChange={change_name1} type="text" class="form-control outline-0" id="input-number" placeholder="Mobile Number " style={{ color: "white", backgroundColor: props.switch_modes==="dark"?'#151820':"#484747", border: "none" }} />
              {isFocused1 && (correct1 ? <i className="fa fa-check-circle"></i> : <i class="fa fa-times-circle fa-shake" style={{ color: "red" }}></i>)}
            </div>

          </div>
          <div class="form-group">
          <div className="input-with-icon">
            <input value={text3} onFocus={handleFocus2} onBlur={handleBlur2} onChange={change_name2} type="text" class="form-control outline-0" id="input-email" placeholder="Email Address" style={{ color: "white", backgroundColor:props.switch_modes==="dark"?'#151820':"#484747", border: "none" }} />
            {isFocused2 && (correct2 ? <i className="fa fa-check-circle"></i> : <i class="fa fa-times-circle fa-shake" style={{ color: "red" }}></i>)}
            </div>
            <div className="input-with-icon">
            <input  value={text4} onFocus={handleFocus3} onBlur={handleBlur3} onChange={change_name3} type="text" class="form-control outline-0" id="input-email_subject" placeholder="Email subject" style={{ color: "white", backgroundColor: props.switch_modes==="dark"?'#151820':"#484747", border: "none" }} />
            {isFocused3 && (correct3 ? <i className="fa fa-check-circle"></i> : <i class="fa fa-times-circle fa-shake" style={{ color: "red" }}></i>)}
            </div>
          </div>

        </form>



        <div className="input-with-icon" id="text-areas">
        <textarea  value={text5} onFocus={handleFocus4} onBlur={handleBlur4} onChange={change_name4}class="form-control" placeholder="Type your message..." id="exampleFormControlTextarea1" rows="3" style={{ backgroundColor: props.switch_modes==="dark"?'#151820':"#484747", border: "none",color:"white" }}></textarea>
        {isFocused4 && (correct4 ? <i className="fa fa-check-circle" id="textarea-icon"></i> : <i class="fa fa-times-circle fa-shake1" style={{ color: "red" }} id="textarea-icon"></i>)}
        </div>
      </div>
      <div>
      <button onClick={resetForm} className='btn'style={{"--shadow":props.switch_modes==="dark"?"#0ef":"#484747",backgroundColor:props.switch_modes==="dark"?"":"#484747",color:props.switch_modes==="dark"?"":"#0ef"}} id="contact-send"><b>Send</b></button>
      </div>
    </div>
  )
}

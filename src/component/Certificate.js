import React from 'react'
import "./css/Certificate.css"
import { useState, useEffect } from 'react'
export default function Certificate(props) {
    
    const [popup1, set_popup1] = useState(false)
    const [popup2, set_popup2] = useState(false)
   
    const [popup4, set_popup4] = useState(false)
    const [popup5, set_popup5] = useState(false)
    const [popup6, set_popup6] = useState(false)
    const [popup7, set_popup7] = useState(false)
    const [rote, set_rote] = useState(false)

    useEffect(() => {
        document.querySelector(".certificate-middle-container").style.filter = popup || popup1 || popup2 || popup3 || popup4 || popup5 || popup6 || popup7 ? "blur(15px)" : "";

    }, [popup, popup1, popup2, popup3, popup4, popup5, popup6, popup7]);

    return (
   
            <div className="certificate-outer-most">
                <ading" style={{color:props.switch_modes==="dark"?"":"#484747"}}>My <span id="span2">Certificates</span></h3>
                <div className='certificate-middle-container'>

                    <
                    <span style={{color:props.switch_modes==="dark"?"":"#484747"}} onClick={() => set_rote(false)} >&#60;</span>
                    </div>

                    <div className="certificate-outer-container">

                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 2 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 2 }} id="certificate-1">
                                    <images/AI_specialist_certificate.png" />
                                    <div className='certificate-layer'>
                                        <h3>AI <span>Specialist </span></h3>
                                        <i onClick={() => set_popup(popup ? false : true)} className='bx bx-link-external'></i>
                                    </div>
                                </div>
                            </div>

                            <div className="back-face">
                                <div className="certificate-inner-container" style={{ "--m": 2 }} id="certificate-1">
                                    <img src="/all_images/Coursera.png" />
                                    <div className='certificate-layer'>
                                        <h3>IBM <span>Coursera </span></h3>
                                        <i onClick={() => set_popup6(popup6 ? false : true)} className='bx bx-link-external'></i>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 4 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 4 }} id="certificate-2">
                                    <img src="/all_images/internship_certificate.png" />
                                    <div className='certificate-layer'>
                                        <h3>Corizo <span>Internship </span></h3>
                                        <i onClick={() => set_popup1(popup1 ? false : true)} className='bx bx-link-external'></i>
                                    </div>
                                </div>
                            </div>

                            <div className="back-face">
                                <div className="certificate-inner-container" style={{ "--m": 2 }} id="certificate-1">
                                    <img src="/all_images/problem_solving.png" />
                                    <div className='certificate-layer'>
                                        <h3>Hackerrank <span>Problem Solving </span></h3>
                                        <i onClick={() => set_popup7(popup7 ? false : true)} className='bx bx-link-external'></i>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 6 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 6 }} id="certificate-3">
                                    <img src="/all_images/NLP_certificate.png" />
                                    <div className='certificate-layer'>
                                        <h3>NLP <span>iNeuron</span></h3>
                                        <i onClick={() => set_popup2(popup2 ? false : true)} className='bx bx-link-external'></i>

                                    </div>
                                </div>
                            </div>

                            <div className="back-face"></div>

                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 8 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 8 }} id="certificate-4">
                                    <img src="/all_images/python_basic certificate.png" />
                                    <div className='certificate-layer'>
                                        <h3>Hackerrank <span>Python</span></h3>
                                        <i onClick={() => set_popup3(popup3 ? false : true)} className='bx bx-link-external'></i>

                                    </div>
                                </div>
                            </div>

                            <div className="back-face"></div>

                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 10 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 10 }} id="certificate-5">
                                    <img src="/all_images/IoT_certificate.png" />
                                    <div className='certificate-layer'>
                                        <h3>Summer <span>School</span></h3>
                                       opup4 ? false : true) }} className='bx bx-link-external'></i>


                                </div>
                            </div>



                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 12 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 12 }} id="certificate-6">
                                    <img src="/all_images/sql_basic certificate.png" />
                                    <div className='certificate-layer'>
                                        <h3>Hackerrank <span>SQL</span></h3>
                                        <i onClick={() => set_popup5(popup5 ? false : true)} className='bx bx-link-external'></i>
                                    </div>

                                </div>
                            </div>

                            <div className="back-face"></div>

                        </div>


                    </div>
                    <div className="next-certificate">
                        
                        <span style={{color:props.switch_modes==="dark"?"":"#484747"}} onClick={() => set_rote(true)} >&#62;</span>
                    </div>
                
                </div>

                
            

            <div className={`popup-image ${(popup ? "active_certificate" : "")}`} style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}} id="popup-image1">
                <div id="span1" onClick={() => {
                    set_popup(popup ? false : true)
                    set_zoom("zoom")
                }}><i className="fa fa-solid fa-circle-xmark"></i></div>
                <img src="/all_images/AI_specialist_certificate.png"  />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>In this certification i have lerned how to work on hardware like nvdia<br />
                        jetson nano kit. to complete this certificate we build an project attendence system<br />
                        using face Recognition and deployed on jetson nono kit. in this i have learned many<br />
                        concepts of machine learning and deep-learning</p>
                    <p><span>Skills</span>: Machine Learning, Deep-learning,Python</p>
                </div>
            </div>

            <div className={`popup-image ${(popup1 ? "active_certificate" : "")}`} id="popup-image2" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup1(popup1 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/internship_certificate.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>As a Machine Learning Intern at Corizo, I gained practical experience in building machine learning models 
                        . Collaborated with a team of experts to develop predictive models and made project like number plate detection
                        and Hand written digit recognition.
                       <br/><br/>
                        In there traning part Developed a strong foundation in machine learning algorithms and techniques 
                        by learning various supervised and unsupervised algorithm like
                        linear regression, logestic regression,Principal component analysis, Desision tree,
                        Random Forest etc.
                         
                          </p>
                    <p><span>Skills</span>: Machine Learning, Python, Logic Bulding</p>
                </div>
            </div>

            <div className={`popup-image ${(popup2 ? "active_certificate" : "")}`} id="popup-image3" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup2(popup2 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/NLP_certificate.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>In this NLP foundation certification course from iNeuron i learned the key concepts and techniques used in NLP 
                        and it give me the basic understanding of how computers can understand, 
                        interpret, and generate human language.<br/><br/>
                        I came to know across various Text preprocessing techniques, such as tokenization and stemming, lemetization
                        and Stop word removel<br/><br/>
                        I was also able to use powerful python libraries like NLTK, Spacy, TextBlob </p>
                    <p><span>Skills</span>: NLP (Natural Language Processing), Python</p>
                </div>
            </div>

            <div className={`popup-image ${(popup3 ? "active_certificate" : "")}`} id="popup-image4" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup3(popup3 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/python_basic certificate.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p> this certificate demonstrated my proficiency in Python programming through successful completion of 
                        coding challenges and assessments. Highlighted strong problem-solving skills, 
                        attention to detail, and a solid understanding of Python programming concepts.<br/><br/>
                        In this i was able to sucesfully solve 3 python releated problem which was based on the concepts
                        of Object oreinted programming.In this i used basics logical concepts of python</p>
                    <p><span>Skills</span>: Python, Object Oriented Programming</p>
                </div>
            </div>

            <div className={`popup-image ${(popup4 ? "active_certificate" : "")}`} id="popup-image5" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup4(popup4 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/IoT_certificate.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>Developed an IoT project using Arduino, showcasing proficiency in hardware and
                         software integration to create a functional device. Demonstrated problem-solving 
                         skills by designing and Highlighted ability to work with sensors, actuators, and microcontrollers to create a working prototype.<br/><br/>
                         i have made project on ardino with my team which uses the sensor to sense wether there is an object at particular
                         distance and gives the beap sound and change color of light </p>
                    <p><span>Skills</span>IoT (Internet of Things), Aurdino</p>
                </div>
            </div>

            <div className={`popup-image ${(popup5 ? "active_certificate" : "")}`} id="popup-image6" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup5(popup5 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/sql_basic certificate.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p> this certificate demonstrate my proficiency in SQL by passing 
                        coding challenges and assessments. I have highlighted strong skills in data manipulation, query
                         optimization, and database design. I have gained hands-on experience in working with SQL to manage and query databases, 
                         including understanding SQL syntax, creating and modifying tables, and writing complex queries. <br/><br/>
                         This certification showcases my skills in database management and query optimization for real-world applications.</p>
                    <p><span>Skills</span>: Machine Learning, Deep learning,Python</p>
                </div>
            </div>

            <div className={`popup-image ${(popup6 ? "active_certificate" : "")}`} id="popup-image7" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup6(popup6 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/Coursera.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>In this certification i have lerned how to work on hardware like nvdia<br />
                        jetson nano kit. to complete this certificate we build an project attendence system<br />
                        using face Recognition and deployed on jetson nono kit. in this i have learned many<br />
                        concepts of machine learning and deep-learning</p>
                    <p><span>Skills</span>: Machine Learning, Deep learning,Python</p>
                </div>
            </div>

            <div className={`popup-image ${(popup7 ? "active_certificate" : "")}`} id="popup-image8" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup7(popup7 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/problem_solving.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>In this certification i have lerned how to work on hardware like nvdia<br />
                        jetson nano kit. to complete this certificate we build an project attendence system<br />
                        using face Recognition and deployed on jetson nono kit. in this i have learned many<br />
                        concepts of machine learning and deep-learning</p>
                    <p><span>Skills</span>: Machine Learning, Deep learning,Python</p>
                </div>
            </div>
            </div>
        </>


    )

}

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './component/Homepage';
import Navebar from './component/Navebar';
import Skills from './component/Skills';
import Certificate from './component/Certificate';
import About from './component/About';
import Particle from './component/Particle';
import Contacts from './component/Contacts';
import Projects from './component/Projects';

function ScrollComponent({ active, children }) {
  return <div style={{ display: active ? 'block' : 'none' }}>{children}</div>;
}

function App() {
  const [switch_modes, set_modes] = useState('dark');
  const [curr_link, change_link] = useState('1');
  const [backgound_nav, set_backgound_nav] = useState('');

  const backgroundColor1 = ['2', '3', '4', '5', '6'].includes(curr_link)
    ? '#1f242f'
    : '#151820';
  document.body.style.backgroundColor = switch_modes === 'dark' ? backgroundColor1 : '#EAEAEA';

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      let activeSection = '1'; // Default active section is the first one

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

       
      });

      change_link(activeSection);
    };

    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Particle switch_modes={switch_modes} set_modes={set_modes} />
      <Navebar
        change_link={change_link}
        switch_modes={switch_modes}
        set_modes={set_modes}
        curr_link={curr_link}
        backgound_nav={backgound_nav}
        set_backgound_nav={set_backgound_nav}
      />

      <section id="section1">
        <ScrollComponent active={curr_link === '1'} className="font-style-class">
          <Homepage switch_modes={switch_modes} set_modes={set_modes} />
        </ScrollComponent>
      </section>

      <section id="section2">
        <ScrollComponent active={curr_link === '2'} className="font-style-class">
          <div className="scroll-component">
         
          <About switch_modes={switch_modes} set_modes={set_modes} />
          </div>
        </ScrollComponent>
      </section>

      <section id="section3">
        <ScrollComponent active={curr_link === '3'} className="font-style-class">
        
        <Projects switch_modes={switch_modes} set_modes={set_modes} />
          
        </ScrollComponent>
      </section>

      <section id="section4" className="font-style-class">
        <ScrollComponent active={curr_link === '4'}>
        
        <Contacts switch_modes={switch_modes} set_modes={set_modes}/>
        </ScrollComponent>
      </section>

      <section id="section5">
        <ScrollComponent active={curr_link === '5'} >
        <Skills switch_modes={switch_modes} set_modes={set_modes} />
        
        </ScrollComponent>
      </section>

      <section id="section6">
        <ScrollComponent active={curr_link === '6'} className="font-style-class">
        <Certificate switch_modes={switch_modes} set_modes={set_modes} />
        
        </ScrollComponent>
      </section>
    </>
  );
}

export default App;

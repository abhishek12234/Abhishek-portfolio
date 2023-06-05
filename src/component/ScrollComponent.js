import React, { useState, useEffect, useRef } from 'react';
import './css/ScrollComponent.css';

const ScrollComponent = ({ targetSection, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="scroll-component">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { className: 'scroll-component-child' })
      )}
    </div>
  );
};

export default ScrollComponent;

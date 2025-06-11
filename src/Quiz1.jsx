import React, { useState } from 'react';

export default function Quiz({ data }) {
 
 
      const [activeIndex, setActiveIndex] = useState(null);
    
      const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    
      return (
        <div className="accordion">
          {data.map((item, index) => (
            <><div
                  key={item.id}
                  className={`accordion-item ${activeIndex === index ? "active" : ""}`}
              >
                  <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                  >
                      <span className="accordion-indicator">
                          {activeIndex === index ? "-" : "+"}
                      </span> <b> 
                      {item.title}    </b>  <br />
                   <br/>
                  </div>
                  {activeIndex === index && (
                      <div className="accordion-content">
                          {item.content}
                      </div>
                  )}
              </div>
              
           

              <br />
               <hr className="custom-hr" />
                            
              <br />
            
                            
              </>
          ))}
        </div>
      );
    };
    
  
    



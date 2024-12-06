import React from 'react';
import { RiLightbulbFlashLine } from "react-icons/ri";
import Link from 'next/link';
import '@/app/styles/portfolio.css'


const WhatIDo = () => {
  const services = [
    {
      title: "Static Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link:"https://milestone-1-2-sage.vercel.app/"
      
    },
    {
      title: "Editable Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link:"https://milestone-4-rosy.vercel.app/"
      
    },
    {
      title: "Dynamic Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link:"https://milestone-3-phi-lovat.vercel.app/"
    },
  {
    title: "Shareable Resume Builder",
    description: "Explore my portfolio of visually compelling and creative design projects.",
    link:"https://milestone-5-tan-ten.vercel.app//"

  },
  
    
   
  ];

  return (
    <section className="whatIDo-container">
      <h1 className="whatIDo-heading">
        What I Do
      </h1>

      <div className="whatIDo-grid">
        {services.map((service, index) => (
          <div key={index} className="whatIDo-card">
            <RiLightbulbFlashLine className='whatIDo-icon' />
            <h2 className='whatIDo-title'>{service.title}</h2>
            <p className='whatIDo-description'>{service.description}</p>
            
            {/* External link ke liye <a> aur internal ke liye <Link> */}
            {service.link.startsWith("http") ? (
              <a href={service.link} target="_blank" rel="noopener noreferrer" className="whatIDo-link">
                View Projects
              </a>
            ) : (
              <Link href={service.link} className="whatIDo-link">
                View Projects
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;

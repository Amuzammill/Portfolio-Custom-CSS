import React from 'react';
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import '@/app/styles/about.css';
import Image from 'next/image';
import image from '@/app/public/images/pic.jpeg';

function About() {
  return (
    <section className="about-container">
      <h1 className="about-heading">
        About me
      </h1>

      <div className="about-grid">
        {/* Left side (Profile Details) */}
        <div className="profile-details">
          <div className="details-column">
            <div className="details-item">
              <AiOutlineGift className="icon" />
              Birthday : 22-08-2000
            </div>
            <div className="details-item">
              <FiBookOpen className="icon" />
              Study : Kent collage of Karachi
            </div>
            <div className="details-item">
              <BsGlobe2 className="icon" />
              Website : XYZ
            </div>
            <div className="details-item">
              <TbPacman className="icon" />
              Interest : Cricket
            </div>
            <div className="details-item">
              <IoLocationOutline className="icon" />
              Location : Quaidabad landhi karachi
            </div>
          </div>

          {/* Divider
          <div className="divider">
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
          </div>

          <div className="details-values">
            <div>17-02-2006</div>
            <div>University of Karachi</div>
            <div>xyz</div>
            <div>Reading, Cricket</div>
            <div>Quaidabad Landhi Karachi</div>
           </div>*/}
        </div> 

        {/* Right side (Image) */}
        <div className="about-images">
          <Image 
            src={image}  
            alt="Description of images"
            width={400}
            height={200}
          />
        </div>

        {/* Description and Call to Action */}
        <div className="description">
          <h2 className="description-heading">
            I am Muzamil Ahmed, and I am a frontend developer.
          </h2>
          <p className="description-text">
            Hi! My name is Muzamil Ahmed. I am a passionate and dedicated web developer, eager to grow and gain experience.
          </p>
          <button type="submit" className="hire-button">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
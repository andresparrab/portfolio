///* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./aboutView.css";
import Skills from "../components/Skills/Skills";
import profile from "../images/profile02.jpg";
//import { isImportOrExportSpecifier } from "typescript";
const aboutView = () => {
  return (
    <div className='content-wrapper'>
      {/*<!-- This is where everythin below the navbar is going to be-->*/}
      <div className='two-column-wrapper'>
        <div className='profile-image-wrapper'>
          <img src={profile} alt='imgd' />
        </div>

        <div className='profile-content-wrapper'>
          <h1>Hi, thanks for visiting!</h1>
          <p>
            "Programming isn't about what you know; it's about what you can figure out.” - Chris Pine Self-taught software developer.
            Passionate about everything in technology, programming, personal development and cooking.
          </p>
          <div>
            <Skills></Skills>
          </div>
        </div>
      </div>
    </div>
  );
};
export default aboutView;

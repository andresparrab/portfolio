import React from "react";
import "./Skills.css";
import Html5 from "../../images/skills/html.png";
import Css from "../../images/skills/css.png";
import javas from "../../images/skills/javascript.png";
import react from "../../images/skills/react.png";
import express from "../../images/skills/express.png";
import mongodb from "../../images/skills/mongodb.png";
import firebase from "../../images/skills/firebase.png";
import python from "../../images/skills/python.png";
import sql from "../../images/skills/sql.png";
import docker from "../../images/skills/docker.png";
import csharp from "../../images/skills/csharp.png";
import dotnet from "../../images/skills/dotnetCore.png";
import typescript from "../../images/skills/typescript.png";
import heroku from "../../images/skills/heroku.png";

const Skills = () => {
  return (
    <div className="skillCard">
      <h1>Skills</h1>
      <div className="topBar"></div>
      <div className="skills">
        <div className="cards">
          <h3>HTML5</h3>
          <img src={Html5} />
        </div>
        <div className="cards">
          <h3>CSS</h3>
          <img src={Css} />
        </div>
        <div className="cards">
          <h3>Javascript</h3>
          <img src={javas} />
        </div>
        <div className="cards">
          <h3>Typescript</h3>
          <img src={typescript} />
        </div>
        <div className="cards">
          <h3>React</h3>
          <img src={react} />
        </div>
        <div className="cards">
          <h3>Express</h3>
          <img src={express} />
        </div>

        <div className="cards">
          <h3>Mongodb</h3>
          <img src={mongodb} />
        </div>
        <div className="cards">
          <h3>Firebase</h3>
          <img src={firebase} />
        </div>
        <div className="cards">
          <h3>Heroku</h3>
          <img src={heroku} />
        </div>
        <div className="cards">
          <h3>Python</h3>
          <img src={python} />
        </div>
        <div className="cards">
          <h3>SQL</h3>
          <img src={sql} />
        </div>

        <div className="cards">
          <h3>C#</h3>
          <img src={csharp} />
        </div>
        <div className="cards">
          <h3>.Net core</h3>
          <img src={dotnet} />
        </div>
        <div className="cards">
          <h3>Docker</h3>
          <img src={docker} />
        </div>
      </div>

      <div className="Languages">
        <h1>Languages</h1>
        <li>
          <h3>Spanish</h3>
          <span className="bar">
            <span className="spanish"></span>{" "}
          </span>
        </li>

        <li>
          <h3>Swedish</h3>
          <span className="bar">
            {" "}
            <span className="swedish"></span>
          </span>
        </li>

        <li>
          <h3>English</h3>
          <span className="bar">
            <span className="english"></span>{" "}
          </span>
        </li>
      </div>
    </div>
  );
};
export default Skills;

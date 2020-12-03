import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skills">
        <h1>Skills</h1>
        <li>
          <h3>HTML5</h3>
          <span className="bar">
            <span className="html"></span>{" "}
          </span>
        </li>

        <li>
          <h3>CSS</h3>
          <span className="bar">
            {" "}
            <span className="css"></span>
          </span>
        </li>

        <li>
          <h3>Javascript</h3>
          <span className="bar">
            <span className="javasc"></span>{" "}
          </span>
        </li>

        <li>
          <h3>React</h3>
          <span className="bar">
            {" "}
            <span className="react"></span>
          </span>
        </li>

        <li>
          <h3>Express</h3>
          <span className="bar">
            <span className="express"></span>{" "}
          </span>
        </li>

        <li>
          <h3>Mongodb</h3>
          <span className="bar">
            <span className="express"></span>{" "}
          </span>
        </li>

        <li>
          <h3>Firebase</h3>
          <span className="bar">
            <span className="express"></span>{" "}
          </span>
        </li>

        <li>
          <h3>Python</h3>
          <span className="bar">
            <span className="python"></span>{" "}
          </span>
        </li>
        <li>
          <h3>SQL</h3>
          <span className="bar">
            <span className="sql"></span>{" "}
          </span>
        </li>
        <li>
          <h3>Docker</h3>
          <span className="bar">
            <span className="docker"></span>{" "}
          </span>
        </li>
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

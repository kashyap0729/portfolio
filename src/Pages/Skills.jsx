import React from 'react';
import html from "../assets/icons/html-5.png";
import js from "../assets/icons/js.png";
import java from "../assets/icons/java.png";
import github from "../assets/icons/github.png";
import illustrator from "../assets/icons/illustrator.png";
import leaf from "../assets/icons/leaf.png";
import Marklogic from "../assets/icons/Marklogic.jpg";
import node from "../assets/icons/node-js.png";
import reactpic from "../assets/icons/react.png";
import unity from "../assets/icons/unity.png";
import c from "../assets/icons/letter-c.png";
import xml from "../assets/icons/xml.png";
import sql from "../assets/icons/sql-server.png";

const Skills = () => {
  const skills = [
    { name: 'Marklogic', src: Marklogic },
    { name: 'HTML', src: html },
    { name: 'JavaScript', src: js },
    { name: 'Java', src: java },
    { name: 'GitHub', src: github },
    { name: 'Illustrator', src: illustrator },
    { name: 'Node.js', src: node },
    { name: 'React', src: reactpic },
    { name: 'Unity', src: unity },
    { name: 'XML', src: xml },
    { name: 'SQL', src: sql },
    { name: 'Mongo DB', src: leaf },

  ];

  return (
    <div className="flex-container neo-brutalism-white py-4 px-8 text-black mx-5 info-Box" >
        <h1>Skills</h1>

      <div className="skills-grid">
            {skills.map((skill, index) => (
                <div className="skill" key={index}>
                    <img src={skill.src} alt={skill.name} />
                    <span className="skill-name">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Skills;

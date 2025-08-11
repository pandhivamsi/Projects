import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiAxios,SiMysql, SiSahibinden   } from 'react-icons/si';
import './Skills.css';

export default function Skills() {
  const skills = [
    { name: 'Core Java', icon: <FaJava size={40} /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} /> },
    { name: 'JavaScript(ES6)', icon: <SiJavascript size={40} /> },
    { name: 'React.js', icon: <FaReact size={40} /> },
    { name: 'Redux', icon: <SiRedux size={40} /> },
    { name: 'Axios', icon: <SiAxios size={40} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} /> },
    { name: 'MySQL', icon: <SiMysql  size={40} /> },
    { name: 'Sahi', icon: <SiSahibinden   size={40} /> }

  ];

  return (
    <div id="skills" className="container py-5">
      <h2 className="section-heading">Skills</h2>
      <div className="row g-4">
        {skills.map((skill, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className="card h-100 text-center p-3 skill-card">
              <div className="mb-2">{skill.icon}</div>
              <h5>{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
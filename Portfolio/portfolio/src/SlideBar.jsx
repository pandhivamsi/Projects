import React from 'react';
import { NavLink } from 'react-router-dom';
import './SlideBar.css';
import profilePic from './assets/profile.JPG';

// Import icons
import { FaHome, FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

export default function SlideBar() {
  return (
    <aside className="sidebar">
      <img src={profilePic} alt="Profile" />
      <nav>
        <NavLink to="/" end><FaHome /> Home</NavLink>
        <NavLink to="/about"><FaUser /> About</NavLink>
        <NavLink to="/skills"><FaTools /> Skills</NavLink>
        <NavLink to="/experience"><FaBriefcase /> Experience</NavLink>
        <NavLink to="/projects"><FaProjectDiagram /> Projects</NavLink>
        <NavLink to="/education"><FaGraduationCap /> Education</NavLink>
        <NavLink to="/contact"><FaEnvelope /> Contact</NavLink>
      </nav>
    </aside>
  );
}

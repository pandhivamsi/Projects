import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  return (
    <div id="projects" className="container py-5">
      <h2 className="section-heading">Projects</h2>
      <div className="card project-card p-4">
        <FaProjectDiagram size={30} className="mb-3 text-primary" />
        <h5>EPIC E-Commerce</h5>
        <p>Developed and integrated a React.js front-end with Spring Boot back-end, implementing JWT-based authentication for secure login and role-based access for Admin and User modules. Enabled payment gateway integration and invoice download functionality.</p>
      </div>
    </div>
  );
}
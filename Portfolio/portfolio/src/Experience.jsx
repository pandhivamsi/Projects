import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

export default function Experience() {
  const experiences = [
    { 
      title: 'Trainee Engineer - DIGITE INFOTECH PVT LTD', 
      period: 'July 2023 – Jan 2024', 
      project: 'SwiftKanban', 
      description: 'SwiftKanban is a comprehensive project management tool designed to facilitate agile and lean project management practices. It provides an intuitive interface for managing tasks, workflows, and project timelines, allowing teams to visualize work, collaborate effectively, and improve productivity.'
    },
    { 
      title: 'Full Stack Developer Intern - DIGITE INFOTECH PVT LTD', 
      period: 'Jan 2023 – June 2023', 
      project: 'Basic CRUD operations', 
      description: 'Worked on developing and maintaining web applications using modern JavaScript frameworks, RESTful APIs, and database technologies. Assisted in designing responsive user interfaces and implementing backend functionalities to support business requirements.'
    }
  ];

  return (
    <div id="experience" className="container py-5">
      <h2 className="section-heading">Professional Experience</h2>
      <div className="row g-4">
        {experiences.map((exp, idx) => (
          <div className="col-md-6" key={idx}>
            <div className="card h-100 p-3 exp-card">
              <FaBriefcase size={30} className="mb-3 text-primary" />
              <h5>{exp.title}</h5>
              <p className="text-muted">{exp.period}</p>
              {exp.project && <p><strong>Project:</strong> {exp.project}</p>}
              {exp.description && <p>{exp.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

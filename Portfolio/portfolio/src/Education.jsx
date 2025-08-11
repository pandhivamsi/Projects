import React from 'react';
import './Education.css';

export default function Education() {
  const educationData = [
    {
      course: 'B.E-CSE',
      institution: 'Mahendra Engineering College, Namakkal, Tamil Nadu',
      board: 'Anna University, Chennai',
      year: '2019-2023',
      score: '8.8 CGPA'
    },
    {
      course: '12th',
      institution: 'Narayana Jr College, Nellore, Andhra Pradesh',
      board: 'BIEAP',
      year: '2017-2019',
      score: '9.6 CGPA'
    },
    {
      course: '10th',
      institution: 'St Mary’s Public High School',
      board: 'ICSE',
      year: '2016-2017',
      score: '509/600'
    }
  ];

  return (
    <div className="container py-5" id="education">
      <h2 className="section-heading">Education</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped edu-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Institution</th>
              <th>University / Board</th>
              <th>Year of Passing</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <tr key={index}>
                <td>{edu.course}</td>
                <td>{edu.institution}</td>
                <td>{edu.board}</td>
                <td>{edu.year}</td>
                <td>{edu.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

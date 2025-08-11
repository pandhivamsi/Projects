import React from 'react';
import './Home.css';
import img from './assets/profile.JPG'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    let navigate  = useNavigate()

    const navigateToAbout = (e)=>{
      e.preventDefault()
        navigate('/about')
    }
  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <div className="hero-content">
        <img src={img} alt="" className="hero-image"/>
        <h1 className="display-3">Pandhi Vamsi</h1>
        <p className="lead">Software Engineer | Full Stack Developer</p>
        <a href="#" onClick ={navigateToAbout} className="btn btn-primary btn-lg mt-3">Learn More About Me</a>
      </div>
    </div>
  );
}
import React from "react";

export default function About() {
    return (
    <div className="about-page">
      <h2 className="page">About Me</h2>
      <div className="about">
        
        <p>Download my resume below:</p>
        <a href="/resume.pdf" download="Sai_Resume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  );
  

}

import React from "react";


export default function Resume() {
  return (
    <div className="resume-page">
      <h2 className="page">My Resume</h2>
      <div className="about">
        <h2>About Me</h2>
        <p>Download my resume below:</p>
        <a href="/resume.pdf" download="Sai_Resume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  );

}

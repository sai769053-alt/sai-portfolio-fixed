import React, { useState } from 'react';
export default function Contact() {
    
   <h2 className="page">Contact Me</h2>;
   <h2>Contact</h2>


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add logic here to send the data, e.g., to an API
    alert(`Form submitted with:
    Name: ${formData.name}
    Email: ${formData.email}
    Message: ${formData.message}`);
    // Clear the form after submission
    setFormData({
      name:    '',
      email:   '',
      message:    ''
    });
  };

  return (
    <form onSubmit={handleSubmit} align="center">
        <h2>Contact Me</h2>
      <div align="center">
        <label htmlFor="name"><b>Name:</b></label><br></br>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div><br></br>
      <div align="center">
        <label htmlFor="email"><b>Email:</b></label><br></br>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div><br></br>
      <div align="center">
        <label htmlFor="message"><b>Message:</b></label><br></br>
        <textarea
          id="message"
          name="message"
          rows="5" // You can adjust the number of rows
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" ><b>Submit</b></button>
    </form>
  );
}

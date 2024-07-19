import React, { useState } from "react";

export const ProjectRequestForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Ask for Project</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Company Name:</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>
          <div>
            <label>Project:</label>
            <select name="project" value={formData.project} onChange={handleChange} required>
              <option value="" disabled>Select a project</option>
              <option value="Microsoft Entra">Microsoft Entra</option>
              <option value="Intune">Intune</option>
              <option value="Exchange Online">Exchange Online</option>
              <option value="On-Prem Migration">On-Prem Migration</option>
              <option value="Teams Telefonie">Teams Telefonie</option>
            </select>
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

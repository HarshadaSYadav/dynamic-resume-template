import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  });
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [projects, setProjects] = useState([]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleAddItem = (setter) => {
    setter((prev) => [...prev, {}]);
  };

  const handleRemoveItem = (index, setter) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  const handleItemChange = (index, e, setter, items) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setter(updatedItems);
  };

  return (
    <div className="app">
      <h1 className="title">Dynamic Resume Builder</h1>
      <div className="container">
        <div className="form-section">
          <div className="section">
            <h2>Personal Information</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={personalInfo.fullName}
              onChange={handlePersonalInfoChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={personalInfo.email}
              onChange={handlePersonalInfoChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={personalInfo.phone}
              onChange={handlePersonalInfoChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={personalInfo.location}
              onChange={handlePersonalInfoChange}
            />
            <textarea
              name="summary"
              placeholder="Write a brief professional summary..."
              value={personalInfo.summary}
              onChange={handlePersonalInfoChange}
            ></textarea>
          </div>

          <div className="section">
            <h2>Work Experience</h2>
            {workExperience.map((exp, index) => (
              <div key={index} className="item">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={exp.companyName || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setWorkExperience, workExperience)
                  }
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={exp.position || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setWorkExperience, workExperience)
                  }
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={exp.duration || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setWorkExperience, workExperience)
                  }
                />
                <textarea
                  name="description"
                  placeholder="Description (one point per line)"
                  value={exp.description || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setWorkExperience, workExperience)
                  }
                ></textarea>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(index, setWorkExperience)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="add-btn"
              onClick={() => handleAddItem(setWorkExperience)}
            >
              Add Experience
            </button>
          </div>

          <div className="section">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="item">
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution"
                  value={edu.institution || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setEducation, education)
                  }
                />
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setEducation, education)
                  }
                />
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={edu.year || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setEducation, education)
                  }
                />
                <input
                  type="text"
                  name="gpa"
                  placeholder="GPA"
                  value={edu.gpa || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setEducation, education)
                  }
                />
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(index, setEducation)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="add-btn"
              onClick={() => handleAddItem(setEducation)}
            >
              Add Education
            </button>
          </div>

          <div className="section">
            <h2>Certifications</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="item">
                <input
                  type="text"
                  name="certificationName"
                  placeholder="Certification Name"
                  value={cert.certificationName || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setCertifications, certifications)
                  }
                />
                <input
                  type="text"
                  name="issuingOrganization"
                  placeholder="Issuing Organization"
                  value={cert.issuingOrganization || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setCertifications, certifications)
                  }
                />
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={cert.year || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setCertifications, certifications)
                  }
                />
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(index, setCertifications)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="add-btn"
              onClick={() => handleAddItem(setCertifications)}
            >
              Add Certification
            </button>
          </div>

          <div className="section">
            <h2>Projects</h2>
            {projects.map((proj, index) => (
              <div key={index} className="item">
                <input
                  type="text"
                  name="projectName"
                  placeholder="Project Name"
                  value={proj.projectName || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setProjects, projects)
                  }
                />
                <input
                  type="text"
                  name="technologies"
                  placeholder="Technologies Used"
                  value={proj.technologies || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setProjects, projects)
                  }
                />
                <textarea
                  name="projectDescription"
                  placeholder="Project Description (one point per line)"
                  value={proj.projectDescription || ""}
                  onChange={(e) =>
                    handleItemChange(index, e, setProjects, projects)
                  }
                ></textarea>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(index, setProjects)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="add-btn"
              onClick={() => handleAddItem(setProjects)}
            >
              Add Project
            </button>
          </div>
        </div>

        <div className="preview-section">
          <h2></h2>
          <div className="resume">
            <h1>{personalInfo.fullName}</h1>
            <div className="contact-info">
              <p><strong>Email:</strong> {personalInfo.email}</p>
              <p><strong>Phone:</strong> {personalInfo.phone}</p>
              <p><strong>Location:</strong> {personalInfo.location}</p>
            </div>

            <h2>Professional Summary</h2>
            <p>{personalInfo.summary}</p>

            <h2>Work Experience</h2>
{workExperience.map((exp, index) => (
  <div key={index} className="work-experience-item">
    <p>
      <strong>{exp.companyName}</strong> | {exp.position} | {exp.duration}
    </p>
    {exp.description && (
      <ul>
        {exp.description
          .split("\n")
          .filter((line) => line.trim())
          .map((line, i) => (
            <li key={i}>{line}</li>
          ))}
      </ul>
    )}
  </div>
))}

<h2>Education</h2>
{education.map((edu, index) => (
  <div key={index} className="education-item">
    <p>
      <strong>{edu.institution}</strong> | {edu.degree} | {edu.year} | GPA: {edu.gpa}
    </p>
  </div>
))}

<h2>Certifications</h2>
{certifications.map((cert, index) => (
  <div key={index} className="certification-item">
    <p>
      <strong>{cert.certificationName}</strong> | {cert.issuingOrganization} | {cert.year}
    </p>
  </div>
))}

<h2>Projects</h2>
{projects.map((proj, index) => (
  <div key={index} className="project-item">
    <p>
      <strong>{proj.projectName}</strong> | {proj.technologies}
    </p>
    {proj.projectDescription && (
      <ul>
        {proj.projectDescription
          .split("\n")
          .filter((line) => line.trim())
          .map((line, i) => (
            <li key={i}>{line}</li>
          ))}
      </ul>
    )}
  </div>
))}

            <div className="footer">
              <p>Generated on: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <button className="print-btn" onClick={() => window.print()}>Print Resume</button>
        </div>
      </div>
    </div>
  );
};

export default App;

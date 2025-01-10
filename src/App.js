import React, { useState } from "react";
import "./App.css";

function App() {
  // State for profile data
  const [profile, setProfile] = useState({
    name: "Jonathan Patterson",
    title: "Art Director",
    picture: "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
  });

  // State for contact info
  const [contactInfo, setContactInfo] = useState([
    { label: "Phone", value: "+123-456-7890" },
    { label: "Email", value: "hello@reallygreatsite.com" },
    { label: "Address", value: "123 Anywhere St., Any City" },
    { label: "Website", value: "http://reallygreatsite.com" },
  ]);

  // State for skills
  const [skills, setSkills] = useState([
    "Management Skills",
    "Creativity",
    "Digital Marketing",
    "Negotiation",
    "Critical Thinking",
    "Leadership",
  ]);

  // State for languages
  const [languages, setLanguages] = useState([
    "English",
    "German (basic)",
    "Spanish (basic)",
  ]);

  // State for profile info
  const [profileInfo, setProfileInfo] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation."
  );

  // State for experience
  const [experience, setExperience] = useState([
    {
      title: "Senior Graphic Designer",
      company: "Studio Showcase",
      dates: "2020 - 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Senior Graphic Designer",
      company: "Innode Company",
      dates: "2018 - 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Senior Graphic Designer",
      company: "Heittson and Partners",
      dates: "2015 - 2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  // State for education
  const [education, setEducation] = useState([
    {
      degree: "Bachelor of Design",
      university: "Wardrier University",
      dates: "2014 - 2017",
      description: "Graduated in Web Designing",
    },
    {
      degree: "Bachelor of Design",
      university: "Wardrier University",
      dates: "2012 - 2015",
      description: "Graduated in Web Designing",
    },
  ]);

  // State for achievements
  const [achievements, setAchievements] = useState([
    "2015 - 2020: Managed five major projects",
    "2013 - 2015: Increased project completion rates by 20%",
  ]);

  // State for profile photo editing
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile({ ...profile, picture: reader.result });
        setIsEditingPhoto(false); // Hide the file input after selecting a photo
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle profile changes
  const handleProfileChange = (e, field) => {
    setProfile({ ...profile, [field]: e.target.textContent });
  };

  // Handle contact info changes
  const handleContactInfoChange = (index, e) => {
    const newContactInfo = [...contactInfo];
    newContactInfo[index].value = e.target.textContent;
    setContactInfo(newContactInfo);
  };

  // Handle skills changes
  const handleSkillsChange = (index, e) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.textContent;
    setSkills(newSkills);
  };

  // Handle languages changes
const handleLanguagesChange = (index, e) => {
    const newLanguages = [...languages];
    newLanguages[index] = e.target.textContent;
    setLanguages(newLanguages);
  };

  // Handle profile info change
  const handleProfileInfoChange = (e) => {
    setProfileInfo(e.target.textContent);
  };

  // Handle experience changes
  const handleExperienceChange = (index, field, e) => {
    const newExperience = [...experience];
    newExperience[index][field] = e.target.textContent;
    setExperience(newExperience);
  };

  // Handle education changes
  const handleEducationChange = (index, field, e) => {
    const newEducation = [...education];
    newEducation[index][field] = e.target.textContent;
    setEducation(newEducation);
  };

  // Handle achievements changes
  const handleAchievementsChange = (index, e) => {
    const newAchievements = [...achievements];
    newAchievements[index] = e.target.textContent;
    setAchievements(newAchievements);
  };

  return (
    <div className="app-container">
      <div className="resume-container">
        {/* Left Column */}
        <div className="left-column">
          <div className="profile-picture" onClick={() => setIsEditingPhoto(true)}>
            {isEditingPhoto ? (
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                style={{ display: 'block' }}
              />
            ) : (
              <img src={profile.picture} alt={profile.name} />
            )}
          </div>
          <h1
            contentEditable
            onBlur={(e) => handleProfileChange(e, 'name')}
            suppressContentEditableWarning={true}
          >
            {profile.name}
          </h1>
          <h2
            contentEditable
            onBlur={(e) => handleProfileChange(e, 'title')}
            suppressContentEditableWarning={true}
          >
            {profile.title}
          </h2>
          
          <div className="section">
            <h3>Contact</h3>
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <div key={index}>
                  <span>{item.label}: </span>
                  <p
                    contentEditable
                    onBlur={(e) => handleContactInfoChange(index, e)}
                    suppressContentEditableWarning={true}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li
                  key={index}
                  contentEditable
                  onBlur={(e) => handleSkillsChange(index, e)}
                  suppressContentEditableWarning={true}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>Languages</h3>
            <ul>
              {languages.map((language, index) => (
                <li
                  key={index}
                  contentEditable
                  onBlur={(e) => handleLanguagesChange(index, e)}
                  suppressContentEditableWarning={true}
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="section">
            <h3>Profile Info</h3>
            <p
              contentEditable
              onBlur={handleProfileInfoChange}
              suppressContentEditableWarning={true}
            >
              {profileInfo}
            </p>
          </div>

          <div className="section">
            <h3>Experience</h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <div className="experience-item" key={index}>
                  <div className="circle"></div>
                  <div>
                    <h4
                      contentEditable
                      onBlur={(e) => handleExperienceChange(index, 'title', e)}
                      suppressContentEditableWarning={true}
                    >
                      {item.title}
                    </h4>
                    <span
                      contentEditable
                      onBlur={(e) => handleExperienceChange(index, 'company', e)}
                      suppressContentEditableWarning={true}
                    >
                      {item.company} | {item.dates}
                    </span>
                    <p
                      contentEditable
                      onBlur={(e) => handleExperienceChange(index, 'description', e)}
                      suppressContentEditableWarning={true}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>Education</h3>
            <div className="education-item">
              {education.map((item, index) => (
                <div key={index}>
                  <h4
                    contentEditable
                    onBlur={(e) => handleEducationChange(index, 'degree', e)}
                    suppressContentEditableWarning={true}
                  >
                    {item.degree}
                  </h4>
                  <span
                    contentEditable
                    onBlur={(e) => handleEducationChange(index, 'university', e)}
                    suppressContentEditableWarning={true}
                  >
                    {item.university} | {item.dates}
                  </span>
                  <p
                    contentEditable
                    onBlur={(e) => handleEducationChange(index, 'description', e)}
                    suppressContentEditableWarning={true}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>Achievements</h3>
            <ul>
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  contentEditable
                  onBlur={(e) => handleAchievementsChange(index, e)}
                  suppressContentEditableWarning={true}
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
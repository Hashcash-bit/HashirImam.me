import React, { useState } from "react";
import styled from "styled-components";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    gallery: ["image1.jpg", "image2.jpg", "image3.jpg"],
    tools: [
      {
        name: "Tool 1",
        icon: "tool1.png",
      },
      {
        name: "Tool 2",
        icon: "tool2.png",
      },
      {
        name: "Tool 2",
        icon: "tool2.png",
      },
      {
        name: "Tool 2",
        icon: "tool2.png",
      },
      {
        name: "Tool 2",
        icon: "tool2.png",
      },
      {
        name: "Tool 2",
        icon: "tool2.png",
      },
      {
        name: "Tool 2",
        icon: "tool2.png",
      },
      {
        name: "Tool 2",
        icon: "tool2.png",
      },
      // More tools
    ],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gallery: ["image4.jpg", "image5.jpg", "image6.jpg"],
    tools: ["React", "Redux", "Firebase"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gallery: ["image7.jpg", "image8.jpg", "image9.jpg"],
    tools: ["Node.js", "Express", "MongoDB"],
  },
];

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const ProjectCard = styled.div`
  width: 300px;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c00;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 600px;
  width: 90%;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .gallery {
    display: flex;
    overflow-x: scroll;
    gap: 10px;
    margin-bottom: 20px;
  }

  .gallery img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }

  .tools {
    margin-top: 20px;
    font-weight: bold;
    overflow-x: scroll;
    white-space: nowrap;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 10px;
    list-style-type: none;
    justify-content: flex-start;
    overflow-x: auto;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;
    min-width: 80px;
  }

  li img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  li span {
    font-size: 12px;
  }
`;

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <ProjectsContainer>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectsContainer>

      {selectedProject && (
        <PopupContainer>
          <PopupContent>
            <h2>{selectedProject.title}</h2>
            <div className="gallery">
              {selectedProject.gallery.map((image) => (
                <img key={image} src={image} alt={selectedProject.title} />
              ))}
            </div>
            <div className="tools">
              <h3>Tools Used</h3>
              <ul>
                {selectedProject.tools.map((tool) => (
                  <li key={tool.name}>
                    <img src={tool.icon} alt={tool.name} />
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={handleClosePopup}>Close</button>
          </PopupContent>
        </PopupContainer>
      )}
    </div>
  );
};

export default ProjectPage;

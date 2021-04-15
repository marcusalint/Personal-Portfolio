import React, {useState} from 'react';
import './ProjectItems.scss';
import Modal from 'react-modal';
import {Grid} from '@material-ui/core';

 const projects = [
  {
    id: '1',
    name: "ReLeaf",
    image: "https://i.imgur.com/l00Hbky.png",
    description: "Releaf is a crowdfunding single page web platform for natural disaster victims. Users are able to create a campaign or search and donate to those in need.",
    githubUrl: 'https://github.com/marcusalint/ReLeaf'
    },
    {
    id: '2',
    name: "Mapper",
    image: "https://i.imgur.com/gpZt2Hf.png",
    description: "Mapper is a web app that utilizes the Google Maps Api to allow users to create and save maps with custom markers, each marker having its own title and description. Users can favourite their own or other user generated maps as well contributing to other user’s maps.",
    githubUrl: 'https://github.com/marcusalint/Mapper'
  },
  {
    id: '3',
    name: "Scheduler",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Regular%20View%20of%20Appointments.png",
    description: "Web application utilizing React built-in and custom hooks that allows users to add, edit and delete appointments.",
    githubUrl: 'https://github.com/marcusalint/scheduler'
  },
  {
    id: '4',
    name: "Jungle Rails",
    image: "https://raw.githubusercontent.com/marcusalint/jungle-rails/master/docs/front-page.png",
    description: "A mini e-commerce application built with Rails 4.2.",
    githubUrl: 'https://github.com/marcusalint/jungle-rails'
  },
  {
    id: '5',
    name: "Tweeter",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Form%20Validation%20and%20Interview%20Cancellation.png",
    description: "Single page Twitter clone application",
    githubUrl: 'https://github.com/marcusalint/tweeter'
  },
  {
    id: '6',
    name: "TinyApp",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Book%20Interview.png",
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    githubUrl: 'https://github.com/marcusalint/tinyapp'
  },
   
]

Modal.setAppElement('#root')

const ProjectItems = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const expandModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
}

const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
}

 

return (
  <Grid container
    direction="row"
    className="Project--Items" 
    xs={3} 
    lg={9}
    // justify="center"
    // alignItems="center"
    >
    {projects.map((project) => (
      <div key={project.id}className="Project--Card">
        <img src={project.image} className="Item--Main--Image"/>
        <div className="Card--Text">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <button id="View--More--Button" onClick={() => expandModal(project)}>View More</button>
      </div>
    ))}
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
    style={
      {
        overlay: {
          backgroundColor: 'rgba(66, 66, 66, 0.95)',
          backdropFilter: 'blur(4px)'
        },
        content: {
          borderColor: '#212121',
          display: 'flex',
          paddingTop: '2em',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#eee',
          backgroundColor: '#212121',
          borderRadius: '10px',
          top: '140px',
          left: '100px',
          right: '100px',
          bottom: '140px',
        }
      }
    }
    >
      <img className="Modal--Main--Image"src={selectedProject && selectedProject.image} />
      <h2>{selectedProject && selectedProject.name}</h2>
        <p>{selectedProject && selectedProject.description}</p>
        <div>
          <a href={selectedProject && selectedProject.githubUrl}><button className="View--Code--Button">View Code</button></a>
          <button className="Cancel--Preview--Button" onClick={closeModal}>Close</button>
        </div>
    </Modal>
  </Grid>
);
}

export default ProjectItems
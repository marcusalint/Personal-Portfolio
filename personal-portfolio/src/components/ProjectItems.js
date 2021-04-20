import React, {useState, useEffect} from 'react';
import './ProjectItems.scss';
import Modal from 'react-modal';
import {Grid} from '@material-ui/core';
// // import {Carousel} from 'react-bootstrap/Carousel';
// import { useSpringCarousel } from 'react-spring-carousel-js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel, } from 'react-responsive-carousel';
import {useMediaQuery} from './Hooks/useMediaQuery';



 const projects = [
  {
    id: '1',
    name: "ReLeaf",
    image: "https://i.imgur.com/l00Hbky.png",
    description: "Releaf is a crowdfunding single page web platform for natural disaster victims. Users are able to create a campaign or search and donate to those in need.",
    githubUrl: 'https://github.com/marcusalint/ReLeaf',
    technologies: "React, PostgresQL, Express, NodeJS, Material-UI, Stripe, HTMl, SASS"
    },
    {
    id: '2',
    name: "Mapper",
    image: "https://i.imgur.com/gpZt2Hf.png",
    description: "Mapper is a web app that utilizes the Google Maps Api to allow users to create and save maps with custom markers, each marker having its own title and description. Users can favourite their own or other user generated maps as well contributing to other user’s maps.",
    githubUrl: 'https://github.com/marcusalint/Mapper',
    technologies: "Express, NodeJS, PostgresQL, Jquery, Bootstrap and SASS"
  },
  {
    id: '3',
    name: "Scheduler",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Regular%20View%20of%20Appointments.png",
    description: "Web application utilizing React built-in and custom hooks that allows users to add, edit and delete appointments.",
    githubUrl: 'https://github.com/marcusalint/scheduler',
    technologies: "React, Express, Node.js, PostgreSQL, React, JSX, HTML, SASS and Javascript,"
  },
  {
    id: '4',
    name: "Jungle Rails",
    image: "https://raw.githubusercontent.com/marcusalint/jungle-rails/master/docs/front-page.png",
    description: "A mini e-commerce application built with Rails 4.2.",
    githubUrl: 'https://github.com/marcusalint/jungle-rails',
    technologies: "Rails, Ruby, RSpec, PolterGeist, Bootstrap"
  },
  {
    id: '5',
    name: "Tweeter",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Form%20Validation%20and%20Interview%20Cancellation.png",
    description: "Single page Twitter clone application",
    githubUrl: 'https://github.com/marcusalint/tweeter',
    technologies: "HTML, CSS, Javascript, jQuery, AJAX"
  },
  {
    id: '6',
    name: "TinyApp",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Book%20Interview.png",
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    githubUrl: 'https://github.com/marcusalint/tinyapp',
    technologies: "Express, Node.js, EJS, Javascript"
  },
   
]

const modalStyles = {
  overlay: {
          backgroundColor: 'rgba(66, 66, 66, 0.95)',
          backdropFilter: 'blur(4px)',
          transition: "0.4s ease-in",
        },
        content: {
          borderColor: '#212121',
          paddingTop: '2em',
          paddingBottom: '2em',
          paddingRight: '2em',
          paddingLeft: '2em',
          margin: "auto",
          maxWidth: "40em",
          // alignItems: 'flex-start',
          color: '#eee',
          backgroundColor: '#212121',
          borderRadius: '4px',
          top: '150px',
          // left: '200x',
          // right: '100px',
          bottom: '200px',
          transition: "0.4s ease-in",
          // margin: "auto",
        }
}

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
    style={{justifyContent: "center"}}
    >
    {projects.map((project) => (
      <Grid item xl={3} lg={3} md={3} sm={6} xs={12} key={project.id} style={{backgroundImage: `url(${project.image})`, textAlign: "flex-start", padding: "1em",margin: "1em", width: "100%", height: "20em", borderRadius: "4px", overflow: "hidden"}}>
        <div id="Card--Overlay">
          <div className="Card--Text">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <button id="View--More--Button" onClick={() => expandModal(project)}>View More</button>
        </div>
      </Grid>
    ))}
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} 
    style={modalStyles}
    >
    <div id="Modal--Container">
    <Carousel showThumbs={false} showArrows={true} className="Carousel">
        <div>
        <img className="Modal--Main--Image" src={selectedProject && selectedProject.image} />
        </div>
        <div>
          <img src="https://i.picsum.photos/id/370/200/300.jpg?hmac=7gPWuhI1_LDcGkEssyW-1sPKu9NVl1KUoOs0nH7KXno" />
        </div>
        <div>
          <img src="https://i.picsum.photos/id/370/200/300.jpg?hmac=7gPWuhI1_LDcGkEssyW-1sPKu9NVl1KUoOs0nH7KXno" />           
        </div>
    </Carousel>   
      <div className="Modal--Text">
      <h2>{selectedProject && selectedProject.name}</h2>
        <p>Technologies: {selectedProject && selectedProject.technologies}</p>
        <p>{selectedProject && selectedProject.description}</p>
        </div>
      <div>
        <a href={selectedProject && selectedProject.githubUrl}><button className="View--Code--Button">View Code</button></a>
        <button className="Cancel--Preview--Button" onClick={closeModal}>Close</button>
        </div>
    </div>
    </Modal>
  </Grid>
);
}

export default ProjectItems
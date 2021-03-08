import React, {useState} from 'react';
import './ProjectItems.scss';
import Modal from 'react-modal';
import {Grid} from '@material-ui/core';

const ProjectItems = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const projects = [
  {
    id: '1',
    name: "ReLeaf",
    image: "https://i.imgur.com/l00Hbky.png",
    description: "Releaf is a crowdfunding single page web platform for natural disaster victims. Users are able to create a campaign or search and donate to those in need.",
    githubUrl: ''
    },
    {
    id: '2',
    name: "Mapper",
    image: "https://i.imgur.com/gpZt2Hf.png",
    description: "Mapper is a web app that utilizes the Google Maps Api to allow users to create and save maps with custom markers, each marker having its own title and description. Users can favourite their own or other user generated maps as well contributing to other user’s maps."
  },
  {
    id: '3',
    name: "Scheduler",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Regular%20View%20of%20Appointments.png",
    description: "Web application utilizing React built-in and custom hooks that allows users to add, edit and delete appointments."
  },
  {
    id: '4',
    name: "Jungle Rails",
    image: "https://raw.githubusercontent.com/marcusalint/jungle-rails/master/docs/front-page.png",
    description: "A mini e-commerce application built with Rails 4.2."
  },
  {
    id: '5',
    name: "Tweeter",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Form%20Validation%20and%20Interview%20Cancellation.png",
    description: "Single page Twitter clone application"
  },
  {
    id: '6',
    name: "TinyApp",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Book%20Interview.png",
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly)."
  },
   
]

 return (
   <>
  <Grid container
    direction="row"
    className="Project--Items" 
    xs={9} >
    {projects.map((project) => (
      <div className="Project--Card">
        <img src={project.image} className="Item--Main--Image"/>
        <div className="Card--Text">
          <p>{project.name}</p>
          <p>{project.description}</p>
        </div>
        <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
        <Modal isOpen={modalIsOpen}>
          <h2>Modal Title</h2>
          <p>Modal Body</p>
        </Modal>

      </div>
      
    ))}
  </Grid>

  </>
);
}

export default ProjectItems
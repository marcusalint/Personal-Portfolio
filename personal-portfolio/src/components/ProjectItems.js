import React from 'react';
import './ProjectItems.scss';
import {Grid} from '@material-ui/core';

const ProjectItems = () => {
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
    image: "https://via.placeholder.com/150",
    description: "Mapper is a web app that utilizes the Google Maps Api to allow users to create and save maps with custom markers, each marker having its own title and description. Users can favourite their own or other user generated maps as well contributing to other user’s maps."
  },
  {
    id: '3',
    name: "Scheduler",
    image: "https://via.placeholder.com/150",
    description: "Web application utilizing React built-in and custom hooks that allows users to add, edit and delete appointments."
  },
  {
    id: '4',
    name: "Jungle Rails",
    image: "https://via.placeholder.com/150",
    description: "A mini e-commerce application built with Rails 4.2."
  },
  {
    id: '5',
    name: "Tweeter",
    image: "https://via.placeholder.com/150",
    description: "Single page Twitter clone application"
  },
  {
    id: '6',
    name: "TinyApp",
    image: "https://via.placeholder.com/150",
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly)."
  },
   
]

 return (
  <Grid container
    direction="row"
    className="Project--Items" 
    xs={9} >
    {projects.map((project) => (
      <div className="Project--Card">
        <img src={project.image} className="Item--Main--Image"/>
        <p>{project.name}</p>
        <p>{project.description}</p>
      </div>
      
    ))}
  </Grid>
);
}

export default ProjectItems

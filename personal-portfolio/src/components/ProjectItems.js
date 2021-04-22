import React, {useState, useEffect} from 'react';
import './ProjectItems.scss';
import Modal from 'react-modal';
import {Grid} from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel, } from 'react-responsive-carousel';
import {useMediaQuery} from './hooks/useMediaQuery';

 const projects = [
  {
    id: '1',
    name: "ReLeaf",
    image: "https://i.imgur.com/l00Hbky.png",
    carouselImageOne: "https://github.com/marcusalint/ReLeaf/raw/master/docs/releaf_campaign.gif?raw=true",
    carouselImageTwo: "https://github.com/marcusalint/ReLeaf/raw/master/docs/releaf_search.gif?raw=true",
    carouselImageThree: "https://github.com/marcusalint/ReLeaf/raw/master/docs/Screen%20Shot%202021-02-02%20at%203.14.56%20PM.png?raw=true",
    description: "Releaf is a crowdfunding single page web platform for natural disaster victims. Users are able to create a campaign or search and donate to those in need.",
    githubUrl: 'https://github.com/marcusalint/ReLeaf',
    technologies: "React, PostgresQL, Express, NodeJS, Material-UI, Stripe, HTMl, SASS"
    },
    {
    id: '2',
    name: "Mapper",
    image: "https://i.imgur.com/gpZt2Hf.png",
    carouselImageOne: "https://github.com/ngampit/map-midterm-project/raw/master/Docs/Create-Delete-Marker.gif?raw=true",
    carouselImageTwo: "https://github.com/ngampit/map-midterm-project/raw/master/Docs/Favourite_Delete%20Map.gif?raw=true",
    description: "Mapper is a web app that utilizes the Google Maps Api to allow users to create and save maps with custom markers, each marker having its own title and description. Users can favourite their own or other user generated maps as well contributing to other user’s maps.",
    githubUrl: 'https://github.com/marcusalint/Mapper',
    technologies: "Express, NodeJS, PostgresQL, Jquery, Bootstrap and SASS"
  },
  {
    id: '3',
    name: "Scheduler",
    image: "https://raw.githubusercontent.com/marcusalint/scheduler/master/Images/Regular%20View%20of%20Appointments.png",
    carouselImageOne: "https://github.com/marcusalint/scheduler/raw/master/Images/Form%20Validation%20and%20Interview%20Cancellation.png?raw=true",
    carouselImageTwo: "https://github.com/marcusalint/scheduler/raw/master/Images/Book%20Interview.png?raw=true",
    description: "Web application utilizing React built-in and custom hooks that allows users to add, edit and delete appointments.",
    githubUrl: 'https://github.com/marcusalint/scheduler',
    technologies: "React, Express, Node.js, PostgreSQL, React, JSX, HTML, SASS and Javascript,"
  },
  {
    id: '4',
    name: "Jungle Rails",
    image: "https://raw.githubusercontent.com/marcusalint/jungle-rails/master/docs/front-page.png",
    carouselImageOne: "https://github.com/marcusalint/jungle-rails/raw/master/docs/cart-page.png?raw=true",
    carouselImageTwo: "https://github.com/marcusalint/jungle-rails/raw/master/docs/new-product.png?raw=true",
    description: "A mini e-commerce application built with Rails 4.2.",
    githubUrl: 'https://github.com/marcusalint/jungle-rails',
    technologies: "Rails, Ruby, RSpec, PolterGeist, Bootstrap"
  },
  {
    id: '5',
    name: "Tweeter",
    image: "https://github.com/marcusalint/tweeter/raw/master/public/images/Header.png?raw=true",
    carouselImageOne: "https://github.com/marcusalint/tweeter/raw/master/public/images/SubmitTweet.png?raw=true",
    description: "Single page Twitter clone application",
    githubUrl: 'https://github.com/marcusalint/tweeter',
    technologies: "HTML, CSS, Javascript, jQuery, AJAX"
  },
  {
    id: '6',
    name: "TinyApp",
    image: "https://github.com/marcusalint/tinyapp/raw/main/docs/Create-New-TinyURL.png?raw=true",
    carouselImageOne: "https://github.com/marcusalint/tinyapp/raw/main/docs/Urls-Page.png?raw=true",
    carouselImageTwo: "https://github.com/marcusalint/tinyapp/raw/main/docs/Login-Page.png?raw=true",
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    githubUrl: 'https://github.com/marcusalint/tinyapp',
    technologies: "Express, Node.js, EJS, Javascript"
  },
   
]


Modal.setAppElement('#root')

const ProjectItems = () => {

  //Breakpoints for media queries
  const xsMedia = useMediaQuery('(min-width: 0px)');
  const smMedia = useMediaQuery('(min-width: 600px)');
  const mdMedia = useMediaQuery('(min-width: 960px)');
  const lgMedia = useMediaQuery('(min-width: 1280px)');
  const xlMedia = useMediaQuery('(min-width: 1920px)');

  // Modal Styling
  const modalStyles = {
    container: (xsMedia, smMedia, mdMedia, lgMedia, xlMedia) => ({
      overlay: {
        backgroundColor: 'rgba(66, 66, 66, 0.95)',
        backdropFilter: 'blur(4px)',
        transition: "0.4s ease-in",
        zIndex: "999"
      },
      content: {
        borderColor: '#212121',
        paddingTop: '3em',
        paddingBottom: '2em',
        paddingRight: '2em',
        paddingLeft: '2em',
        margin: "auto",
        maxWidth: "40em",
        color: '#eee',
        backgroundColor: '#212121',
        borderRadius: '4px',
        top: smMedia ? '150px' : '120px',
        bottom: smMedia ? '200px' : 'auto',
        transition: "0.4s ease-in",
        
        // maxHeight: !smMedia ? "800px" : "450px"
        }
    })
  }
  
  //States
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  //Modal Functions
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
      <Grid item xl={3} lg={3} md={3} sm={4} xs={12} key={project.id} style={{
        backgroundImage: `url(${project.image})`, textAlign: "flex-start", padding: "1em",margin: "2em", width: "100%", height: "20em", borderRadius: "4px", overflow: "hidden", 
        }}>
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
    style={modalStyles.container(lgMedia)}
    >
    <div id="Modal--Container">
    <Carousel showThumbs={false} showArrows={true} className="Carousel">
        <div>
        <img className="Modal--Main--Image" src={selectedProject && selectedProject.image} />
      </div>
      <div>
        <img className="Modal--Main--Image" src={selectedProject && selectedProject.carouselImageOne} />
      </div>
      <div>
        <img className="Modal--Main--Image" src={selectedProject && selectedProject.carouselImageTwo} />
      </div>
      <div>
        <img className="Modal--Main--Image" src={selectedProject && selectedProject.carouselImageThree} />
      </div>
    </Carousel>   
      <div id="Modal--Text">
      <h2>{selectedProject && selectedProject.name}</h2>
        <p>Technologies: {selectedProject && selectedProject.technologies}</p>
        <p>{selectedProject && selectedProject.description}</p>
        </div>
      <div className="Modal--Buttons">
        <a href={selectedProject && selectedProject.githubUrl}><button className="View--Code--Button">View Code</button></a>
        <button className="Cancel--Preview--Button" onClick={closeModal}>Close</button>
        </div>
    </div>
    </Modal>
  </Grid>
);
}

export default ProjectItems
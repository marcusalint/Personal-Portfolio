import React from 'react'
import './ProjectsGrid.scss';

const projects = [
   {
    id: '1',
    name: "ReLeaf",
    image: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    githubUrl: ''
  },
  {
  id: '2',
  name: "Mapper",
  image: "https://via.placeholder.com/150",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
  id: '3',
  name: "Scheduler",
  image: "https://via.placeholder.com/150",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
  
]

const ProjectsGrid = () => {
  return (
    <div>
      <nav>
        <ul className="Projects--Nav">
          <li className="Projects--Nav--Item">All</li>
          <li className="Projects--Nav--Item">React JS</li>
          <li className="Projects--Nav--Item">Javascript</li>
          <li className="Projects--Nav--Item">Ruby/Rails</li>
        </ul>
      </nav>
      <div>
         <img src="img_girl.jpg" alt="Girl in a jacket"></img>
      </div>
    </div>
  )
}

export default ProjectsGrid

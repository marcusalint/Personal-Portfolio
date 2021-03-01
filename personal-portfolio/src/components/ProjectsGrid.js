import React from 'react'
import './ProjectsGrid.scss';
import ProjectItems from './ProjectItems';



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
        <ProjectItems />
      </div>
    </div>
  )
}

export default ProjectsGrid

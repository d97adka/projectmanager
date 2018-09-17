import React, { Component } from 'react';
import ProjectItem from './projectItem';


class Projects extends Component {

  render() {
    let projectItems; //let scopes variable to the nearest enclosing block while var to nearest function block.
    if(this.props.projects) {
      projectItems=this.props.projects.map(project => {
        //console.log(project);
        return(
          <ProjectItem key={project.title} project={project} />
        );
      });
    }

    return (
      <div className="Projects">
          {projectItems}
      </div>
    );
  }
}

export default Projects;

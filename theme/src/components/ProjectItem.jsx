import React from "react"
import {
  StyledProjectItem,
  ProjectLink,
  ProjectImage,
  ProjectContent,
} from "./styles"

const ProjectItem = ({ link, image, alt, name, badge }) => {
  return (
    <StyledProjectItem>
      <ProjectLink to={link}>
        <ProjectImage src={image} alt={alt} />
        <ProjectContent>
          <h3>{name}</h3>
          <p>{badge}</p>
        </ProjectContent>
      </ProjectLink>
    </StyledProjectItem>
  )
}

export default ProjectItem

import React from "react"
import {
  StyledProjectItem,
  ProjectLink,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectBadge,
} from "./styles"

const ProjectItem = ({ link, image, alt, name, badge }) => {
  return (
    <StyledProjectItem>
      <ProjectLink to={link}>
        <ProjectImage src={image} alt={alt} />
        <ProjectContent>
          <ProjectTitle>{name}</ProjectTitle>
          <ProjectBadge>{badge}</ProjectBadge>
        </ProjectContent>
      </ProjectLink>
    </StyledProjectItem>
  )
}

export default ProjectItem
